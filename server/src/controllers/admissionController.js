const {
  createRecord,
  getRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const Admission = require("../models/Admission");
const { sendResponse } = require("../utils/responseUtils");

const createAdmission = async (req, res) => {
  const { academic_year, grade, name, dob, mobile, email } = req.body;

  if (
    !academic_year ||
    !grade ||
    !name ||
    !dob ||
    !mobile ||
    !email
  ) {
    return sendResponse(res, 400, false, "All Fields are requried");
  }

  try {
    const newAdmission = await createRecord(Admission, {
      academic_year,
      grade,
      name,
      dob,
      mobile,
      email,
    });

    if (newAdmission.status) {
      sendResponse(
        res,
        201,
        true,
        "Message sent successfully",
        newAdmission.data
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong", newContact);
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

const getAdmission = async (req, res) => {
  try {
    const admission = await getRecord(Admission);

    if (admission.status) {
      sendResponse(res, 200, true, "Data Fetched successfully", admission.data);
    } else {
      sendResponse(res, 400, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

const deleteAdmission = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteAdmission = await deleteRecord(Admission, { _id: id });

    if (deleteAdmission.status) {
      sendResponse(
        res,
        200,
        true,
        "Admission Application deleted successfully",
        deleteAdmission
      );
    } else {
      sendResponse(res, 404, false, "Record not found");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

const countAdmission = async (req, res) => {
  try {
    const response = await getCount(Admission);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data)
    
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
}

module.exports = { createAdmission, getAdmission, deleteAdmission, countAdmission };
