const sgMail = require('@sendgrid/mail');
require('dotenv').config(); // To load your SendGrid API Key from .env file
const {
  createRecord,
  getRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const { sendResponse } = require("../utils/responseUtils");
const Contact = require("../models/Contact");

// Initialize SendGrid with the API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createContact = async (req, res) => {
  const {
    parent_name,
    student_name,
    parent_email_address,
    mobile,
    state,
    city,
    grade,
  } = req.body;

  try {
    // Create the new contact record in the database
    const newContact = await createRecord(Contact, {
      parent_name,
      student_name,
      parent_email_address,
      mobile,
      state,
      city,
      grade,
    });

    if (newContact.status) {
      // After successfully creating the contact, send the email
      const msg = {
        to: 'webdev.ayush@seglko.org',  // Send the email to the parent's email address
        from: parent_email_address,  // Replace with your verified SendGrid sender email
        subject: `New Contact Request from ${parent_name}`,
        text: `
          You have received a new contact form submission:
          
          Parent Name: ${parent_name}
          Student Name: ${student_name}
          Mobile: ${mobile}
          State: ${state}
          City: ${city}
          Grade: ${grade}
          
          Please review the contact details.
        `,
      };

      try {
        // Send the email via SendGrid
        await sgMail.send(msg);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
      }

      // Send the response back to the client
      sendResponse(res, 201, true, "Message sent successfully", newContact.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong", newContact);
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const getContact = async (req, res) => {
  try {
    const contacts = await getRecord(Contact);

    if (contacts.status) {
      sendResponse(res, 200, true, "Data fetched successfully", contacts.data);
    } else {
      sendResponse(res, 500, false, "Internal Server Error", contacts);
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteResult = await deleteRecord(Contact, { _id: id });

    if (deleteResult.status) {
      sendResponse(
        res,
        200,
        true,
        "Contact deleted successfully",
        deleteResult.data
      );
    } else {
      sendResponse(res, 404, false, "Record not found");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const countContact = async (req, res) => {
  try {
    const response = await getCount(Contact);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

module.exports = { createContact, getContact, deleteContact, countContact };