import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary shadow-md fixed w-full top-10 left-0 z-40">
      <div className="w-full px-10 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Renal Bloom Logo" className="h-20 w-auto" />

          {/* Text Next to Logo */}
          <div className="flex flex-col leading-tight">
            <span className="text-primary text-2xl font-bold">
              Renal Bloom
            </span>
            <span className="text-primary text-sm tracking-wide">
              Center
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-primary text-lg font-medium">
          <Link to="/" className="hover:text-accent">{t("navbar.home")}</Link>
          <Link to="/services" className="hover:text-accent">{t("navbar.services")}</Link>
          <Link to="/doctors" className="hover:text-accent">{t("navbar.doctors")}</Link>
          <Link to="/contact" className="hover:text-accent">{t("navbar.contact")}</Link>
          <Link to="/about" className="hover:text-accent">{t("navbar.about")}</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-primary text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary shadow-md">
          <div className="flex flex-col space-y-4 py-6 px-6 text-primary text-lg font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>{t("navbar.home")}</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>{t("navbar.services")}</Link>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>{t("navbar.doctors")}</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>{t("navbar.contact")}</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>{t("navbar.about")}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}



