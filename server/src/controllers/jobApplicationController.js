const JobApplication = require("../models/JobApplication");
const { sendResponse } = require("../utils/responseUtils");
const {
  createRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: "gd-goenka-school",
});
const bucket = storage.bucket(process.env.BUCKET_NAME);

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
  const image = req.fileUrls?.imageUrl;
  const resume = req.fileUrls?.resumeUrl;

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
    return sendResponse(
      res,
      400,
      false,
      "expected_salary details are required!"
    );
  }
  if (!last_organization) {
    return sendResponse(res, 400, false, "last_organization is required!");
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

  try {
    const jobApplication = await JobApplication.findById(id);
    if (!jobApplication) {
      return sendResponse(res, 404, false, "Record not found");
    }

    // Delete image from Google Cloud Storage
    if (jobApplication.image) {
      const imageUrlParts = jobApplication.image.split("/");
      const imageFileName = `job-application/images/${
        imageUrlParts[imageUrlParts.length - 1]
      }`;
      try {
        await bucket.file(imageFileName).delete();
        console.log("Successfully deleted image:", imageFileName);
      } catch (error) {
        console.error("Failed to delete image from Cloud Storage:", error);
      }
    }

    // Delete resume from Google Cloud Storage
    if (jobApplication.resume) {
      const resumeUrlParts = jobApplication.resume.split("/");
      const resumeFileName = `job-application/resumes/${
        resumeUrlParts[resumeUrlParts.length - 1]
      }`;
      try {
        await bucket.file(resumeFileName).delete();
        console.log("Successfully deleted resume:", resumeFileName);
      } catch (error) {
        console.error("Failed to delete resume from Cloud Storage:", error);
      }
    }

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
  countJobApplication,
};
