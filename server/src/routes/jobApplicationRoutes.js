const express = require("express");
const {
  createJobApplication,
  getJobApplications,
  deleteJobApplication,
  countJobApplication,
} = require("../controllers/jobApplicationController");
const { uploadOneImageAndOnePDF } = require("../middleware/uploadMiddleware");

const router = express.Router();

router
  .route("/")
  .post(uploadOneImageAndOnePDF, createJobApplication)
  .get(getJobApplications);

  router
  .route("/count").get(countJobApplication)

  router.route("/:id").delete(deleteJobApplication)
module.exports = router;
