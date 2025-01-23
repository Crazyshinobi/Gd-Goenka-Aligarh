const express = require("express");
const {
  initiatePayment,
  paymentResponse,
} = require("../controllers/paymentController");
const router = express.Router();

router.route("/initiate_payment").post(initiatePayment);
router.route("/response").post(paymentResponse);

module.exports = router;
