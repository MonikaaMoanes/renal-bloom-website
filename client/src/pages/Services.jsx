export default function Services() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <h1 className="text-4xl font-bold text-primary mb-10">
        Our Medical Services
      </h1>

      <div className="space-y-10">

        {/* Service 1 */}
        <div className="p-6 bg-secondary rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Kidney Disease Treatment
          </h2>
          <p className="text-primary/70">
            Comprehensive care for all kidney and urinary conditions using the latest medical guidelines.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-secondary rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Kidney Transplant Follow-Up
          </h2>
          <p className="text-primary/70">
            Long-term monitoring, medication adjustment, and full support for transplant patients.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-secondary rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Dialysis Unit (Hemodialysis)
          </h2>
          <p className="text-primary/70">
            Safe and comfortable dialysis sessions supervised by experienced nephrologists.
          </p>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-secondary rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Medical Laboratory
          </h2>
          <p className="text-primary/70">
            Comprehensive kidney-related blood and urine tests with fast and accurate results.
          </p>
        </div>

        {/* Service 5 */}
        <div className="p-6 bg-secondary rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Ultrasound Imaging (Sonar)
          </h2>
          <p className="text-primary/70">
            High-resolution imaging for kidney, urinary tract, and abdominal assessment.
          </p>
        </div>

        {/* Service 6 — Detailed specialty clinics */}
        <div className="p-6 bg-secondary rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Specialty Clinics
          </h2>
          <ul className="list-disc list-inside text-primary/70 space-y-2">
            <li>Diabetes & diabetic kidney disease</li>
            <li>Obesity-related kidney conditions</li>
            <li>Genetic kidney cyst disorders</li>
            <li>Autoimmune kidney diseases & lupus nephritis</li>
            <li>Follow-up for kidney transplant cases</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

