export const registerUser = async (userData) => {
  return await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  }).then(res => res.json());
};

export const loginUser = async (email, password) => {
  return await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(res => res.json());
};

export const createAppointment = async (appointmentData) => {
  const res = await fetch("http://localhost:5000/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointmentData),
  });

  return res.json();
};

export const getAllAppointments = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/appointments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
};

export const updateAppointmentStatus = async (id, status) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:5000/api/appointments/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ status })
  });

  return res.json();
};


