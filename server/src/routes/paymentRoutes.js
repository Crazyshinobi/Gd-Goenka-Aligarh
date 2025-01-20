const express = require("express");
const {
  response,
  initiatePayment,
  transaction,
  transactionDate,
  payout,
  refund,
} = require("../controllers/paymentController");
const router = express.Router();

router.route("/response").post(response);
router.route("/initiate_payment").post(initiatePayment);
router.route("/transaction").post(transaction);
router.route("/transaction_date").post(transactionDate);
router.route("/payout").post(payout);
router.route("/refund").post(refund);

module.exports = router;
