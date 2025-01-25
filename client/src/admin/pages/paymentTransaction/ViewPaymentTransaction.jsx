import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { useFetchData } from "../../../hooks/useFetchData";
import { BasicTable } from "../../components/BasicTable";

export const ViewPaymentTransaction = () => {
  document.title = "Admin - View Payment Transactions";
  const apiURL = `${process.env.REACT_APP_BASE_URL}/api/v1/payment-transaction/`;
  const { data, loading, error, refetch } = useFetchData(apiURL);
  const transactions = data?.data || [];
  const columns = [
    {
      header: "S.No",
      body: (rowData, { rowIndex }) => rowIndex + 1,
    },
    { field: "firstname", header: "Username" },
    { field: "email", header: "Email Address" },
    { field: "phone", header: "Phone" },
    { field: "productinfo", header: "Grade" },
    { field: "payment_source", header: "Payment Source" },
    { field: "txnid", header: "Transaction ID" },
    { field: "easepayid", header: "Easepay ID" },
    { field: "status", header: "Payment Status" },
    { field: "mode", header: "Payment Mode" },
    { field: "amount", header: "Amount", body: (rowData) => '₹' + parseInt(rowData.amount) },
    { field: "error_Message", header: "Message" },
  ];

  const fields = [
    { name: "name", label: "Name of Job", required: true, type: "text" },
    { name: "subject", label: "Subject", required: true, type: "text" },
  ];

  return (
    <>
      <AdminLayout />
      <div className="p-4 py-6 sm:ml-64 dark:bg-gray-700 min-h-screen">
        <div className="p-2 border-2 border-gray-200 rounded-lg dark:border-white mt-14">
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white py-5">
            View Payment Transactions
          </h3>
          <BasicTable
            fields={fields}
            data={transactions}
            refetch={refetch}
            apiURL={apiURL}
            columns={columns}
          />
        </div>
      </div>
    </>
  );
};
