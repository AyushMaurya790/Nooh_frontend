import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Stretch Ceiling Solutions',
      description: 'Premium stretch ceiling systems with endless design possibilities. Perfect for creating stunning architectural features.',
      features: ['Textile Stretch Ceiling', 'Translucent Stretch Ceiling', 'Custom Printed Designs', 'Quick Installation'],
      image: '/images/star-ceiling.png',
    },
    {
      title: 'Fiber Optic Star Ceiling',
      description: 'Transform your ceilings into a mesmerizing night sky with our NOOHSTAR™ fiber optic systems.',
      features: ['Galaxy Ceiling Effects', 'Customizable Star Patterns', 'RGB Color Options', 'Energy Efficient'],
      image: '/images/fiber-optic.png',
    },
    {
      title: 'Embroidery Wall Covering Fabric',
      description: 'Luxurious embroidered wall fabrics that add texture, elegance, and sophistication to any space.',
      features: ['Premium Fabrics', 'Custom Embroidery', 'Acoustic Properties', 'Easy Maintenance'],
      image: '/images/embroidery-wall.png',
    },
    {
      title: 'Wall Mural Printing',
      description: 'Custom wall murals that bring your vision to life with stunning high-resolution printing.',
      features: ['HD Printing Quality', 'Custom Designs', 'Durable Materials', 'Professional Installation'],
      image: '/images/wall-mural.png',
    },
    {
      title: 'LED Backlit Ceiling & Wall Panels',
      description: 'Innovative LED lighting solutions including our NOOH SKYLUME™ artificial daylight systems.',
      features: ['Virtual Sky Ceiling', 'RGBW Systems', 'Tunable White', 'Energy Efficient'],
      image: '/images/led-backlit.png',
    },
    {
      title: 'Luxury Interior Design',
      description: 'Complete interior design solutions tailored to your lifestyle and preferences.',
      features: ['3D Visualization', 'Space Planning', 'Custom Furniture', 'Turnkey Execution'],
      image: '/images/luxury-interior.jpeg',
    },
    {
      title: 'Modular Kitchen',
      description: 'Functional and stylish modular kitchens designed to maximize space and efficiency.',
      features: ['Custom Layouts', 'Premium Hardware', 'Smart Storage', 'Modern Finishes'],
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068',
    },
    {
      title: 'Luxury Furniture',
      description: 'Bespoke luxury furniture pieces that combine comfort, style, and craftsmanship.',
      features: ['Custom Design', 'Premium Materials', 'Expert Craftsmanship', 'Unique Pieces'],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070',
    },
    {
      title: 'Turnkey Construction',
      description: 'End-to-end project management from concept to completion for residential and commercial spaces.',
      features: ['Complete Project Management', 'Quality Assurance', 'Timely Delivery', 'Post-Delivery Support'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - NOOH Living Elevated</title>
        <meta name="description" content="Explore our comprehensive luxury interior design services including stretch ceilings, fiber optic systems, and turnkey projects." />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-luxury font-bold text-gradient-gold mb-6"
            >
              Our Premium Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Comprehensive luxury interior solutions designed to transform your spaces into extraordinary experiences
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="text-3xl md:text-5xl font-luxury font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0" />
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="btn-luxury">
                      Get Quote
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-2xl shadow-2xl"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let's bring your vision to life
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="btn-luxury">
                  Schedule Consultation
                </Link>
                <a href="tel:+919540060180" className="btn-outline-gold">
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
