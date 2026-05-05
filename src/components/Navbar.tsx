import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: '23 Flavors', path: '/flavors' },
    { name: 'Our Story', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dp-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-display tracking-tighter text-dp-maroon uppercase"
          >
            Dr Pepper
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-dp-maroon ${
                location.pathname === link.path ? 'text-dp-maroon' : 'text-dp-cream/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/locator" 
            className="bg-dp-maroon hover:bg-dp-maroon/90 px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            Store Locator
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-drpepper-black border-b border-white/5"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/locator"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-drpepper-red p-4 rounded-xl font-bold uppercase"
          >
            <MapPin size={18} />
            Store Locator
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
