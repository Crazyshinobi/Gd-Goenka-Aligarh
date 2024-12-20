const {
  createRecord,
  getRecord,
  deleteRecord,
  updateRecord,
  getSingleRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const Job = require("../models/Job");
const { sendResponse } = require("../utils/responseUtils");

const createJob = async (req, res) => {
  const { name, subject } = req.body;
  if (!name) {
    return sendResponse(res, 400, false, "Name of the post is required");
  }
  try {
    const newJob = await createRecord(Job, {
      name,
      subject,
    });

    if (newJob.status) {
      sendResponse(res, 201, true, "Job created successfully", newJob.data);
    } else {
      sendResponse(res, 400, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await getRecord(Job);

    if (jobs.status) {
      sendResponse(res, 200, true, "Jobs fetched successfully", jobs.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error");
  }
};

const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const jobToDelete = await deleteRecord(Job, { _id: id });

    if (jobToDelete.status) {
      sendResponse(
        res,
        200,
        true,
        "Job deleted successfully",
        jobToDelete.data
      );
    } else {
      sendResponse(res, 404, false, "No Record Found");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const { name, subject } = req.body;
  try {
    const jobToUpdate = await Job.findById(id);

    if (!jobToUpdate) {
      return sendResponse(res, 404, false, "No record found");
    }

    let updatedObj = {
      name,
      subject,
    };

    const updatedJob = await updateRecord(Job, { _id: id }, updatedObj);

    if (updatedJob.status) {
      sendResponse(res, 200, true, "Updated successfully", updatedJob.data);
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

const getSingleJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await getSingleRecord(Job, { _id: id });

    if (job.status) {
      sendResponse(res, 200, true, "Job fetched successfully", job.data);
    } else {
      sendResponse(res, 404, false, "Record not found");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error");
  }
};

const countJob = async (req, res) => {
  try {
    const response = await getCount(Job);

    sendResponse(res, 200, true, "Count Successfully fetched", response.data);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal server error", error);
  }
};

module.exports = { createJob, getJobs, deleteJob, updateJob, getSingleJob, countJob};
