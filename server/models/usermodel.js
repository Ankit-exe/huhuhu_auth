const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      reduired: true,
      enum: ["donar", "organisation", "hospital", "admin"],
    },
    name: {
      type: String,
      required: function () {
        if (this.userType == "admin" || this.userType == "donar") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.userType == "hospital") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.userType == "organisation") {
          return true;
        }
        return false;
      },
    },
    website: {
      type: String,
      required: function () {
        if (this.userType == "organisation" || this.userType == "hospital") {
          return true;
        }
        return false;
      },
    },
    address: {
      type: String,
      required: function () {
        if (this.userType == "organisation" || this.userType == "hospital") {
          return true;
        }
        return false;
      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users" , userSchema);