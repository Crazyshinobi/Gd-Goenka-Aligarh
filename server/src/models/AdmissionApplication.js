const mongoose = require("mongoose");
const admissionApplicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
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
      permanent_education_number: {
        type: Number,
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
        education: {
          type: String,
          required: true,
        },
        adhaar_number: {
          type: Number,
          required: true,
        },
        relationship_with_child: {
          type: String,
          validate: {
            validator: function () {
              return (
                this.parent_type !== "guardian" ||
                !!this.relationship_with_child
              );
            },
            message: "Relationship with child is required for guardians.",
          },
        },
        profession: {
          type: String,
          required: true,
        },
        income: {
          type: String,
          validate: {
            validator: function () {
              return this.parent_type === "mother" || !!this.income;
            },
            message: "Income is required for fathers and guardians.",
          },
        },
        office_address: {
          type: String,
          validate: {
            validator: function () {
              return this.parent_type === "mother" || !!this.office_address;
            },
            message: "Office address is required for fathers and guardians.",
          },
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
          required: true,
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
    feesPaid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const AdmissionApplication = mongoose.model(
  "AdmissionApplication",
  admissionApplicationSchema
);

module.exports = AdmissionApplication;
