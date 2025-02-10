const {
  createRecord,
  getRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const { sendResponse } = require("../utils/responseUtils");
const AdmissionEnquiry = require("../models/AdmissionEnquiry");

const createAdmissionEnquiry = async (req, res) => {
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
    const data = {
      parent_name,
      student_name,
      parent_email_address,
      mobile,
      state,
      city,
      grade,
    };

    const newAdmissionEnquiry = await createRecord(AdmissionEnquiry, data);
    if (newAdmissionEnquiry.status) {
      sendResponse(
        res,
        201,
        true,
        "Message sent successfully",
        newAdmissionEnquiry.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Something went wrong",
        newAdmissionEnquiry
      );
    }
  } catch (error) {
    console.error("Error in create Admission Enquiry:", error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const getAdmissionEnquiry = async (req, res) => {
  try {
    const admissionEnquiries = await getRecord(AdmissionEnquiry);

    if (admissionEnquiries.status) {
      sendResponse(
        res,
        200,
        true,
        "Data fetched successfully",
        admissionEnquiries.data
      );
    } else {
      sendResponse(
        res,
        500,
        false,
        "Internal Server Error",
        admissionEnquiries
      );
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const deleteAdmissionEnquiry = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteResult = await deleteRecord(AdmissionEnquiry, { _id: id });

    if (deleteResult.status) {
      sendResponse(
        res,
        200,
        true,
        "Admission  Enquiry deleted successfully",
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

const countAdmissionEnquiry = async (req, res) => {
  try {
    const response = await getCount(AdmissionEnquiry);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

module.exports = {
  createAdmissionEnquiry,
  getAdmissionEnquiry,
  deleteAdmissionEnquiry,
  countAdmissionEnquiry,
};
