const { getRecord, deleteRecord } = require("../common/commonDatabaseQueries");
const Admin = require("../models/Admin");
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
    const deletedPaymentTransaction = await deleteRecord(PaymentTransaction, {
      _id: id,
    });
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

const getPaymentTransactionbyUserId = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Admin.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userEmail = user.email;

    const paymentTransactions = await PaymentTransaction.find({
      email: userEmail,
    });

    if (paymentTransactions.length === 0) {
      return res
        .status(404)
        .json({ message: "No payment transactions found for this user" });
    }

    return res.status(200).json({ success: true, paymentTransactions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching payment transactions",
    });
  }
};

module.exports = {
  getPaymentTransaction,
  deletePaymentTransaction,
  getPaymentTransactionbyUserId,
};
