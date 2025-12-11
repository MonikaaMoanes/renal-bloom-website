import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>

      <div className="flex flex-col min-h-screen">
        <Topbar />
        <Navbar />

        <main className="flex-grow mt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}


