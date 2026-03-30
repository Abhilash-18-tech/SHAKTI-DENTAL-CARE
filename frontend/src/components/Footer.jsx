import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1b3a] text-slate-300 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Socials */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-6 block flex items-center gap-2 font-serif">
                Sakthi Dental Clinic
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Specialized dental care for women, children & families in Hosur. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#4d4add] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#4d4add] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#4d4add] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Key Treatments */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/treatments" className="hover:text-white transition-colors">Teeth Cleaning</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Tooth Filling</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Tooth Extraction</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Root Canal Therapy</Link></li>
              <li><Link to="/treatments" className="hover:text-white transition-colors">Dental Implants</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-serif">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="text-[#9255c2] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-[#9255c2] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>info@sakthidentalclinic.in</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-[#9255c2] mt-1 mr-3 flex-shrink-0" size={18} />
                <span>+91 9862890897<br/>+91 9363298118</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center bg-">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;