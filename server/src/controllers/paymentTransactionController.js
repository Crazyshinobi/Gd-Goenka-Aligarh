const { getRecord, deleteRecord } = require("../common/commonDatabaseQueries");
const PaymentTransaction = require("../models/PaymentTransaction");
const { sendResponse } = require("../utils/responseUtils");

const getPaymentTransaction = async (req, res) => {
  try {
    const paymentTransaction = await getRecord(PaymentTransaction);

    if (paymentTransaction.status) {
      sendResponse(
        res,
        200,
        true,
        "Data fetched sucessfully",
        paymentTransaction.data
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.log(error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const deletePaymentTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPaymentTransaction = await deleteRecord(PaymentTransaction, { _id: id });
    if (deletedPaymentTransaction.status) {
        sendResponse(
          res,
          200,
          true,
          "Payment Transaction deleted successfully",
          deletedPaymentTransaction
        );
      } else {
        sendResponse(res, 404, false, "Record not found");
      }
  } catch (error) {
    console.log(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};
module.exports = { getPaymentTransaction, deletePaymentTransaction };
