import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-6 px-6 md:px-20 text-primary">

      {/* TOP GRID */}
      <div className="grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <img src={logo} alt="Renal Bloom Logo" className="h-16 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold">Renal Bloom</span>
              <span className="text-sm tracking-wide">Center</span>
            </div>
          </div>

          <p className="text-primary/70 leading-relaxed">
            Renal Bloom Center provides advanced kidney healthcare, diagnostics,
            dialysis services, and long-term renal care in a calm therapeutic environment.
          </p>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Actions</h3>
          <ul className="space-y-3 text-primary/70">
            <li>Book Appointment</li>
            <li>Doctors</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-primary/70">
            <li>Our Services</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-4 text-primary/70">

            <li className="flex items-start gap-2">
              <MdLocationOn size={22} className="text-accent" />
              ٢٩ شارع محمد يوسف موسي - مدينه نصر , Cairo, Egypt
            </li>

            <li className="flex items-start gap-2">
              <MdOutlineEmail size={22} className="text-accent" />
              info@renalbloom.com
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt size={20} className="text-accent" />
              +20 12 81502260
            </li>

          </ul>

          {/* Email Form */}
          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-4 py-2 rounded-l-md border border-primary/20"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-accent transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61582195195999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-primary hover:text-accent cursor-pointer" size={22} />
        </a>

        {/* Instagram */}
        <a href="#" target="_blank">
          <FaInstagram className="text-primary hover:text-accent cursor-pointer" size={22} />
        </a>

        {/* YouTube */}
        <a href="#" target="_blank">
          <FaYoutube className="text-primary hover:text-accent cursor-pointer" size={24} />
        </a>

        {/* LinkedIn */}
        <a href="#" target="_blank">
          <FaLinkedinIn className="text-primary hover:text-accent cursor-pointer" size={22} />
        </a>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-primary/60 text-sm">
        © {new Date().getFullYear()} Renal Bloom Center. All rights reserved.
      </div>

    </footer>
  );
}


