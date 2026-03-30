import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const banners = ['/Banner_img_1.jpg', '/Banner_img_2.jpg', '/Banner_img_3.jpg'];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4500); // 4.5 seconds
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative bg-[#f5f4f8] overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl tracking-tight font-extrabold text-[#1a1b3a] sm:text-6xl md:text-7xl leading-[1.1] font-serif"
          >
            <span className="block mb-2">Specialized</span>
            <span className="block mb-2">Dental Care for</span>
            <span className="block bg-gradient-to-r from-[#4d4add] via-[#9255c2] to-[#d66f9f] bg-clip-text text-transparent">
              Women, Children<br />
              <span className="inline-block mt-2 font-serif italic">& Families</span>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base text-slate-500 sm:text-lg sm:max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-[#4d4add] hover:bg-[#3d3ab0] transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Fix an Appointment
            </Link>
          </motion.div>
        </div>

        {/* Right Image/Carousel Box */}
        <div className="lg:w-1/2 relative w-full h-[400px] lg:h-[500px]">
          <div className="w-full h-full rounded-[30px] overflow-hidden shadow-2xl relative">
            {banners.map((banner, index) => (
              <motion.img
                key={banner}
                src={banner}
                alt={`Banner ${index + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.05,
                  transition: { duration: 1 } 
                }}
                className="h-full w-full object-cover absolute inset-0"
                style={{ zIndex: currentSlide === index ? 10 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f5f4f8]/20 z-20 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;