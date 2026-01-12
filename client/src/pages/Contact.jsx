import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t("contact.title", "Contact Us")}
        </h1>
        <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
          {t(
            "contact.subtitle",
            "We’d love to hear from you. Reach out to us for any questions or appointments."
          )}
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <p><strong>{t("contact.addressTitle", "Address")}:</strong> 123 Main St, City</p>
          <p><strong>{t("contact.phoneTitle", "Phone")}:</strong> +1 123 456 7890</p>
          <p><strong>{t("contact.emailTitle", "Email")}:</strong> info@clinic.com</p>
          {/* Optional Map */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808abc!2sClinic!5e0!3m2!1sen!2sca!4v161234567890"
              width="100%"
              height="250"
              className="rounded"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <form className="space-y-4">
            <input
              type="text"
              placeholder={t("contact.form.name", "Your Name")}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder={t("contact.form.email", "Your Email")}
              className="w-full border rounded px-3 py-2"
            />
            <textarea
              placeholder={t("contact.form.message", "Your Message")}
              className="w-full border rounded px-3 py-2 h-32"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-accent transition"
            >
              {t("contact.form.send", "Send Message")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

