import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import TreatmentCard from '../components/TreatmentCard';
import Testimonials from '../components/Testimonials';
import Amenities from '../components/Amenities';
import { Smile, Stethoscope, Baby, Scissors, Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const treatments = [
    { icon: Smile, title: "Cosmetic Dentistry", description: "Veneers, teeth whitening, and complete smile makeovers for confidence." },
    { icon: Baby, title: "Pediatric Dentistry", description: "Gentle, fear-free treatments tailored specifically for your little ones." },
    { icon: Stethoscope, title: "Root Canal", description: "Pain-free endodontic therapy to save severely infected teeth." },
    { icon: Heart, title: "Orthodontics", description: "Clear aligners and traditional braces for perfectly straight teeth." },
    { icon: Activity, title: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth." },
    { icon: Scissors, title: "Oral Surgery", description: "Safe and comfortable extractions including wisdom teeth removal." }
  ];

  return (
    <>
      <Hero />
      <TrustBanner />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">A Modern Approach to Dentistry</h2>
                <p className="text-lg text-slate-500">We blend advanced technology with compassionate care to provide the best possible experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Simplified features */}
                {['Advanced Tech', 'Comfort First', 'Expert Team', 'Affordable Care'].map((f, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">{i+1}</div>
                        <h4 className="font-bold text-slate-900 mb-2">{f}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Comprehensive Care</h2>
              <p className="text-lg text-slate-500">
                From routine checkups to complex procedures, we offer a full spectrum of dental services under one roof.
              </p>
            </div>
            <Link to="/treatments" className="text-primary font-medium hover:text-blue-700 flex items-center gap-2 pb-2">
                View all treatments &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
              <TreatmentCard key={i} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Amenities />
    </>
  );
};

export default Home;