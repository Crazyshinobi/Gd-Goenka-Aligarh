const { createRecord, getRecord, deleteRecord, getCount } = require("../common/commonDatabaseQueries");
const AdmissionApplication = require("../models/AdmissionApplication");
const { sendResponse } = require("../utils/responseUtils");
const fs = require("fs");
const path = require("path");

const createAdmissionApplication = async (req, res) => {
  const {
    general_information,
    personal_details,
    health_information,
    educational_background,
    parents_information,
    other_relatives,
    transport_facility,
    declaration,
  } = req.body;

  const errors = [];

  // Validate each field and add specific error messages
  if (!general_information) errors.push("General information is required");
  if (!personal_details) errors.push("Personal details are required");
  if (!health_information) errors.push("Health information is required");
  if (!educational_background)
    errors.push("Educational background is required");
  if (!parents_information) errors.push("Parents' information is required");
  if (!other_relatives) errors.push("Other relatives information is required");
  if (transport_facility === undefined)
    errors.push("Transport facility selection is required");
  if (!declaration) errors.push("Declaration agreement is required");

  // If there are errors, send a response with all errors
  if (errors.length > 0) {
    return sendResponse(res, 400, false, "Validation failed", { errors });
  }

  try {
    const newAdmissionApplication = await createRecord(AdmissionApplication, {
      general_information,
      personal_details,
      health_information,
      educational_background,
      parents_information,
      other_relatives,
      transport_facility,
      declaration,
    });

    if (newAdmissionApplication.status) {
      sendResponse(
        res,
        201,
        true,
        "Application Submitted successfully",
        newAdmissionApplication.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Something went wrong",
        newAdmissionApplication
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const getAdmissionApplication = async (req, res) => {
  try {
    const admissionApplications = await getRecord(AdmissionApplication);
    if (admissionApplications.status) {
      sendResponse(
        res,
        200,
        true,
        "Data fetched successfully",
        admissionApplications.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Internal Server Error",
        admissionApplications
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const deleteAdmissionApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteAdmissionApplication = await deleteRecord(AdmissionApplication, { _id: id });
    if (deleteAdmissionApplication.status) {
        sendResponse(
          res,
          200,
          true,
          "Admission Application deleted successfully",
          deleteAdmissionApplication
        );
      } else {
        sendResponse(res, 404, false, "Record not found");
      }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const countAdmissionApplication = async (req, res) => {
  try {
    const response = await getCount(AdmissionApplication);
    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};


module.exports = { createAdmissionApplication, getAdmissionApplication, deleteAdmissionApplication, countAdmissionApplication };
