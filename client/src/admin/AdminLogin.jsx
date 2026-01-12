import { useState } from "react";
import { loginUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const data = await loginUser(email, password);

    if (data.token) {
  if (data.role !== "admin") {
    setError("You are not allowed to access the admin dashboard.");
    return;
  }

  // Save full user info
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify({ role: data.role, email: data.email }));

  navigate("/admin/dashboard");  // Redirect admin to dashboard
} else {
  setError(data.message || "Invalid credentials");
}

  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Admin Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-primary text-white py-2">Login</button>
      </form>

      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

