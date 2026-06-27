import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const services = [
    'Stretch Ceiling Solutions',
    'Textile Stretch Ceiling',
    'Fiber Optic Star Ceiling',
    'Embroidery Wall Covering',
    'Wall Mural Printing',
    'LED Backlit Panels',
    'Modular Kitchen',
    'Luxury Furniture',
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'NOOH SKYLUME™', path: '/skylume' },
    { name: 'NOOHSTAR™', path: '/noohstar' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-luxury-gray border-t border-luxury-gold/20">
      <div className="container-custom mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Logo className="h-10 w-auto text-white mb-4" />
            <p className="text-xs tracking-[0.3em] text-luxury-gold mb-4 uppercase">Living Elevated</p>
            <p className="text-white/70 mb-6 leading-relaxed">
              Premium luxury interior design solutions with 21+ years warranty support. 
              Specialists in stretch ceilings, fiber optic systems, and turnkey projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-luxury-gold smooth-transition text-xl"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-luxury-gold smooth-transition text-xl"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-luxury-gold smooth-transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-luxury-gold smooth-transition text-xl"
              >
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-luxury font-bold text-luxury-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-white/70 hover:text-luxury-gold smooth-transition text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-luxury font-bold text-luxury-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-luxury-gold smooth-transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-luxury font-bold text-luxury-gold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-luxury-gold mt-1 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  D-180, Sector 10,<br />
                  Noida - 201301, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-luxury-gold flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+919540060180" 
                    className="text-white/70 hover:text-luxury-gold smooth-transition text-sm block"
                  >
                    +91 9540060180
                  </a>
                  <a 
                    href="tel:+919958748979" 
                    className="text-white/70 hover:text-luxury-gold smooth-transition text-sm block"
                  >
                    +91 9958748979
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-luxury-gold flex-shrink-0" />
                <a 
                  href="mailto:info@noohliving.com" 
                  className="text-white/70 hover:text-luxury-gold smooth-transition text-sm"
                >
                  info@noohliving.com
                </a>
              </div>
               <div className="flex items-center space-x-3">
                <FaEnvelope className="text-luxury-gold flex-shrink-0" />
                <a 
                  href="mailto:info@noohliving.com" 
                  className="text-white/70 hover:text-luxury-gold smooth-transition text-sm"
                >
                  noohliving@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} NOOH Living Elevated LLP. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white/50 hover:text-luxury-gold smooth-transition text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-luxury-gold smooth-transition text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
