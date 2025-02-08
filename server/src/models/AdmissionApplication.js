const mongoose = require("mongoose");

const admissionApplicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    general_information: {
      grade: { type: String },
      applied_before: { type: Boolean },
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
      first_name: { type: String },
      middle_name: { type: String },
      last_name: { type: String },
      permanent_education_number: { type: Number },
      dob: { type: Date },
      nationality: { type: String },
      gender: { type: String, enum: ["male", "female"] },
      address: { type: String },
      city: { type: String },
      pincode: { type: String, maxLength: 6, minLength: 6 },
      email: { type: String },
      mobile: { type: Number },
      emergency_mobile: { type: Number },
      image: { type: String },
    },
    health_information: {
      allergy: { type: String },
      physical_handicap: { type: String },
      other: { type: String },
    },
    educational_background: {
      attended_school: { type: Boolean },
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
      transfer_certificate: { type: Boolean },
      image: {
        type: String,
      },
      transfer_certificate_date: {
        type: String,
      },
      expelled: { type: Boolean },
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
          enum: ["father", "mother", "guardian"],
        },
        name: { type: String },
        age: { type: Number },
        education: { type: String },
        adhaar_number: { type: Number },
        image: { type: String },
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
        profession: { type: String },
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
        relation: { type: String, enum: ["brother", "sister"], required: true },
        name: { type: String, required: true },
        age: { type: Number, required: true },
        school: { type: String, required: true },
        grade: { type: String, required: true },
      },
    ],
    transport_facility: { type: Boolean },
    transport_area: { type: String },
    declaration: { type: Boolean },
    formCompleted: { type: Boolean },
    feesPaid: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "under review", "approved"],
      default: "pending",
    },
    current_step: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const AdmissionApplication = mongoose.model(
  "AdmissionApplication",
  admissionApplicationSchema
);

module.exports = AdmissionApplication;
