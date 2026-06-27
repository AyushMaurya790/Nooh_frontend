import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="section-padding bg-luxury-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-gold rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">
            Ready to Transform
            <span className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6"> Your Space?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience luxury interior design like never before. Get a free consultation 
            with our expert designers and discover how we can elevate your living spaces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="btn-luxury">
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+919540060180"
              className="btn-outline-gold"
            >
              Call: +91 9540060180
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 pt-12 border-t border-luxury-gold/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-3xl font-luxury font-bold text-luxury-gold mb-2">21+</h4>
                <p className="text-white/70 text-sm">Years Warranty</p>
              </div>
              <div>
                <h4 className="text-3xl font-luxury font-bold text-luxury-gold mb-2">189+</h4>
                <p className="text-white/70 text-sm">Projects Done</p>
              </div>
              <div>
                <h4 className="text-3xl font-luxury font-bold text-luxury-gold mb-2">1000+</h4>
                <p className="text-white/70 text-sm">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-luxury font-bold text-luxury-gold mb-2">100%</h4>
                <p className="text-white/70 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
