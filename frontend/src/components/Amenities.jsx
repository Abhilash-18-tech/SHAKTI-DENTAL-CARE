import { Car, Clock, ShieldCheck, Accessibility } from 'lucide-react';
import { motion } from 'framer-motion';

const Amenities = () => {
    const facilities = [
        { icon: Car, title: "Ample Parking", desc: "Reserved parking spaces for our patients" },
        { icon: Accessibility, title: "Wheelchair Access", desc: "Fully accessible clinic premises" },
        { icon: Clock, title: "Flexible Timings", desc: "Evening & weekend appointments available" },
        { icon: ShieldCheck, title: "Strict Sterilization", desc: "100% adherence to global hygiene protocols" }
    ];

    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((fac, i) => {
                        const Icon = fac.icon;
                        return (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-6"
                            >
                                <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{fac.title}</h3>
                                <p className="text-sm text-slate-500">{fac.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Amenities;