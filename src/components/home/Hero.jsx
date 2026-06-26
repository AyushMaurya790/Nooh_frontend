import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Logo';

const Hero = () => {
  const videoRef = useRef(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/luxury-interior.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-24 px-4 sm:px-6 text-center">
        
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 sm:mb-8"
        >
          <Logo className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto mx-auto text-white" />
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-luxury-gold text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] sm:tracking-[0.5em] mt-3 sm:mt-4"
          >
            Living Elevated
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed"
        >
          Transforming Spaces into
          <span className="text-luxury-gold font-luxury"> Timeless Masterpieces</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-8 sm:mb-12 max-w-sm sm:max-w-xl md:max-w-2xl mx-auto"
        >
          Premium Stretch Ceilings, Fiber Optic Systems & Luxury Interior Design Solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
        >
          <Link
            to="/contact"
            className="btn-luxury text-xs sm:text-sm w-[200px] sm:w-auto text-center"
          >
            Get Free Consultation
          </Link>
          <Link
            to="/projects"
            className="btn-outline-gold text-xs sm:text-sm w-[200px] sm:w-auto text-center"
          >
            Explore Projects
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-luxury-gold rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-luxury-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-0 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-luxury-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-0 sm:left-20 w-52 sm:w-96 h-52 sm:h-96 bg-luxury-gold rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;