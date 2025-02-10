const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const Admin = require("../models/Admin");
const { userEmailService } = require("../services/userEmailService");
const { sendResponse } = require("../utils/responseUtils");

async function generateRandomPassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const userRegister = async (req, res) => {
  try {
    const { name, email } = req.body;
    const password = await generateRandomPassword(12);
    const role = "user";
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Admin({
      name,
      email,
      password: hashedPassword,
      role,
    });

    try {
      if (newUser) {
        const emailSent = await userEmailService({ name, email, password });
        if (emailSent) {
          console.log("User registration mail sent sucessfully!");
        }
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }

    const user = await newUser.save();
    sendResponse(res, 200, true, "User registered", user);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const userLogin = [
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
      const user = await Admin.findOne({ email });

      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Check role
      const isUser = user.role === "user" ? true : false;
      if (!isUser) {
        return res
          .status(401)
          .json({ success: false, message: "Not allowed to access this portal" });
      }
      // Generate a User token
      const userToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h", // token expiry
        }
      );

      res.json({
        success: true,
        message: "Login successful",
        name: user.name,
        userID: user._id,
        userToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  },
];

module.exports = { userRegister, userLogin, generateRandomPassword };