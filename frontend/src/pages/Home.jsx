import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import TreatmentCard from '../components/TreatmentCard';
import Testimonials from '../components/Testimonials';
import Amenities from '../components/Amenities';
import { Smile, Stethoscope, Baby, Scissors, Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const treatments = [
    { title: "Tooth Extraction", description: "Safe and painless removal of impacted or decayed teeth.", image: "/Teeth Extraction.png" },
    { title: "Artificial Complete Denture", description: "Full mouth replacement to restore confidence and function.", image: "/Artificial Complete Denture.png" },
    { title: "Tooth Filling", description: "Composite fillings for cavity treatment and tooth restoration.", image: "/Tooth-Filling.jpg" },
    { title: "Teeth Cleaning or Scaling", description: "Preventive care to remove plaque and protect gums.", image: "/Teeth Cleaning.png" },
    { title: "Bleaching", description: "Cosmetic whitening treatments for a brighter smile.", image: "/Bleaching.png" },
    { title: "Orthodontic Treatment", description: "Braces and aligners to straighten and align teeth.", image: "/Orthodonic-Treatment.png" }
  ];

  return (
    <>
      <Hero />
      <TrustBanner />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4 font-serif">Why Choose Sakthi Dental Clinic?</h2>
                <p className="text-lg text-slate-500">We blend advanced technology with compassionate care to provide the best possible experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: 'All-in-One Care', desc: 'From general dentistry to specialized treatments, everything under one roof.' },
                    { title: 'Experienced Doctors', desc: 'Our dentists are professionally trained and committed to personalized patient care.' },
                    { title: 'Patient-Centric Approach', desc: 'We prioritize comfort, safety, and transparency in every treatment we offer.' },
                    { title: 'Technology-Driven Services', desc: 'Modern tools and equipment ensure precision and safety.' }
                ].map((f, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 text-[#4d4add] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">{i+1}</div>
                        <h4 className="font-bold text-[#1a1b3a] mb-3 text-lg">{f.title}</h4>
                        <p className="text-slate-500 text-sm">{f.desc}</p>
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
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4 font-serif">Explore Our Services</h2>
              <p className="text-lg text-slate-500">
                From routine checkups to complex procedures, we offer a full spectrum of dental services under one roof.
              </p>
            </div>
            <Link to="/treatments" className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#4d4add] text-sm font-semibold rounded-lg text-[#4d4add] hover:bg-[#4d4add] hover:text-white transition-colors">
                View Full List of Treatments &rarr;
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