const Doctor = require("../models/Doctor");

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find({ isActive: true });
  res.json(doctors);
};

exports.getDoctorById = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).json({ message: "Doctor not found" });
  res.json(doctor);
};

exports.createDoctor = async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.status(201).json(doctor);
};

exports.updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  if (!doctor) return res.status(404).json({ message: "Doctor not found" });
  res.json(doctor);
};

exports.deleteDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndDelete(req.params.id);
  if (!doctor) return res.status(404).json({ message: "Doctor not found" });
  res.json({ message: "Doctor removed" });
};
