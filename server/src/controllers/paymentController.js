const sha512 = require("js-sha512");
const config = {
  key: process.env.EASEBUZZ_KEY,
  salt: process.env.EASEBUZZ_SALT,
  env: process.env.EASEBUZZ_ENV,
  enable_iframe: process.env.EASEBUZZ_IFRAME,
};

const response = (req, res) => {
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
    res.send(req.body);
  }
  res.send("false, check the hash value ");
};

const initiatePayment = (req, res) => {
  data = req.body;
  var initiate_payment = require("../Easebuzz/initiate_payment.js");
  initiate_payment.initiate_payment(data, config, res);
};

const transaction = (req, res) => {
  data = req.body;
  var transaction = require("../Easebuzz/transaction.js");
  transaction.transaction(data, config, res);
};

const transactionDate = (req, res) => {
  data = req.body;
  var transaction_date = require("../Easebuzz/tranaction_date.js");
  transaction_date.tranaction_date(data, config, res);
};

const payout = (req, res) => {
  data = req.body;
  var payout = require("../Easebuzz/payout.js");
  payout.payout(data, config, res);
};

const refund = (req, res) => {
  data = req.body;
  var refund = require("../Easebuzz/refund.js");
  refund.refund(data, config, res);
};

module.exports = {
  response,
  initiatePayment,
  transaction,
  transactionDate,
  payout,
  refund,
};
