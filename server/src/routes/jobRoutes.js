const express = require("express");
const {
  createJob,
  getJobs,
  deleteJob,
  updateJob,
  getSingleJob,
} = require("../controllers/jobController");

const router = express.Router();

router.route("/").post(createJob).get(getJobs);

router.route("/:id").delete(deleteJob).patch(updateJob).get(getSingleJob);

module.exports = router;
