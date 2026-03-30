import { motion } from 'framer-motion';

const TrustBanner = () => {
    return (
        <div className="relative py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Banner_img_1.jpg')" }}>
            <div className="absolute inset-0 bg-[#1a1b3a]/70"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-serif leading-tight">
                        You are always in <span className="text-[#d66f9f]">safe hands</span>.
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 font-medium">
                        We are ready to help, anytime.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default TrustBanner;