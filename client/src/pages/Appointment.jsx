import { useState } from "react";
import { createAppointment } from "../utils/api";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  // Stores all user inputs
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  // Update form values on change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createAppointment(form);
if (response.appointment && response.appointment._id) {
  setSubmitted(true);
} else {
  console.log("Backend Response:", response); // helps debug
  alert("Something went wrong. Try again.");
}

  };

  return (
    <div className="px-6 md:px-20 py-16 bg-secondary min-h-screen">

      <h1 className="text-4xl font-bold text-primary mb-4">Book an Appointment</h1>
      <p className="text-primary/70 mb-10 max-w-2xl">
        Please fill out the form below and our team will contact you shortly 
        to confirm your appointment.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-primary font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-primary font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-primary font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="example@email.com"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col">
            <label className="text-primary font-medium mb-1">Select Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Choose a service</option>
              <option value="Kidney Disease Treatment">Kidney Disease Treatment</option>
              <option value="Kidney Transplant Follow-Up">Kidney Transplant Follow-Up</option>
              <option value="Dialysis Session">Dialysis Session</option>
              <option value="Ultrasound Imaging">Ultrasound Imaging</option>
              <option value="Medical Laboratory">Medical Laboratory</option>
              <option value="Specialty Clinics">Specialty Clinics</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div className="flex flex-col">
            <label className="text-primary font-medium mb-1">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Preferred Time */}
          <div className="flex flex-col">
            <label className="text-primary font-medium mb-1">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-primary font-medium mb-1">Notes (Optional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="4"
              className="border border-primary/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Describe your symptoms or any details..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-md hover:bg-accent transition md:col-span-2 text-lg font-semibold"
          >
            Submit Appointment Request
          </button>

        </form>
      ) : (
        <div className="bg-white p-10 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-accent mb-4">Thank you!</h2>
          <p className="text-primary/70 text-lg">
            Your appointment request has been received.  
            Our team will contact you soon to confirm the date and time.
          </p>
        </div>
      )}
    </div>
  );
}

