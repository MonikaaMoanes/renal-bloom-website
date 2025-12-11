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
  // Send the form data to the backend as JSON
  const res = await fetch("http://localhost:5000/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointmentData), 
  });

  return res.json(); // Return the response from the backend
};

