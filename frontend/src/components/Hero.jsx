import { Link } from 'react-router-dom';
import { ChevronRight, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl leading-tight"
              >
                <span className="block xl:inline">Specialized Dental Care for</span>{' '}
                <span className="block text-primary">Women, Children & Families</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Experience world-class dentistry in a calming, comfortable environment. We focus on gentle care and perfection for your healthy smile.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4"
              >
                <div className="rounded-full shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Fix Appointment
                    <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0">
                  <a
                    href="tel:+919876543210"
                    className="w-full flex items-center justify-center px-8 py-4 border-2 border-secondary text-base font-medium rounded-full text-secondary bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    <PhoneCall className="mr-2 w-5 h-5" />
                    Emergency Support
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-blue-50/50 hidden lg:block">
        {/* Placeholder image representation */}
        <div className="h-full w-full object-cover bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center">
            <span className="text-blue-200 text-6xl opacity-50">Beautiful Smiles</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;