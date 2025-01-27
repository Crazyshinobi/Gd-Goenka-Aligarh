const {
  createRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const AdmissionApplication = require("../models/AdmissionApplication");
const { sendResponse } = require("../utils/responseUtils");
const fs = require("fs");
const path = require("path");

const createAdmissionApplication = async (req, res) => {
  const {
    user,
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
  if (!user) errors.push("User Id is required");
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
      user,
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
    const admissionApplications = await AdmissionApplication.find()
      .populate("user", "name email") // Populate user field with specific fields (name and email)
      .exec();
    if (admissionApplications) {
      sendResponse(
        res,
        200,
        true,
        "Data fetched successfully",
        admissionApplications
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
    const deleteAdmissionApplication = await deleteRecord(
      AdmissionApplication,
      { _id: id }
    );
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

const checkUserhaveSubmitted = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await AdmissionApplication.findOne({ user: id });
    if (application) {
      sendResponse(res, 200, false, "User already submitted Application");
    } else {
      sendResponse(res, 200, true, "User did not submitted Application");
    }
  } catch (error) {
    console.log(error);
    sendResponse(res, 500, false, "something went wrong");
  }
};

const saveProgress = async (req, res) => {
  try {
    const { user, ...newProgress } = req.body;

    // Check if an application already exists for the user
    let application = await AdmissionApplication.findOne({ user });

    if (!application) {
      // Create a new application if not found
      application = new AdmissionApplication({
        user,
        progress: newProgress, // Save the initial progress
        isSubmitted: false,
      });
    } else {
      // Merge existing progress with the new progress data
      application.progress = {
        ...application.progress, // Merge existing data
        ...newProgress, // Merge new data
        parents_information: [
          ...(application.progress.parents_information || []), // Retain existing data
          ...(newProgress.parents_information || []), // Add new data if present
        ],
        other_relatives: [
          ...(application.progress.other_relatives || []),
          ...(newProgress.other_relatives || []),
        ],
      };
    }

    // Save the application
    await application.save();

    sendResponse(res, 200, true, "Progress saved successfully", application);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Something went wrong while saving progress");
  }
};

const submitAdmissionForm = async (req, res) => {
  try {
    const { user } = req.body;

    // Find the application for the user
    let application = await AdmissionApplication.findOne({ user });

    if (!application) {
      return sendResponse(res, 404, false, "No application found for the user");
    }

    if (application.isSubmitted) {
      return sendResponse(res, 400, false, "Application is already submitted");
    }

    // Move data from `progress` to the main fields
    Object.assign(application, application.progress);
    application.progress = {}; // Clear the progress field
    application.isSubmitted = true;

    console.log(application);
    // Save the fully submitted application
    await application.save();

    sendResponse(res, 200, true, "Form submitted successfully", application);
  } catch (error) {
    console.error(error);
    sendResponse(
      res,
      500,
      false,
      "Something went wrong while submitting the form"
    );
  }
};

module.exports = {
  createAdmissionApplication,
  getAdmissionApplication,
  deleteAdmissionApplication,
  countAdmissionApplication,
  checkUserhaveSubmitted,
  saveProgress,
  submitAdmissionForm,
};
