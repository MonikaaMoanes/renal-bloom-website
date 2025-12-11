import { useState } from "react";
import { loginUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const data = await loginUser(email, password);

    if (data.token) {
      // Save login info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      if (data.role !== "admin") {
        setError("Only admins can access this dashboard.");
        return;
      }

      navigate("/admin/dashboard");
    } else {
      setError(data.message || "Invalid email or password.");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AdminLogin;
