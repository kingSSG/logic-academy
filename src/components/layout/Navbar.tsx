
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-logic-800">LOGIC</span>
              <span className="ml-1 text-xs font-semibold bg-logic-500 text-white px-2 py-1 rounded">EdTech</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-logic-600 font-medium">Home</Link>
            <a href="#about" className="text-gray-700 hover:text-logic-600 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-logic-600 font-medium">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-logic-600 font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-logic-600 font-medium">Contact</a>
            <Link to="/admin">
              <Button variant="outline" className="border-logic-500 text-logic-500 hover:bg-logic-500 hover:text-white transition-colors">
                Admin
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-logic-600 font-medium px-4 py-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <a href="#about" className="text-gray-700 hover:text-logic-600 font-medium px-4 py-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="text-gray-700 hover:text-logic-600 font-medium px-4 py-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-logic-600 font-medium px-4 py-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-logic-600 font-medium px-4 py-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Link to="/admin" className="px-4 py-2" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="border-logic-500 text-logic-500 hover:bg-logic-500 hover:text-white transition-colors w-full">
                  Admin
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
