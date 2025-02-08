const {
  createRecord,
  deleteRecord,
  getCount,
} = require("../common/commonDatabaseQueries");
const Admin = require("../models/Admin");
const AdmissionApplication = require("../models/AdmissionApplication");
const { sendResponse } = require("../utils/responseUtils");
const { userEmailService } = require("../services/userEmailService");
const { generateRandomPassword } = require("./userController");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

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

const stepAdmissionApplication = async (req, res) => {
  const { step } = req.params;
  const formData = req.body;
  console.log(formData);
  try {
    if (parseInt(step) === 0) {
      const { full_name, email } = formData;
      const existingUser = await Admin.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists!",
        });
      }

      const password = await generateRandomPassword(12);
      const role = "user";
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new Admin({
        name: full_name,
        email,
        password: hashedPassword,
        role,
      });

      const user = await newUser.save();
      const name = full_name.split(" ")[0];
      const emailSent = await userEmailService({ name, email, password });
      if (emailSent) {
        console.log("User registration email sent successfully!");
      }
      let admission = new AdmissionApplication({
        user: user._id,
        general_information: {
          grade: formData.grade,
        },
        personal_details: {
          first_name: formData.full_name.split(" ")[0],
          last_name: formData.full_name.split(" ")[1],
          dob: formData.dob,
          email: formData.email,
          mobile: formData.mobile,
        },
        educational_background: {
          attended_school: false,
          previous_school: "",
          city: "",
          from_grade: "",
          to_grade: "",
          transfer_certificate: false,
          image: "",
          transfer_certificate_date: "",
          expelled: false,
          expelled_reason: "",
        },
      });

      await admission.save();

      return res.status(200).json({
        success: true,
        message: "User registered and step 0 data saved successfully!",
        admission,
      });
    }

    let admission = await AdmissionApplication.findOne({ user: formData.user });

    if (!admission) {
      return res.status(400).json({
        success: false,
        message: "Admission application not found.",
      });
    }

    switch (parseInt(step)) {
      case 1: // General Information
        admission.general_information = formData.general_information;
        break;
      case 2: // Personal Details
        admission.personal_details = formData.personal_details;
        break;
      case 3: // Health Information
        admission.health_information = formData.health_information;
        break;
      case 4: // Educational Background
        admission.educational_background = formData.educational_background;
        break;
      case 5: // Parents Information
        if (
          !req.body.parents_information ||
          !Array.isArray(req.body.parents_information)
        ) {
          return res.status(400).json({
            success: false,
            message: "Invalid parents information format",
          });
        }
        console.log(req.body.parents_information);
        admission.parents_information = req.body.parents_information;
        break;

      case 6: // Other Relatives
        admission.other_relatives = formData.other_relatives;
        break;
      case 7: // Transport Facility
        admission.transport_facility = formData.transport_facility;
        admission.transport_area = formData.transport_area;
        admission.declaration = formData.declaration;
        break;
      case 8: // Declaration
        admission.formCompleted = formData.formCompleted;
        break;
      case 9: // Fees Paid
        admission.feesPaid = formData.feesPaid;
        break;
      default:
        return res.status(400).json({
          success: false,
          message: "Invalid step number",
        });
    }

    admission.current_step = parseInt(step);
    admission.current_step_completed = formData.current_step_completed || false;

    // Save the updated admission application data
    await admission.save();

    return res.status(200).json({
      success: true,
      message: `Step ${step} data saved successfully!`,
      admission,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error saving form data",
      error: error.message,
    });
  }
};

const getStepAdmissionApplication = async (req, res) => {
  const { step } = req.params;
  const { user } = req.body;
  try {
    let admission = await AdmissionApplication.findOne({ user });

    if (!admission) {
      return res.status(400).json({
        success: false,
        message: "Admission application not found for this user.",
      });
    }

    // Check if data already exists for the current step and return it
    switch (parseInt(step)) {
      case 1: // Step 1: General Information
        if (admission.general_information) {
          return res.status(200).json({
            success: true,
            message: "Step 1 data already saved.",
            admission: admission,
          });
        }
        break;

      case 2: // Step 2: Personal Details
        if (admission.personal_details) {
          return res.status(200).json({
            success: true,
            message: "Step 2 data already saved.",
            admission: admission,
          });
        }
        break;

      case 3: // Step 3: Health Information
        if (admission.health_information) {
          return res.status(200).json({
            success: true,
            message: "Step 3 data already saved.",
            admission: admission,
          });
        }
        break;

      case 4: // Step 4: Educational Background
        if (admission.educational_background) {
          return res.status(200).json({
            success: true,
            message: "Step 4 data already saved.",
            admission: admission,
          });
        }
        break;

      case 5: // Step 5: Parents Information
        if (admission.parents_information) {
          return res.status(200).json({
            success: true,
            message: "Step 5 data already saved.",
            admission: admission,
          });
        }
        break;

      case 6: // Step 6: Other Relatives
        if (admission.other_relatives) {
          return res.status(200).json({
            success: true,
            message: "Step 6 data already saved.",
            admission: admission,
          });
        }
        break;

      case 7: // Step 7: Transport Facility
        if (admission.declaration) {
          return res.status(200).json({
            success: true,
            message: "Step 7 data already saved.",
            admission: admission,
          });
        }
        break;

      case 8: // Step 8: Declaration
        if (admission.formCompleted) {
          return res.status(200).json({
            success: true,
            message: "Step 8 data already saved.",
            admission: admission,
          });
        }
        break;

      case 9: // Step 9: Fees Paid
        if (admission.feesPaid) {
          return res.status(200).json({
            success: true,
            message: "Step 9 data already saved.",
            admission: admission,
          });
        }
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Invalid step number.",
        });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
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
    const admissionApplication = await AdmissionApplication.findById(id);

    if (!admissionApplication) {
      return sendResponse(res, 404, false, "Record not found");
    }

    let imagePaths = [];

    if (admissionApplication.personal_details?.image) {
      imagePaths.push(
        path.join(
          __dirname,
          "..",
          "uploads/admissionApplication",
          path.basename(admissionApplication.personal_details.image)
        )
      );
    }

    if (admissionApplication.parents_information?.[0]?.image) {
      imagePaths.push(
        path.join(
          __dirname,
          "..",
          "uploads/admissionApplication",
          path.basename(admissionApplication.parents_information[0].image)
        )
      );
    }

    if (admissionApplication.parents_information?.[1]?.image) {
      imagePaths.push(
        path.join(
          __dirname,
          "..",
          "uploads/admissionApplication",
          path.basename(admissionApplication.parents_information[1].image)
        )
      );
    }

    if (admissionApplication.educational_background?.image) {
      imagePaths.push(
        path.join(
          __dirname,
          "..",
          "uploads/admissionApplication",
          path.basename(admissionApplication.educational_background.image)
        )
      );
    }

    imagePaths.forEach((imgPath) => {
      if (fs.existsSync(imgPath)) {
        fs.unlink(imgPath, (err) => {
          if (err) console.error(`Error deleting image ${imgPath}:`, err);
        });
      }
    });

    await AdmissionApplication.findByIdAndDelete(id);

    sendResponse(res, 200, true, "Admission Application deleted successfully");
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

const checkUserhaveSubmittedAndPaid = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await AdmissionApplication.findOne({ user: id });
    if (application && application.feesPaid === true) {
      sendResponse(
        res,
        200,
        false,
        "User already submitted Application",
        application.status
      );
    } else {
      sendResponse(res, 200, true, "User did not submitted Application");
    }
  } catch (error) {
    console.log(error);
    sendResponse(res, 500, false, "something went wrong");
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

const updateAdmissionApplication = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const admissionApplicationToUpdate = await AdmissionApplication.findById(
      id
    );

    if (!admissionApplicationToUpdate) {
      return sendResponse(res, 404, false, "No record found");
    }

    admissionApplicationToUpdate.status = status;
    await admissionApplicationToUpdate.save();

    if (admissionApplicationToUpdate) {
      sendResponse(
        res,
        200,
        true,
        "Updated successfully",
        admissionApplicationToUpdate
      );
    } else {
      sendResponse(res, 500, false, "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, false, "Internal Server Error", error);
  }
};

module.exports = {
  createAdmissionApplication,
  stepAdmissionApplication,
  getStepAdmissionApplication,
  getAdmissionApplication,
  deleteAdmissionApplication,
  countAdmissionApplication,
  checkUserhaveSubmitted,
  checkUserhaveSubmittedAndPaid,
  updateAdmissionApplication,
};
