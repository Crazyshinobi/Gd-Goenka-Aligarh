const express = require("express");
const {
  createAdmissionApplication,
  getAdmissionApplication,
  deleteAdmissionApplication,
  countAdmissionApplication,
  checkUserhaveSubmitted,
  checkUserhaveSubmittedAndPaid,
  stepAdmissionApplication,
  getStepAdmissionApplication,
  updateAdmissionApplication,
} = require("../controllers/admissionApplicationController");
const router = express.Router();

router.route("/admission-form/:step").post(stepAdmissionApplication);
router.route("/get-admission-form/:step").post(getStepAdmissionApplication);
router.route("/").post(createAdmissionApplication).get(getAdmissionApplication);
router.route("/check-user-paid/:id").get(checkUserhaveSubmittedAndPaid);
router.route("/check-user/:id").get(checkUserhaveSubmitted);
router.route("/count").get(countAdmissionApplication);
router
  .route("/:id")
  .delete(deleteAdmissionApplication)
  .patch(updateAdmissionApplication);

module.exports = router;
