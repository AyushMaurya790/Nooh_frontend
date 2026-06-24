import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { 
      name: 'Solutions', 
      submenu: [
        { name: 'NOOH SKYLUME™', path: '/skylume' },
        { name: 'NOOHSTAR™', path: '/noohstar' },
      ]
    },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Logo className="h-12 w-auto text-white" />
              <div className="mt-1">
                <p className="text-xs tracking-[0.3em] text-luxury-gold uppercase">Living Elevated</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="text-white hover:text-luxury-gold smooth-transition flex items-center gap-1 uppercase text-sm font-semibold tracking-wider animated-underline"
                      onMouseEnter={() => setShowMegaMenu(true)}
                      onMouseLeave={() => setShowMegaMenu(false)}
                    >
                      {item.name}
                      <FaChevronDown className="text-xs" />
                    </button>
                    {showMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseEnter={() => setShowMegaMenu(true)}
                        onMouseLeave={() => setShowMegaMenu(false)}
                        className="absolute top-full left-0 mt-2 w-64 glass-gold rounded-lg shadow-2xl p-4"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-3 hover:bg-luxury-gold/20 rounded-lg smooth-transition text-white hover:text-luxury-gold"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`uppercase text-sm font-semibold tracking-wider smooth-transition animated-underline ${
                      location.pathname === item.path
                        ? 'text-luxury-gold'
                        : 'text-white hover:text-luxury-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-luxury text-sm">
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-6 glass-gold rounded-lg p-6"
            >
              {navItems.map((item, index) => (
                <div key={index} className="mb-4">
                  {item.submenu ? (
                    <>
                      <p className="text-white font-semibold mb-2">{item.name}</p>
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 pl-4 text-white/80 hover:text-luxury-gold smooth-transition"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 smooth-transition ${
                        location.pathname === item.path
                          ? 'text-luxury-gold'
                          : 'text-white hover:text-luxury-gold'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-luxury w-full text-center mt-4 block"
              >
                Get Consultation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
