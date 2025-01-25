const express = require("express");
const {
  getPaymentTransaction,
  deletePaymentTransaction,
} = require("../controllers/paymentTransactionController");
const router = express.Router();

router.route("/").get(getPaymentTransaction);
router.route("/:id").delete(deletePaymentTransaction);

module.exports = router;
