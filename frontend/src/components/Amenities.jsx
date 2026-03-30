import { motion } from 'framer-motion';

const Amenities = () => {
    const facilities = [
        { image: "/Icon-city-center.png", text: "Convenient central location" },
        { image: "/Icon-parking.png", text: "Hassle-free parking" },
        { image: "/Icon-doctors.png", text: "Doctors available daily (9 AM - 9 PM)" },
        { image: "/Icon-pickup.png", text: "Pickup & drop-off support" },
        { image: "/Icon-wheel-chair.png", text: "Wheelchair access" }
    ];

    return (
        <section className="py-24 bg-[#f5f4f8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-[#1a1b3a] sm:text-5xl font-serif mb-4">
                        Clinic <span className="bg-gradient-to-r from-[#4d4add] via-[#9255c2] to-[#d66f9f] bg-clip-text text-transparent">Facilities</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">Designed for your comfort and convenience.</p>
                </div>

                {/* Facilities Pills */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {facilities.map((fac, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="flex items-center gap-4 bg-white px-8 py-5 rounded-full shadow-sm hover:shadow-md transition-shadow border border-slate-50"
                        >
                            <div className="w-10 h-10 flex-shrink-0 bg-[#f5f4f8] rounded-full flex items-center justify-center">
                                <img src={fac.image} alt="icon" className="w-5 h-5 object-contain" />
                            </div>
                            <span className="text-sm font-semibold text-[#1a1b3a]">{fac.text}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Amenities;