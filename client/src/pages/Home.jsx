import HeroSlider from "../components/HeroSlider";
import Map from "../components/Map";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* About Section */}
      <section className="bg-secondary py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Welcome to Renal Bloom Center
        </h2>

        <p className="text-lg md:text-xl text-primary/80 max-w-3xl leading-relaxed">
           At Renal Bloom Center, we combine advanced kidney healthcare with a calm, 
    healing environment designed for your comfort. Our specialists offer 
    compassionate diagnostics, treatment, and long-term care for all renal needs
        </p>

       <Link
  to="/appointment"
  className="inline-block mt-6 bg-primary hover:bg-accent text-white px-8 py-3 rounded-md text-lg shadow-md"
>
  Book an Appointment
</Link>
 
      </section>
       <Map />
    </div>
    
);



}
