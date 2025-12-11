const Appointment = require("../models/Appointment");
exports.createAppointment = async (req, res) => {
  try {
    const { fullName, phone, email, service, date, time, notes } = req.body;

    const appointment = await Appointment.create({
      fullName,
      phone,
      email,
      service,
      date,
      time,
      notes,
      status: "pending"
    });

    res.status(201).json({
      message: "Appointment created successfully",
      appointment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

