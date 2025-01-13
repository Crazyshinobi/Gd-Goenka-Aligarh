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

  if (
    !general_information ||
    !personal_details ||
    !health_information ||
    !educational_background ||
    !parents_information ||
    !other_relatives ||
    !transport_facility ||
    !declaration
  ) {
    return sendResponse(res, 400, false, "All fields are required");
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
