import { motion } from 'framer-motion';

const TrustBanner = () => {
    const stats = [
        { label: "Happy Patients", value: "5000+" },
        { label: "Years Experience", value: "15+" },
        { label: "Expert Doctors", value: "5+" },
        { label: "Awards Won", value: "12" }
    ];

    return (
        <div className="bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-400/30">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="px-4"
                        >
                            <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-blue-100 text-sm md:text-base font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBanner;