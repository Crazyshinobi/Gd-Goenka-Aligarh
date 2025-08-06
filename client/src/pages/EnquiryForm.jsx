import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import { State, City } from "country-state-city";
import { usePostRequest } from "../hooks/usePostRequest";

const EnquiryForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    parent_name: "",
    student_name: "",
    parent_email_address: "",
    mobile: "",
    state: null,
    city: null,
    grade: "",
  });

  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.parent_name)
      newErrors.parent_name = "Parent name is required";
    if (!formData.student_name)
      newErrors.student_name = "Student name is required";
    if (!formData.parent_email_address)
      newErrors.parent_email_address = "Parent email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.parent_email_address
      )
    ) {
      newErrors.parent_email_address = "Invalid email address";
    }
    if (!formData.mobile) newErrors.mobile = "Parent mobile number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.grade) newErrors.grade = "Class is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/admission-enquiry/`;

  const { postRequest, error } = usePostRequest(apiURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      const submissionData = {
        ...formData,
        state: formData.state ? formData.state.label : "",
        city: formData.city ? formData.city.label : "",
      };
      const response = await postRequest(submissionData);

      if (response && response.success) {
        setFormData({
          parent_name: "",
          student_name: "",
          parent_email_address: "",
          mobile: "",
          state: null,
          city: null,
          grade: "",
        });
        setTimeout(() => {
          setLoading(false);
          toast.success("Thank you for your enquiry!");
        });
      } else {
        toast.error("Failed to submit the form.");
        console.error("Error Submitting form:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const indiaStates = State.getStatesOfCountry("IN");
    setStates(
      indiaStates.map((state) => ({
        label: state.name,
        value: state.isoCode,
      }))
    );
  }, []);

  useEffect(() => {
    if (formData.state) {
      const stateCities = City.getCitiesOfState("IN", formData.state.value);
      setCities(
        stateCities.map((city) => ({
          label: city.name,
          value: city.name,
        }))
      );
    } else {
      setCities([]);
    }
  }, [formData.state]);

  return (
    <div className="w-full p-6 bg-[#2a3c7e] rounded-lg shadow-lg">
      <div className="mb-2 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
          Get In Touch
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-1 sm:space-y-1">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 mb-4">
          {/* Parent Name and Student Name */}
          <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="parentName"
                className="block text-sm font-semibold text-white mb-1"
              >
                Parent Name
              </label>
              <input
                type="text"
                id="parentName"
                name="parent_name"
                value={formData.parent_name}
                onChange={handleChange}
                className="mt-1 p-2 sm:p-3 block w-full rounded-lg outline-none border-2 border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
                placeholder="Enter parent's full name"
              />
              {errors.parent_name && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.parent_name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="studentName"
                className="block text-sm font-semibold text-white mb-1"
              >
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                name="student_name"
                value={formData.student_name}
                onChange={handleChange}
                className="mt-1 p-2 sm:p-3 block w-full rounded-lg outline-none border-2 border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
                placeholder="Enter student's full name"
              />
              {errors.student_name && (
                <p className="mt-1 text-sm text-red-300">
                  {errors.student_name}
                </p>
              )}
            </div>
          </div>

          {/* Parent Email */}
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="parent_email_address"
              className="block text-sm font-semibold text-white mb-1"
            >
              Parent Email
            </label>
            <input
              type="email"
              id="parentEmail"
              name="parent_email_address"
              value={formData.parent_email_address}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg outline-none border-2 border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
              placeholder="Enter parent's email"
            />
            {errors.parent_email_address && (
              <p className="mt-1 text-sm text-red-300">
                {errors.parent_email_address}
              </p>
            )}
          </div>

          {/* State and City */}
          <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-semibold text-white mb-1"
              >
                State
              </label>
              <Select
                id="state"
                name="state"
                options={states}
                value={formData.state}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    state: selectedOption,
                    city: null,
                  })
                }
                className="react-select-container"
                classNamePrefix="react-select"
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-300">{errors.state}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-white mb-1 "
              >
                City
              </label>
              <Select
                id="city"
                name="city"
                options={cities}
                value={formData.city}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, city: selectedOption })
                }
                isDisabled={!formData.state}
                className="react-select-container"
                classNamePrefix="react-select"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-300">{errors.city}</p>
              )}
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="studentMobile"
              className="block text-sm font-semibold text-white mb-1"
            >
              Parent Mobile No.
            </label>
            <input
              type="tel"
              id="studentMobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 outline-none border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
              placeholder="Enter 10-digit mobile number"
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-300">{errors.mobile}</p>
            )}
          </div>

          {/* Grade/Class */}
          <div>
            <label
              htmlFor="class"
              className="block text-sm font-semibold text-white mb-1"
            >
              Class
            </label>
            <select
              id="class"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="mt-1 p-2 sm:p-3 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:border-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50"
            >
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="class I">Class I</option>
              <option value="class II">Class II</option>
              <option value="class III">Class III</option>
              <option value="class IV">Class IV</option>
              <option value="class V">Class V</option>
              <option value="class VI">Class VI</option>
              <option value="class VII">Class VII</option>
              <option value="class VIII">Class VIII</option>
              <option value="class IX">Class IX</option>
              <option value="class X">Class X</option>
              <option value="class XI">Class XI</option>
              <option value="class XII">Class XII</option>
            </select>
            {errors.grade && (
              <p className="mt-1 text-sm text-red-300">{errors.grade}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 border border-[#bea05a] rounded-md shadow-lg text-sm font-medium text-white bg-[#bea05a] hover:bg-[#bea05a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bea05a] transition duration-150 ease-in-out transform hover:scale-105"
        >
          {loading ? <div className="loader1"></div> : "Enquire now"}
        </button>
      </form>
      <Toaster />
      <style>{`
        .loader1 {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .react-select-container .react-select__control {
          background-color: white;
          border-radius: 0.5rem;
          border: 2px solid #D1D5DB;
        }

        .react-select-container .react-select__control:hover {
          border-color: red;
        }

        .react-select-container .react-select__control--is-focused {
          box-shadow: 0 0 0 1px red;
          border-color: red;
        }

        .react-select-container .react-select__menu {
          background-color: white;
          border-radius: 0.5rem;
        }

        .react-select-container .react-select__option {
          background-color: white;
        }

        .react-select-container .react-select__option--is-focused {
          background-color: #F3F4F6;
        }

        .react-select-container .react-select__option--is-selected {
          background-color: #4F46E5;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default EnquiryForm;
