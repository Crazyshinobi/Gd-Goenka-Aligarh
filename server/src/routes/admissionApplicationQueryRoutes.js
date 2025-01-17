const express = require("express");
const {
  createAdmissionApplicationQuery,
  getAdmissionApplicationQuery,
  deleteAdmissionApplicationQuery,
  countAdmissionApplicationQuery,
} = require("../controllers/admissionApplicationQueryController");

const router = express.Router();

router
  .route("/")
  .post(createAdmissionApplicationQuery)
  .get(getAdmissionApplicationQuery);
router.route("/count").get(countAdmissionApplicationQuery);
router.route("/:id").delete(deleteAdmissionApplicationQuery);
module.exports = router;
