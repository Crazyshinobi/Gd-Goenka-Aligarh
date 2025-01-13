const mongoose = require("mongoose");

const admissionApplicationSchema = new mongoose.Schema(
  {
    general_information: {
      grade: {
        type: String,
        required: true,
      },
      applied_before: {
        type: Boolean,
        required: true,
      },
      applied_year: {
        type: String,
        required: function () {
          return this.general_information.applied_before === true;
        },
      },
      applied_grade: {
        type: String,
        required: function () {
          return this.general_information.applied_before === true;
        },
      },
    },
    personal_details: {
      first_name: {
        type: String,
        required: true,
      },
      middle_name: {
        type: String,
      },
      last_name: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
        maxLength: 6,
        minLength: 6,
      },
      email: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
        required: true,
      },
      emergency_mobile: {
        type: Number,
        required: true,
      },
    },
    health_information: {
      allergy: {
        type: String,
      },
      physical_handicap: {
        type: String,
      },
      other: {
        type: String,
      },
    },
    educational_background: {
      attended_school: {
        type: Boolean,
        required: true,
      },
      previous_school: {
        type: String,
        required: function () {
          return this.educational_background.attended_school === true;
        },
      },
      city: {
        type: String,
        required: function () {
          return this.educational_background.attended_school === true;
        },
      },
      from_grade: {
        type: String,
        required: function () {
          return this.educational_background.attended_school === true;
        },
      },
      to_grade: {
        type: String,
        required: function () {
          return this.educational_background.attended_school === true;
        },
      },
      expelled: {
        type: Boolean,
        required: true,
      },
      expelled_reason: {
        type: String,
        required: function () {
          return this.educational_background.expelled === true;
        },
      },
    },
    parents_information: [
      {
        parent_type: {
          type: String,
          required: true,
          enum: ["father", "mother", "guardian"],
        },
        name: {
          type: String,
          required: true,
        },
        age: {
          type: Number,
          required: true,
        },
        nationality: {
          type: String,
          required: true,
        },
        education: {
          type: String,
          required: true,
        },
        relationship_with_child: {
          type: String,
          required: function () {
            return this.parent_type === "guardian";
          },
        },
        profession: {
          type: String,
          required: true,
        },
        income: {
          type: String,
          required: true,
        },
        office_address: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
    other_relatives: [
      {
        relation: {
          type: String,
          enum: ["brother", "sister"],
          required: true,
        },
        name: {
          type: String,
          required: true
        },
        age: {
          type: Number,
          required: true,
        },
        school: {
          type: String,
          required: true,
        },
        grade: {
          type: String,
          required: true,
        },
      },
    ],
    transport_facility: {
      type: Boolean,
      required: true,
    },
    declaration: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const AdmissionApplication = mongoose.model(
  "AdmissionApplication",
  admissionApplicationSchema
);

module.exports = AdmissionApplication;
