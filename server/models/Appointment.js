const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    service: { type: String, required: true }, // text name: "Ultrasound"
    date: { type: String, required: true },    // "2025-02-01"
    time: { type: String, required: true },    // "10:00"
    notes: { type: String },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);

