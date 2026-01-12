import { useEffect, useState } from "react";
import { getAllAppointments, updateAppointmentStatus } from "../utils/api";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  // Load data when dashboard first loads
  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const data = await getAllAppointments();
    setAppointments(data);
  };

  // When admin clicks Confirm or Cancel
  const handleStatusChange = async (id, status) => {
    await updateAppointmentStatus(id, status);
    loadAppointments(); // Refresh the table
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Appointments Dashboard</h1>

      <table className="w-full border-collapse shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Service</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a) => (
            <tr key={a._id} className="text-center">
              <td className="border p-2">{a.fullName}</td>
              <td className="border p-2">{a.service}</td>
              <td className="border p-2">{a.date?.substring(0, 10)}</td>
              <td className="border p-2">{a.time}</td>
              <td className="border p-2">{a.phone}</td>

              {/* Status with color */}
              <td className="border p-2">
                <span
                  className={
                    a.status === "pending"
                      ? "text-yellow-600 font-semibold"
                      : a.status === "confirmed"
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {a.status}
                </span>
              </td>

              {/* Action buttons */}
              <td className="border p-2 flex justify-center gap-2">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  onClick={() => handleStatusChange(a._id, "confirmed")}
                >
                  Confirm
                </button>

                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => handleStatusChange(a._id, "cancelled")}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

