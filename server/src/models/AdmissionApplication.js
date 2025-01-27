const mongoose = require("mongoose");

const admissionApplicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true, // User is always required
    },
    general_information: {
      grade: {
        type: String,
        required: function () {
          return this.isSubmitted; // Required only if the form is submitted
        },
      },
      applied_before: {
        type: Boolean,
        required: function () {
          return this.isSubmitted; // Required only if the form is submitted
        },
      },
      applied_year: {
        type: String,
        required: function () {
          return this.isSubmitted && this.general_information.applied_before;
        },
      },
      applied_grade: {
        type: String,
        required: function () {
          return this.isSubmitted && this.general_information.applied_before;
        },
      },
    },
    personal_details: {
      first_name: {
        type: String,
        required: function () {
          return this.isSubmitted; // Required only if the form is submitted
        },
      },
      last_name: {
        type: String,
        required: function () {
          return this.isSubmitted;
        },
      },
      dob: {
        type: Date,
        required: function () {
          return this.isSubmitted;
        },
      },
      nationality: {
        type: String,
        required: function () {
          return this.isSubmitted;
        },
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: function () {
          return this.isSubmitted;
        },
      },
      address: {
        type: String,
        required: function () {
          return this.isSubmitted;
        },
      },
      city: {
        type: String,
        required: function () {
          return this.isSubmitted;
        },
      },
      pincode: {
        type: String,
        required: function () {
          return this.isSubmitted;
        },
      },
      email: {
        type: String,
        required: function () {
          return this.isSubmitted;
        },
      },
      mobile: {
        type: Number,
        required: function () {
          return this.isSubmitted;
        },
      },
      emergency_mobile: {
        type: Number,
        required: function () {
          return this.isSubmitted;
        },
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
        required: function () {
          return this.isSubmitted;
        },
      },
      previous_school: {
        type: String,
        required: function () {
          return this.isSubmitted && this.educational_background.attended_school;
        },
      },
      city: {
        type: String,
        required: function () {
          return this.isSubmitted && this.educational_background.attended_school;
        },
      },
      from_grade: {
        type: String,
        required: function () {
          return this.isSubmitted && this.educational_background.attended_school;
        },
      },
      to_grade: {
        type: String,
        required: function () {
          return this.isSubmitted && this.educational_background.attended_school;
        },
      },
      expelled: {
        type: Boolean,
        required: function () {
          return this.isSubmitted;
        },
      },
      expelled_reason: {
        type: String,
        required: function () {
          return this.isSubmitted && this.educational_background.expelled;
        },
      },
    },
    parents_information: [
      {
        parent_type: {
          type: String,
          required: function () {
            return this.isSubmitted; // Required only for submitted applications
          },
          enum: ["father", "mother", "guardian"],
        },
        name: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
        },
        age: {
          type: Number,
          required: function () {
            return this.isSubmitted;
          },
        },
        nationality: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
        },
        education: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
        },
        relationship_with_child: {
          type: String,
          validate: {
            validator: function () {
              return (
                this.parent_type !== "guardian" || !!this.relationship_with_child
              );
            },
            message: "Relationship with child is required for guardians.",
          },
        },
        profession: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
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
        email: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
        },
      },
    ],
    other_relatives: [
      {
        relation: {
          type: String,
          enum: ["brother", "sister"],
          required: function () {
            return this.isSubmitted; // Required only if the form is submitted
          },
        },
        name: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
        },
        age: {
          type: Number,
          required: function () {
            return this.isSubmitted;
          },
        },
        school: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
        },
        grade: {
          type: String,
          required: function () {
            return this.isSubmitted;
          },
        },
      },
    ],
    transport_facility: {
      type: Boolean,
      required: function () {
        return this.isSubmitted; // Required only if the form is submitted
      },
    },
    declaration: {
      type: Boolean,
      required: function () {
        return this.isSubmitted; // Required only if the form is submitted
      },
    },
    isSubmitted: {
      type: Boolean,
      default: false, // Tracks whether the form is fully submitted
    },
    progress: {
      type: Object, // Stores partial form data for Save and Exit
      default: {},
    },
  },
  { timestamps: true }
);

const AdmissionApplication = mongoose.model(
  "AdmissionApplication",
  admissionApplicationSchema
);

module.exports = AdmissionApplication;
