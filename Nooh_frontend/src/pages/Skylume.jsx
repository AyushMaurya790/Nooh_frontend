import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaSun, FaLeaf, FaBolt, FaCog } from 'react-icons/fa';

const Skylume = () => {
  const features = [
    {
      icon: FaSun,
      title: 'Natural Daylight Simulation',
      description: 'Advanced LED technology that perfectly mimics natural sunlight with adjustable color temperature.',
    },
    {
      icon: FaLeaf,
      title: 'Health & Wellbeing',
      description: 'Improves mood, productivity, and circadian rhythm regulation in enclosed spaces.',
    },
    {
      icon: FaBolt,
      title: 'Energy Efficient',
      description: 'Low power consumption with long-lasting LED systems, reducing operational costs.',
    },
    {
      icon: FaCog,
      title: 'Smart Controls',
      description: 'Programmable settings to simulate sunrise, sunset, and various daylight conditions.',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070',
  ];

  return (
    <>
      <Helmet>
        <title>NOOH SKYLUME™ - Artificial Daylight Systems | NOOH Living</title>
        <meta
          name="description"
          content="Experience natural daylight indoors with NOOH SKYLUME™ artificial sky ceiling systems. Perfect for basements, offices, and spaces without natural light."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
              alt="NOOH SKYLUME"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black" />
          </div>

          <div className="relative z-10 container-custom mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-luxury font-bold text-gold-300 mb-6">
                <span className="text-white">NOOH</span>{' '}
                <span >SKYLUME™</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8">
                Bring Natural Daylight Indoors
              </p>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
                Revolutionary artificial daylight systems that transform windowless spaces
                into bright, vibrant environments with simulated blue sky and natural sunlight.
              </p>
              <Link to="/contact" className="btn-luxury text-lg">
                Request Demo
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What is SKYLUME */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                  What is
                  <span> NOOH SKYLUME™?</span>
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  NOOH SKYLUME™ is our proprietary artificial daylight system that uses
                  advanced LED technology to create realistic virtual sky ceilings. Perfect
                  for basements, windowless offices, spas, and interior spaces lacking
                  natural light.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  Our system replicates the appearance and psychological benefits of natural
                  daylight, including the blue sky effect, helping to improve mood,
                  productivity, and overall wellbeing in enclosed environments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">Ultra-realistic blue sky simulation</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">Tunable white technology (2700K-6500K)</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">Programmable circadian rhythm support</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
                  alt="SKYLUME Installation"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Key Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the benefits of natural daylight anywhere
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-gold rounded-2xl p-8 text-center hover:scale-105 smooth-transition"
                >
                  <feature.icon className="text-5xl text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-luxury font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Installation Gallery
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                See NOOH SKYLUME™ in action across various applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl h-96 cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`SKYLUME Gallery ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/40 smooth-transition" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Perfect For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'Basements & Underground Spaces',
                'Windowless Offices & Workspaces',
                'Hospitals & Healthcare Facilities',
                'Spas & Wellness Centers',
                'Hotels & Hospitality',
                'Retail Showrooms',
              ].map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-xl p-6 hover:glass-gold smooth-transition"
                >
                  <p className="text-white text-lg font-semibold">{application}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Transform Your Space with NOOH SKYLUME™
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation to see how artificial daylight can enhance your interior
              </p>
              <Link to="/contact" className="btn-luxury">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skylume;
