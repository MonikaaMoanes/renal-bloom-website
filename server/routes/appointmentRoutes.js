const express = require("express");
const router = express.Router();
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment
} = require("../controllers/appointmentController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/", createAppointment);                          // Public
router.get("/", protect, adminOnly, getAllAppointments);      // Admin only
router.get("/:id", protect, adminOnly, getAppointmentById);   // Admin only
router.put("/:id/status", protect, adminOnly, updateAppointmentStatus); // Admin only
router.delete("/:id", protect, adminOnly, deleteAppointment); // Admin only

module.exports = router;