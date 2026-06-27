import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

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
      ],
    },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-4 sm:py-5 md:py-6'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <Logo className="h-9 sm:h-10 md:h-12 w-auto text-white" />
              <div className="mt-1">
                <p className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-luxury-gold uppercase">
                  Living Elevated
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 flex-nowrap overflow-visible ml-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative group flex-shrink-0">
                {item.submenu ? (
                  <>
                    <button
                      className="text-white hover:text-luxury-gold smooth-transition flex items-center gap-1 uppercase text-[11px] xl:text-xs font-semibold tracking-wider animated-underline whitespace-nowrap"
                      onMouseEnter={() => setShowMegaMenu(true)}
                      onMouseLeave={() => setShowMegaMenu(false)}
                    >
                      {item.name}
                      <FaChevronDown className="text-xs" />
                    </button>
                    <AnimatePresence>
                      {showMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          onMouseEnter={() => setShowMegaMenu(true)}
                          onMouseLeave={() => setShowMegaMenu(false)}
                          className="absolute top-full left-0 mt-2 w-56 xl:w-64 glass-gold rounded-lg shadow-2xl p-4 z-50"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-3 hover:bg-luxury-gold/20 rounded-lg smooth-transition text-white hover:text-luxury-gold text-sm"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`uppercase text-[11px] xl:text-xs font-semibold tracking-wider smooth-transition animated-underline whitespace-nowrap ${
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
              className="btn-luxury text-[11px] xl:text-xs whitespace-nowrap flex-shrink-0 ml-2 px-4 py-2 xl:px-5 xl:py-3"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-xl sm:text-2xl p-2 focus:outline-none flex-shrink-0"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 glass-gold rounded-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[75vh]">
                {navItems.map((item, index) => (
                  <div key={index} className="mb-1">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                          className="w-full flex items-center justify-between py-3 px-2 text-white font-semibold text-sm sm:text-base border-b border-white/10"
                        >
                          {item.name}
                          <motion.span
                            animate={{ rotate: mobileSubmenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaChevronDown className="text-luxury-gold text-xs" />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {mobileSubmenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 pl-6 pr-2 text-white/80 hover:text-luxury-gold smooth-transition text-sm border-b border-white/5"
                                >
                                  → {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-2 text-sm sm:text-base smooth-transition border-b border-white/10 ${
                          location.pathname === item.path
                            ? 'text-luxury-gold font-semibold'
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
                  className="btn-luxury mt-4 block text-center text-sm whitespace-nowrap"
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;