const {
  createRecord,
  getRecord,
  getSingleRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const AdmissionApplicationQuery = require("../models/AdmissionApplicationQuery");
const { sendResponse } = require("../utils/responseUtils");

const createAdmissionApplicationQuery = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    sendResponse(res, 400, false, "All fields are required");
  }
  try {
    const newAdmissionApplicationQuery = await createRecord(
      AdmissionApplicationQuery,
      {
        name,
        email,
        message,
      }
    );

    if (newAdmissionApplicationQuery.status) {
      sendResponse(
        res,
        201,
        true,
        "Message sent successfully",
        newAdmissionApplicationQuery.data
      );
    } else {
      sendResponse(
        500,
        false,
        "Something went wrong",
        newAdmissionApplicationQuery
      );
    }
  } catch (error) {
    console.log(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

const getAdmissionApplicationQuery = async (req, res) => {
  try {
    const admissionApplicationQueries = await getRecord(
      AdmissionApplicationQuery
    );
    if (admissionApplicationQueries.status) {
      sendResponse(
        res,
        200,
        true,
        "Data fetched successfully",
        admissionApplicationQueries.data
      );
    } else {
      sendResponse(res, 500, false, "something went wrong");
    }
  } catch (error) {
    console.log(error);
    sendResponse(res, 500, false, "Internal server error");
  }
};

const deleteAdmissionApplicationQuery = async (req, res) => {
  const { id } = req.params;

  try {
    const recordToDelete = await getSingleRecord(AdmissionApplicationQuery, {
      _id: id,
    });

    if (!recordToDelete || !recordToDelete.status) {
      return sendResponse(res, 404, false, "Record not found");
    }

    const deletionResult = await deleteRecord(AdmissionApplicationQuery, {
      _id: id,
    });

    if (deletionResult && deletionResult.status) {
      return sendResponse(
        res,
        200,
        true,
        "Deleted successfully",
        deletionResult.data
      );
    } else {
      return sendResponse(res, 500, false, "Failed to delete the record");
    }
  } catch (error) {
    console.error("Error while deleting admission application query:", error);
    return sendResponse(
      res,
      500,
      false,
      "Internal server error",
      error.message || error
    );
  }
};

const countAdmissionApplicationQuery = async (req, res) => {
  try {
    const response = await getCount(AdmissionApplicationQuery);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

module.exports = {
  createAdmissionApplicationQuery,
  getAdmissionApplicationQuery,
  deleteAdmissionApplicationQuery,
  countAdmissionApplicationQuery
};
