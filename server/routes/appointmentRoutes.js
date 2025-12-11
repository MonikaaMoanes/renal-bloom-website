const express = require("express");
const router = express.Router();

const { createAppointment } = require("../controllers/appointmentController");

// PUBLIC route — patients can book appointments without login
router.post("/", createAppointment);

module.exports = router;
