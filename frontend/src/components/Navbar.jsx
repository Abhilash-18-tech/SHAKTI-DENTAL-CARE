import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-secondary text-3xl">Sakthi</span> Dental Clinic
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">About</Link>
            <Link to="/treatments" className="text-gray-700 hover:text-primary transition-colors font-medium">Treatments</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</Link>
            <Link to="/contact" className="bg-gradient-to-r from-[#4d4add] to-[#9255c2] hover:from-[#3d3ab0] hover:to-[#7a42a8] text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
              Book Appointment
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none p-2 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4">
          <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-primary font-medium p-2">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-primary font-medium p-2">About</Link>
          <Link to="/treatments" onClick={toggleMenu} className="text-gray-700 hover:text-primary font-medium p-2">Treatments</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-primary font-medium p-2">Contact</Link>
          <Link to="/contact" onClick={toggleMenu} className="bg-gradient-to-r from-[#4d4add] to-[#9255c2] hover:from-[#3d3ab0] hover:to-[#7a42a8] text-white px-6 py-3 rounded-full font-medium text-center shadow-md">
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;