import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Topbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="w-full bg-[#FAF7EF] text-primary text-sm py-2 px-8 flex justify-end gap-10 items-center border-b border-primary/10 fixed top-0 left-0 z-50">

      {/* Book Appointment */}
      <Link
        to="/appointment"
        className="flex items-center gap-2 hover:text-accent transition font-medium"
      >
        <MdOutlineCalendarMonth size={18} />
        <span>{t("topbar.book")}</span>
      </Link>

      {/* Phone Number */}
      <div className="flex items-center gap-2 font-medium hover:text-accent transition">
        <FaPhoneAlt size={16} />
        <span>{t("topbar.phone")}</span>
      </div>

      {/* Language Switch */}
      <button
        onClick={toggleLanguage}
        className="bg-primary text-white px-3 py-1 rounded hover:bg-accent transition"
      >
        {i18n.language === "en" ? "العربية" : "EN"}
      </button>
    </div>
  );
}

