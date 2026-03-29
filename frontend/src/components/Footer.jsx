import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-6 block flex items-center gap-2">
                <span className="text-secondary text-3xl">Sakthi</span> Dental Clinic
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Specialized dental care for women, children & families. Modern treatments in a comfortable, safe environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors hover:bg-slate-700">
                Facebook
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors hover:bg-slate-700">
                X (Twitter)
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors hover:bg-slate-700">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-primary transition-colors flex items-center gap-2"><span>&gt;</span> Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2"><span>&gt;</span> About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-primary transition-colors flex items-center gap-2"><span>&gt;</span> Treatments</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><span>&gt;</span> Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors flex items-center gap-2"><span>&gt;</span> Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                <span>123 Medical Hub Road,<br />Chennai, Tamil Nadu 600001</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 flex-shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 flex-shrink-0" size={20} />
                <span>care@sakthidental.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
             Designed with care for your smile.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;