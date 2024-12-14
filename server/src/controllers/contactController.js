const {
  createRecord,
  getRecord,
  deleteRecord,
} = require("../common/commonDatabaseQueries");
const { sendResponse } = require("../utils/responseUtils");
const Contact = require("../models/Contact");

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

module.exports = { createContact, getContact, deleteContact };
