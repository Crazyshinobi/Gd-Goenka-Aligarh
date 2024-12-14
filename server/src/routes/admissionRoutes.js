const express = require("express");
const {
  createAdmission,
  getAdmission,
  deleteAdmission,
} = require("../controllers/admissionController");

const router = express.Router();

router.route("/").post(createAdmission).get(getAdmission);

router.route("/:id").delete(deleteAdmission);

module.exports = router;
