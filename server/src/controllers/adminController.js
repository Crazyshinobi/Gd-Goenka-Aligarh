const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const { sendOtpEmail } = require("../services/emailService");
const {
  getCount,
  getRecord,
  deleteRecord,
} = require("../common/commonDatabaseQueries");
const { sendResponse } = require("../utils/responseUtils");

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

      // Check role
      const isAdmin = admin.role === "admin" ? true : false;
      if (!isAdmin) {
        return res
          .status(401)
          .json({
            success: false,
            message: "Not allowed to access this portal",
          });
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
        name: admin.name,
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

    const { name, email, password, role } = req.body;
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
      name,
      email,
      password: hashedPassword,
      role,
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
      res
        .status(200)
        .json({ success: true, message: "OTP sent to your email" });
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

const getAdmins = async (req, res) => {
  try {
    const options = { name: 1, email: 1, role: 1, createdAt: 1 };
    const admins = await getRecord(Admin, (query = {}), options);
    sendResponse(res, 200, true, "Data fetched successfully", admins.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

const countAdmin = async (req, res) => {
  try {
    const response = await getCount(Admin, { role: "user" });

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) {
      return sendResponse(res, 404, false, "Record not found");
    }
    const deletedAdmin = await deleteRecord(Admin, {
      _id: id,
    });
    if (deletedAdmin.status) {
      sendResponse(res, 200, true, "Admin deleted successfully");
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

module.exports = {
  loginAdmin,
  createAdmin,
  forgotPassword,
  verifyOtp,
  resetPassword,
  countAdmin,
  getAdmins,
  deleteAdmin,
};
