import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import dr1 from "../assets/dr1.jpg";
import dr2 from "../assets/dr2.jpg";
import dr3 from "../assets/dr3.jpg";

const doctorsList = [
  { name: "Dr. Sarah Smith", specialty: "Cardiologist", image: dr1 },
  { name: "Dr. John Doe", specialty: "Pediatrician", image: dr2 },
  { name: "Dr. Emily Wong", specialty: "Nephrologist", image: dr3 },
];


export default function Doctors() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t("doctors.title", "Meet Our Doctors")}
        </h1>
        <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
          {t(
            "doctors.subtitle",
            "Our highly qualified doctors are dedicated to providing the best care possible."
          )}
        </p>
      </section>

      {/* Doctors Cards */}
      <section className="py-16 px-6 md:px-20 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {doctorsList.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img src={doc.image} alt={doc.name} className="w-full h-64 object-cover" />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-xl font-semibold">{doc.name}</h2>
                <p className="text-gray-500">{doc.specialty}</p>
              </div>
              <Link
                to="/appointment"
                className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-accent transition text-center"
              >
                {t("doctors.book", "Book Appointment")}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

