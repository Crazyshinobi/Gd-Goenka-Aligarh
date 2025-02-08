const express = require("express");
const {
  getPaymentTransaction,
  deletePaymentTransaction,
  getPaymentTransactionbyUserId,
} = require("../controllers/paymentTransactionController");
const router = express.Router();

router.route("/").get(getPaymentTransaction);
router.route("/:id").delete(deletePaymentTransaction).get(getPaymentTransactionbyUserId);

module.exports = router;
