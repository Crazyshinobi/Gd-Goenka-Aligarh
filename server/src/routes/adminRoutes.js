const express = require("express");
const {
  loginAdmin,
  createAdmin,
  forgotPassword,
  resetPassword,
  verifyOtp,
  countAdmin,
} = require("../controllers/adminController");
const router = express.Router();

router.post("/login", loginAdmin);
router.post("/signup", createAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);
router.get("/count", countAdmin);

module.exports = router;
