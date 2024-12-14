const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const { sendOtpEmail } = require("../services/emailService");

const loginAdmin = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password").notEmpty().withMessage("Password is required"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Generate a token
      const token = jwt.sign(
        { id: admin._id, email: admin.email },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h", // token expiry
        }
      );

      res.json({
        success: true,
        message: "Login successful",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
];

const createAdmin = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("Admin already exists!");
      return res.status(400).json({
        success: false,
        message: "Admin already exists!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    const admin = await newAdmin.save();

    res.status(201).json({ success: true, admin });

    console.log("Admin created successfully!");
  },
];

const forgotPassword = [
  body("email").isEmail().withMessage("Please enter a valid email"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email } = req.body;

    try {
      await sendOtpEmail(email);
      res.status(200).json({ success: true, message: "OTP sent to your email" });
    } catch (error) {
      console.error(error);
      if (error.message === "Admin not found") {
        return res.status(404).json({ success: false, message: error.message });
      }
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
];

const verifyOtp = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("otp").isLength({ min: 6, max: 6 }).withMessage("OTP must be 6 digits"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, otp } = req.body;

    try {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res
          .status(404)
          .json({ success: false, message: "Admin not found" });
      }

      if (admin.resetOtp !== otp) {
        return res.status(400).json({ success: false, message: "Invalid OTP" });
      }

      if (admin.otpExpires < Date.now()) {
        return res
          .status(400)
          .json({ success: false, message: "OTP has expired" });
      }

      res.status(200).json({
        success: true,
        message: "OTP verified. You can now reset your password",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
];

const resetPassword = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, newPassword } = req.body;

    try {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res
          .status(404)
          .json({ success: false, message: "Admin not found" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      admin.password = hashedPassword;
      admin.resetOtp = null;
      admin.otpExpires = null;

      await admin.save();

      res
        .status(200)
        .json({ success: true, message: "Password reset successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
];

module.exports = {
  loginAdmin,
  createAdmin,
  forgotPassword,
  verifyOtp,
  resetPassword,
};
