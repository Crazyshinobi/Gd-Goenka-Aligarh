const nodemailer = require("nodemailer");
const crypto = require("crypto");
const Admin = require("../models/Admin");
const { getSingleRecord } = require("../common/commonDatabaseQueries");

const sendOtpEmail = async (email) => {
  const otp = crypto.randomInt(100000, 999999).toString();
  const otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

  // Find admin by email using getSingleRecord
  const result = await getSingleRecord(Admin, { email });
  const admin = result.data;

  if (!admin) {
    throw new Error("Admin not found");
  }

  const greeting = admin.role === "admin" ? "Dear Admin," : "Dear User," ;
  // Update admin with OTP and expiration
  admin.resetOtp = otp;
  admin.otpExpires = otpExpires;

  // Save the updated admin document
  await admin.save();

  // Prepare email content
  const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333; font-size: 24px; margin: 0;">OTP Verification</h1>
        <p style="font-size: 16px; line-height: 1.5; color: #555; margin: 20px 0;">${greeting}</p>
        <p style="font-size: 16px; line-height: 1.5; color: #555; margin: 20px 0;">Thank you for using our service. To reset your password, please use the following One-Time Password (OTP):</p>
        
        <div style="font-size: 24px; font-weight: bold; color: #007bff; margin: 20px 0;">${otp}</div>
        
        <p style="font-size: 16px; line-height: 1.5; color: #555; margin: 20px 0;">This OTP is valid for 10 minutes. Please do not share this code with anyone.</p>
        
        <p style="font-size: 16px; line-height: 1.5; color: #555; margin: 20px 0;">If you did not request this, please ignore this email.</p>

        <div style="margin-top: 20px; font-size: 14px; color: #777;">
            <p>Thank you,<br>Saroj Education Group - Gd Goenka Public School Aligarh Team</p>
        </div>
    </div>
</body>
</html>
    `;

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "GD Goenka Public School Aligarh Password Reset OTP",
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);

  return otp;
};

module.exports = { sendOtpEmail };