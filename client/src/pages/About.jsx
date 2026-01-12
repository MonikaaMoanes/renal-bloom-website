import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t("about.title", "About Renal Bloom Center")}
        </h1>
        <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
          {t(
            "about.subtitle",
            "At Renal Bloom Center, we combine advanced kidney healthcare with a calm, healing environment designed for your comfort."
          )}
        </p>
        <Link
          to="/appointment"
          className="inline-block mt-6 bg-primary hover:bg-accent text-white px-8 py-3 rounded-md text-lg shadow-md"
        >
          {t("about.book", "Book an Appointment")}
        </Link>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 bg-white grid md:grid-cols-2 gap-10">
        <div className="p-6 rounded-lg shadow bg-[#FAF7EF]">
          <h2 className="text-2xl font-semibold mb-3">{t("about.missionTitle", "Our Mission")}</h2>
          <p className="text-gray-700">{t("about.missionText", "To provide compassionate kidney care to all our patients.")}</p>
        </div>
        <div className="p-6 rounded-lg shadow bg-[#FAF7EF]">
          <h2 className="text-2xl font-semibold mb-3">{t("about.visionTitle", "Our Vision")}</h2>
          <p className="text-gray-700">{t("about.visionText", "To be the leading renal care center in the region.")}</p>
        </div>
      </section>

      {/* Story / History */}
      <section className="py-16 px-6 md:px-20 bg-secondary text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.storyTitle", "Our Story")}</h2>
        <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
          {t(
            "about.storyText",
            "Renal Bloom Center was founded to offer personalized kidney care with state-of-the-art technology and a patient-first approach."
          )}
        </p>
      </section>
    </div>
  );
}

