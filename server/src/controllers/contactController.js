const {
  createRecord,
  getRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const { sendResponse } = require("../utils/responseUtils");
const Contact = require("../models/Contact");
const { sendAdmissionEmail } = require("../services/admissionEmailService");

const createContact = async (req, res) => {
  const {
    name,
    email,
    mobile,
    message,
  } = req.body;

  try {
    const data = {
      name,
      email,
      mobile,
      message,
    };

    const emailSent = await sendAdmissionEmail(data);
    if (emailSent) {
      const newContact = await createRecord(Contact, data);
      if (newContact.status) {
        sendResponse(
          res,
          201,
          true,
          "Message sent successfully",
          newContact.data
        );
      } else {
        sendResponse(res, 500, false, "Something went wrong", newContact);
      }
    } else {
      console.log("Email was not sent");
    }
  } catch (error) {
    console.error("Error in createContact:", error);
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
