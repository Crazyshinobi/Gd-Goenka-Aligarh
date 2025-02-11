const nodemailer = require("nodemailer");

const sendAdmissionEmail = async (data) => {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Admission Application</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color: #333; margin: 0;">New Admission Application</h1>
        <p style="font-size: 16px; line-height: 1.5; color: #555; margin: 20px 0;">Dear Admin,</p>
        <p style="font-size: 16px; line-height: 1.5; color: #555; margin: 20px 0;">A new admission application has been submitted with the following details:</p>
        <div style="margin: 20px 0; padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 5px 0;"><strong>Email Address:</strong> ${data.email}</p>
            <p style="margin: 5px 0;"><strong>Mobile:</strong> ${data.mobile}</p>
            <p style="margin: 5px 0;"><strong>Message:</strong> ${data.message}</p>
        </div>
        <p style="font-size: 16px; line-height: 1.5; color: #555; margin: 20px 0;">Please take the necessary action.</p>
        <div style="margin-top: 20px; font-size: 14px; color: #777;">
            <p>Thank you,<br>GD Goenka Aligarh Team</p>
        </div>
    </div>
</body>
</html>
`;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "ceo@admissionx.info",
    subject: "New Admission Application - GD Goenka Public School Aligarh",
    html: htmlContent,
  };

  try {
    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = { sendAdmissionEmail };
