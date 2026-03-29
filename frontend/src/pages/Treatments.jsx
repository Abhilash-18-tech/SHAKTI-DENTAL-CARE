import TreatmentCard from '../components/TreatmentCard';
import { Smile, Stethoscope, Baby, Scissors, Activity, Heart, Shield, PlusCircle } from 'lucide-react';

const Treatments = () => {
    const allTreatments = [
        { icon: Smile, title: "Cosmetic Dentistry", description: "Veneers, teeth whitening, and complete smile makeovers for confidence." },
        { icon: Baby, title: "Pediatric Dentistry", description: "Gentle, fear-free treatments tailored specifically for your little ones." },
        { icon: Stethoscope, title: "Root Canal", description: "Pain-free endodontic therapy to save severely infected teeth." },
        { icon: Heart, title: "Orthodontics", description: "Clear aligners and traditional braces for perfectly straight teeth." },
        { icon: Activity, title: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth." },
        { icon: Scissors, title: "Oral Surgery", description: "Safe and comfortable extractions including wisdom teeth removal." },
        { icon: Shield, title: "Preventive Care", description: "Routine exams, cleanings, and sealants to prevent future issues." },
        { icon: PlusCircle, title: "Emergency Care", description: "Immediate attention for severe pain, trauma, or broken teeth." }
    ];

    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services & Treatments</h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto">State-of-the-art dental procedures customized for your unique needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allTreatments.map((t, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                                <t.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.title}</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {t.description}
                            </p>
                            <button className="text-primary font-medium hover:underline text-sm uppercase tracking-wide">Learn Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Treatments;