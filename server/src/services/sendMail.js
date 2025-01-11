require('dotenv').config();
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with the API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Send email function
const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Send the email to the email provided by the user in the form
  const msg = {
    to: email, // User's email address from the form
    from: 'your-email@example.com', // Replace with your verified SendGrid sender email
    subject: `New Message from ${name}`,
    text: `You have received a new message from ${name} (${email}).\n\nMessage:\n${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

module.exports = { sendEmail };