import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaStar, FaPalette, FaCog, FaInfinity } from 'react-icons/fa';

const NoohStar = () => {
  const features = [
    {
      icon: FaStar,
      title: 'Customizable Star Patterns',
      description: 'Create your own constellation patterns or replicate real night skies with thousands of fiber optic points.',
    },
    {
      icon: FaPalette,
      title: 'RGB Color Options',
      description: 'Dynamic color changing capabilities with remote control for creating different moods and atmospheres.',
    },
    {
      icon: FaCog,
      title: 'Twinkle Effects',
      description: 'Realistic twinkling star effects that mimic the natural shimmer of stars in the night sky.',
    },
    {
      icon: FaInfinity,
      title: 'Long Lasting',
      description: '50,000+ hours lifespan with minimal maintenance and energy-efficient operation.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>NOOHSTAR™ - Fiber Optic Star Ceiling Systems | NOOH Living</title>
        <meta
          name="description"
          content="Transform your ceiling into a mesmerizing night sky with NOOHSTAR™ fiber optic star ceiling systems. Perfect for bedrooms, theaters, and spa environments."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"
              alt="NOOHSTAR"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/70 to-luxury-black" />
          </div>

          <div className="relative z-10 container-custom mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-8"
              >
                <FaStar className="text-8xl text-luxury-gold mx-auto" />
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-luxury font-bold text-gold-300 mb-6">
                <span className="text-white">NOOH</span>
                <span>STAR™</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8">
                Your Personal Night Sky
              </p>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
                Experience the magic of a starlit sky indoors with our premium fiber optic
                star ceiling systems. Perfect for creating relaxing, romantic, or theatrical atmospheres.
              </p>
              <Link to="/contact" className="btn-luxury text-lg">
                Design Your Sky
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What is NOOHSTAR */}
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
                  <span> NOOHSTAR™?</span>
                </h2>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  NOOHSTAR™ is our signature fiber optic star ceiling system that brings
                  the enchanting beauty of a starlit night sky into your interior spaces.
                  Using thousands of tiny fiber optic strands, we create realistic star
                  patterns complete with twinkling effects.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  Each installation is custom-designed to match your vision - from subtle
                  starfields to dramatic galaxy effects with shooting stars and nebula clouds.
                  Perfect for master bedrooms, home theaters, spas, restaurants, and
                  hospitality venues.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">Thousands of fiber optic points</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">RGB color changing with remote</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">Realistic twinkling effects</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">Energy efficient LED light source</p>
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
                  src="./image/startloom.png"
                  alt="NOOHSTAR Installation"
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
                System Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Advanced technology for the ultimate stargazing experience
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

        {/* Design Options */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Design Options
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Create your perfect celestial experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-luxury font-bold text-white mb-4">
                  Classic Starfield
                </h3>
                <p className="text-white/70 mb-4">
                  Simple, elegant star patterns perfect for bedrooms and relaxation spaces.
                  Subtle twinkling creates a calming ambiance.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• 500-2000 fiber points</li>
                  <li>• White light or color changing</li>
                  <li>• Gentle twinkle effect</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-gold rounded-2xl p-8 border-2 border-luxury-gold"
              >
                <div className="bg-luxury-gold text-luxury-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-luxury font-bold text-white mb-4">
                  Galaxy Effect
                </h3>
                <p className="text-white/70 mb-4">
                  Dramatic starfield with constellation patterns, shooting stars, and nebula
                  clouds for a truly immersive experience.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• 2000-5000 fiber points</li>
                  <li>• Multiple color zones</li>
                  <li>• Shooting star effects</li>
                  <li>• Custom constellations</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-2xl font-luxury font-bold text-white mb-4">
                  Custom Design
                </h3>
                <p className="text-white/70 mb-4">
                  Work with our designers to create a completely bespoke star ceiling
                  tailored to your specific vision and space.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li>• Unlimited fiber points</li>
                  <li>• Custom patterns & designs</li>
                  <li>• Advanced effects</li>
                  <li>• Smart home integration</li>
                </ul>
              </motion.div>
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
                'Master Bedrooms',
                'Home Theaters',
                'Kids Rooms',
                'Spa & Wellness Centers',
                'Hotels & Resorts',
                'Restaurants & Bars',
                'Yachts & Luxury Vehicles',
                'Commercial Spaces',
                'Religious Buildings',
              ].map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-xl p-6 hover:glass-gold smooth-transition text-center"
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
                Create Your Dream Star Ceiling
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation and let our experts design the perfect NOOHSTAR™ system for you
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="btn-luxury">
                  Get Started
                </Link>
                <a href="tel:+919540060180" className="btn-outline-gold">
                  Call: +91 9540060180
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NoohStar;
