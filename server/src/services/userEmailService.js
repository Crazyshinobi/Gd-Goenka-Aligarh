const nodemailer = require("nodemailer");
const userEmailService = async ({ name, email, password }) => {
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Admission Application</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f8f9fa; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <header style="text-align: center; margin-bottom: 30px;">
                <img src="https://gdgpsaligarh.com/GD-Goenka-logo.png" alt="GD Goenka Aligarh Logo" style="max-width: 150px; margin-bottom: 15px;">
                <h1 style="color: #007bff; margin: 0; font-size: 24px; font-weight: bold;">New Admission Application</h1>
            </header>
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 15px 0;">Dear ${name},</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 15px 0;">Thank you for applying at GD Goenka Public School, Aligarh.</p>
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 15px 0;">You may now directly log in and start filling your application by clicking the button below.</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="https://gdgpsaligarh.com/admission/application-form/login" 
                   style="background-color: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; display: inline-block;">
                   Login to Application
                </a>
            </div>
    
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin: 15px 0;">If clicking the link doesn't work, you can copy and paste the link into your browser's address window:</p>
            
            <p style="font-size: 14px; color: #007bff; word-wrap: break-word; margin: 15px 0;">
                <a href="https://gdgpsaligarh.com/admission/application-form/login" 
                   style="color: #007bff; text-decoration: none;">
                   https://gdgpsaligarh.com/admission/application-form/login
                </a>
            </p>
    
            <div style="margin: 20px 0; padding: 20px; background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 5px;">
                <p style="margin: 5px 0; font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0; font-size: 16px; color: #333;"><strong>Password:</strong> ${password}</p>
            </div>
    
            <footer style="text-align: center; margin-top: 30px; font-size: 14px; color: #6c757d;">
                <p>Admission Office,<br>GD Goenka Public School Aligarh Team</p>
                <p style="margin-top: 10px; font-size: 12px;">&copy; ${new Date().getFullYear()} GD Goenka Public School, Aligarh. All rights reserved.</p>
            </footer>
        </div>
    </body>
    </html>`;
    
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
    to: email,
    subject: "Account Details - Gd Goenka Public School Aligarh Team",
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

module.exports = { userEmailService };
