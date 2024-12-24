const express = require("express");
const {
  loginAdmin,
  createAdmin,
  forgotPassword,
  resetPassword,
  verifyOtp,
  countAdmin,
  getAdmins,
  deleteAdmin,
} = require("../controllers/adminController");
const router = express.Router();

router.get("/", getAdmins);
router.post("/login", loginAdmin);
router.post("/signup", createAdmin);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);
router.get("/count", countAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
