require('dotenv');
const sha512 = require("js-sha512");
const PaymentTransaction = require("../models/PaymentTransaction");
const AdmissionApplication = require("../models/AdmissionApplication");
const { createRecord } = require("../common/commonDatabaseQueries");

const config = {
  key: process.env.EASEBUZZ_KEY,
  salt: process.env.EASEBUZZ_SALT,
  env: process.env.EASEBUZZ_ENV,
  enable_iframe: process.env.EASEBUZZ_IFRAME,
};

function generateTransactionID() {
  const randomDigits1 = Math.floor(Math.random() * 90 + 10).toString();
  const randomLetters1 = Array(2)
    .fill(0)
    .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    .join("");
  const randomDigit2 = Math.floor(Math.random() * 10).toString();
  const randomLetters2 = Array(2)
    .fill(0)
    .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    .join("");
  const randomDigits3 = Math.floor(Math.random() * 90 + 10).toString();
  const transactionID = `T${randomDigits1}${randomLetters1}${randomDigit2}${randomLetters2}${randomDigits3}`;
  return transactionID;
}

const initiatePayment = async (req, res) => {
  data = req.body;
  if (
    data.productinfo === "Nursery" ||
    data.productinfo === "LKG" ||
    data.productinfo === "UKG" ||
    data.productinfo === "Class I" ||
    data.productinfo === "Class II" ||
    data.productinfo === "Class III" ||
    data.productinfo === "Class IV" ||
    data.productinfo === "Class V"
  ) {
    data.amount = "10500.00";
  } else if (
    data.productinfo === "Class VI" ||
    data.productinfo === "Class VII" ||
    data.productinfo === "Class VIII"
  ) {
    data.amount = "10750.00";
  } else if (
    data.productinfo === "Class IX" ||
    data.productinfo === "Class X"
  ) {
    data.amount = "13500.00";
  } else {
    data.amount = "13750.00";
  }
  data.txnid = generateTransactionID();
  var initiate_payment = require("../Easebuzz/initiate_payment");
  initiate_payment.initiate_payment(data, config, res);
};

const paymentResponse = async (req, res) => {
  function checkReverseHash(response) {
    var hashstring =
      config.salt +
      "|" +
      response.status +
      "|" +
      response.udf10 +
      "|" +
      response.udf9 +
      "|" +
      response.udf8 +
      "|" +
      response.udf7 +
      "|" +
      response.udf6 +
      "|" +
      response.udf5 +
      "|" +
      response.udf4 +
      "|" +
      response.udf3 +
      "|" +
      response.udf2 +
      "|" +
      response.udf1 +
      "|" +
      response.email +
      "|" +
      response.firstname +
      "|" +
      response.productinfo +
      "|" +
      response.amount +
      "|" +
      response.txnid +
      "|" +
      response.key;
    hash_key = sha512.sha512(hashstring);
    if (hash_key == req.body.hash) return true;
    else return false;
  }
  if (checkReverseHash(req.body)) {
    const data = req.body;
    const newTransaction = await createRecord(PaymentTransaction, data);
    if (newTransaction.status) {
      console.log("New Transaction recorded successfully");
    } else {
      console.log("failed to store transaction data");
    }
    if (data.status === "success") {
      const app = await AdmissionApplication.updateOne(
        { "personal_details.email": data.email },
        { $set: { feesPaid: true , status: "under review"} }
      );
      console.log("User feesPaid updated successfully");
      return res.redirect(`${process.env.BASE_URL}/payment-success`);
    } else {
      return res.redirect(`${process.env.BASE_URL}/payment-failure`);
    }
  }
  res.send("false, check the hash value");
};

module.exports = { initiatePayment, paymentResponse };
