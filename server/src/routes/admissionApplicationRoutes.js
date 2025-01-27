const express = require("express");
const {
  createAdmissionApplication,
  getAdmissionApplication,
  deleteAdmissionApplication,
  countAdmissionApplication,
  checkUserhaveSubmitted,
  saveProgress,
  submitAdmissionForm,
} = require("../controllers/admissionApplicationController");
const router = express.Router();

router.route("/").post(createAdmissionApplication).get(getAdmissionApplication);
router.route("/save-progress").post(saveProgress);
router.route("/submit-application").post(submitAdmissionForm);
router.route("/check-user/:id").get(checkUserhaveSubmitted);
router.route("/count").get(countAdmissionApplication);
router.route("/:id").delete(deleteAdmissionApplication);

module.exports = router;
