import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toaster } from "react-hot-toast";
import { DeleteModal } from "./DeleteModal";
import { ExcelExport } from "./ExcelExport";
import { RefreshButton } from "./RefreshButton";

export const BasicTable = ({ data, refetch, apiURL, columns }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    data && (
      <>
        <Toaster />
        <div className="flex items-center justify-end dark:bg-gray-700 dark:text-white my-5">
          <RefreshButton refetch={refetch} />
          <ExcelExport data={data} columns={columns} />
        </div>
        <DataTable
          value={data}
          size="normal"
          removableSort
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          stripedRows
          tableStyle={{ minWidth: "50rem" }}
        >
          {columns.map((col, i) => (
            <Column
              key={i}
              field={col.field}
              header={col.header}
              body={col.body}
              sortable={col.sortable || false}
              style={{ whiteSpace: "nowrap" }}
            />
          ))}
          <Column
            header="Actions"
            body={(rowData) => (
              <button
                onClick={() => {
                  setSelectedRecord(rowData);
                  toggleModal();
                }}
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2"
                type="button"
              >
                <div className="flex gap-2 items-center">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                  <p>Delete</p>
                </div>
              </button>
            )}
          />
        </DataTable>

        {modalVisible && selectedRecord && (
          <DeleteModal
            record={selectedRecord}
            toggleModal={toggleModal}
            refetch={refetch}
            apiURL={apiURL}
          />
        )}
      </>
    )
  );
};
