import { useState, useEffect } from "react";
import { useUpdateRecord } from "../../hooks/useUpdateRecord";
import { Button } from "../components/Button";

export const UpdateModal = ({
  record,
  toggleModal,
  refetch,
  apiURL,
  fields,
}) => {
  // Initialize formData with empty values for text fields only
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    fields.forEach((field) => {
      if (field.type !== "file" && field.type !== "file-multiple") {
        initialFormData[field.name] = "";
      }
    });
    return initialFormData;
  });

  // Update formData when record changes
  useEffect(() => {
    if (record) {
      const updatedData = { ...formData };
      fields.forEach((field) => {
        if (field.type !== "file" && field.type !== "file-multiple") {
          updatedData[field.name] = record[field.name] || "";
        }
      });
      setFormData(updatedData);
    }
  }, [record, fields]); // Re-run if record or fields change

  const { updateRecord, loading, error } = useUpdateRecord(apiURL, formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (record) {
      await updateRecord(record._id);
      if (!loading && !error) {
        toggleModal(); // Close the modal after successful update
        refetch(); // Refresh the data
      }
    }
  };

  // Modify the handleSingleFileChange function
  const handleSingleFileChange = (e, fieldName) => {
    const file = e.target.files[0]; // Get the actual file
    setFormData({
      ...formData,
      [fieldName]: file, // Store the file object itself
    });
  };

  // Modify the handleMultipleFileChange function
  const handleMultipleFileChange = (e, fieldName) => {
    const files = e.target.files; // Get the file list (FileList object)
    let fileArray = [];

    for (let i = 0; i < files.length; i++) {
      fileArray.push(files[i]); // Push the file object to the array
    }

    setFormData({
      ...formData,
      [fieldName]: fileArray, // Store the array of file objects
    });
  };
  // Render the appropriate input fields based on type
  const renderInputField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            id={field.name}
            name={field.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            value={formData[field.name]}
            onChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
            required={field.required || false}
          />
        );

      case "file":
        return (
          <input
            type="file"
            id={field.name}
            name={field.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            onChange={(e) => handleSingleFileChange(e, field.name)} // For single file upload
            required={field.required || false}
          />
        );

      case "file-multiple":
        return (
          <input
            type="file"
            id={field.name}
            name={field.name}
            multiple
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            onChange={(e) => handleMultipleFileChange(e, field.name)} // For multiple file upload
            required={field.required || false}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        !toggleModal ? "hidden" : ""
      } fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50`}
    >
      <div className="relative p-3 w-full max-w-md max-h-full bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-3 border-b rounded-t dark:border-gray-600">
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white">
            Edit Record
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => toggleModal(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 mb-4 sm:grid-cols-12">
            {fields.map((field) => (
              <div key={field.name} className="col-span-12">
                <label
                  htmlFor={field.name}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {field.label}
                </label>
                {renderInputField(field)}
              </div>
            ))}
            <div className="col-span-12">
              <Button name="Update Record" loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
