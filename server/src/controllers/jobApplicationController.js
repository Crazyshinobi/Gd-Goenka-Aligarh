const JobApplication = require("../models/JobApplication");
const { sendResponse } = require("../utils/responseUtils");
const { createRecord, deleteRecord, getCount } = require("../common/commonDatabaseQueries");
const fs = require("fs");
const path = require("path");

const createJobApplication = async (req, res) => {
  const {
    job,
    name,
    email,
    phone,
    qualification,
    expected_salary,
    last_organization,
    last_salary,
    experience,
    address,
  } = req.body;

  // Handle file uploads
  const image = req.files?.image[0]?.path;
  const resume = req.files?.resume[0]?.path;

  // Check for missing fields and return specific error messages
  if (!job) {
    return sendResponse(res, 400, false, "Job field is required!");
  }
  if (!name) {
    return sendResponse(res, 400, false, "name field is required!");
  }
  if (!email) {
    return sendResponse(res, 400, false, "email field is required!");
  }
  if (!phone) {
    return sendResponse(res, 400, false, "phone details are required!");
  }
  if (!qualification) {
    return sendResponse(res, 400, false, "qualification is required!");
  }
  if (!expected_salary) {
    return sendResponse(res, 400, false, "expected_salary details are required!");
  }
  if (!last_organization) {
    return sendResponse(
      res,
      400,
      false,
      "last_organization is required!"
    );
  }
  if (!last_salary) {
    return sendResponse(res, 400, false, "last_salary experience is required!");
  }
  if (!experience) {
    return sendResponse(res, 400, false, "experience field is required!");
  }
  if (!address) {
    return sendResponse(res, 400, false, "address are required!");
  }
  if (!image) {
    return sendResponse(res, 400, false, "Image file is required!");
  }
  if (!resume) {
    return sendResponse(res, 400, false, "Resume file is required!");
  }

  try {
    const recordObj = {
      job,
      name,
      email,
      phone,
      qualification,
      expected_salary,
      last_organization,
      last_salary,
      experience,
      address,
      image,
      resume,
    };

    const newJobApplication = await createRecord(JobApplication, recordObj);

    if (newJobApplication.status) {
      sendResponse(
        res,
        201,
        true,
        "Job application submitted successfully!",
        newJobApplication.data
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const getJobApplications = async (req, res) => {
  try {
    const jobApplications = await JobApplication.find().populate({
      path: "job", // The field to populate
      select: "name subject", // Fields to select from the Job model
    });

    if (jobApplications) {
      sendResponse(
        res,
        200,
        true,
        "Job application fetched successfully",
        jobApplications
      );
    } else {
      sendResponse(res, 400, false, "Internal server error");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const deleteJobApplication = async (req, res) => {
  const { id } = req.params;
  const jobApplication = await JobApplication.findById(id);
  if (!jobApplication) {
    return sendResponse(res, 404, false, "Record not found");
  }
  try {
    let paths = [
      path.join(
        __dirname,
        "..",
        "uploads/job application",
        path.basename(jobApplication.image)
      ),
      path.join(
        __dirname,
        "..",
        "uploads/job application",
        path.basename(jobApplication.resume)
      ),
    ];

    paths.forEach((path) => {
      fs.access(path, fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(path, (unlinkErr) => {
            if (unlinkErr) {
              console.error("Failed to delete associated file:", unlinkErr);
            } else {
              console.log("Associated files deleted:", path);
            }
          });
        } else {
          console.log(err);
        }
      });
    });

    const deletedJobApplication = await deleteRecord(JobApplication, {
      _id: id,
    });

    if (deletedJobApplication.status) {
      sendResponse(
        res,
        200,
        true,
        "Job application and associated files deleted successfully",
        deletedJobApplication.data
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const countJobApplication = async (req, res) => {
  try {
    const response = await getCount(JobApplication);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

module.exports = {
  createJobApplication,
  getJobApplications,
  deleteJobApplication,
  countJobApplication
};
