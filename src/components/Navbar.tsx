import React from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Palette className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">ArtVista Gallery</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#home" className="hover:bg-teal-700 px-3 py-2 rounded-md">Home</a>
              <a href="#exhibitions" className="hover:bg-teal-700 px-3 py-2 rounded-md">Exhibitions</a>
              <a href="#artists" className="hover:bg-teal-700 px-3 py-2 rounded-md">Artists</a>
              <a href="#tickets" className="hover:bg-teal-700 px-3 py-2 rounded-md">Tickets</a>
              <a href="#contact" className="hover:bg-teal-700 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:bg-teal-700 px-3 py-2 rounded-md">Home</a>
            <a href="#exhibitions" className="block hover:bg-teal-700 px-3 py-2 rounded-md">Exhibitions</a>
            <a href="#artists" className="block hover:bg-teal-700 px-3 py-2 rounded-md">Artists</a>
            <a href="#tickets" className="block hover:bg-teal-700 px-3 py-2 rounded-md">Tickets</a>
            <a href="#contact" className="block hover:bg-teal-700 px-3 py-2 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;