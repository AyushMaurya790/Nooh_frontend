import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAward, 
  FaShieldAlt, 
  FaUsers, 
  FaClock, 
  FaTools, 
  FaGem 
} from 'react-icons/fa';

const WhyChoose = () => {
  const reasons = [
    {
      icon: FaAward,
      title: '21+ Years Warranty',
      description: 'Industry-leading warranty support on all our premium products and installations.',
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Assurance',
      description: 'ISO certified processes ensuring the highest standards of quality and durability.',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Highly skilled professionals with decades of combined experience in luxury interiors.',
    },
    {
      icon: FaClock,
      title: 'Timely Delivery',
      description: 'Committed to completing projects on schedule without compromising on quality.',
    },
    {
      icon: FaTools,
      title: 'Pan India Service',
      description: 'Complete installation and after-sales support across all major Indian cities.',
    },
    {
      icon: FaGem,
      title: 'Premium Materials',
      description: 'Only the finest imported and certified materials for lasting elegance and performance.',
    },
  ];

  return (
    <section className="section-padding bg-luxury-gray">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">
              Why Choose
              <span className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6"> NOOH Living?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              We are committed to delivering exceptional luxury interior solutions that transform 
              ordinary spaces into extraordinary experiences. Our dedication to quality, innovation, 
              and customer satisfaction sets us apart.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2" />
                <p className="text-white/80">189+ Successfully Completed Premium Projects</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2" />
                <p className="text-white/80">1000+ Satisfied Clients Across India</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2" />
                <p className="text-white/80">Turnkey Solutions from Design to Installation</p>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-gold rounded-xl p-6 hover:shadow-2xl hover:shadow-luxury-gold/20 smooth-transition"
              >
                <reason.icon className="text-4xl text-luxury-gold mb-4" />
                <h3 className="text-xl font-luxury font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-white/70 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
