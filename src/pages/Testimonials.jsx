import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      location: 'Greater Noida',
      rating: 5,
      text: 'NOOH Living Elevated transformed our villa with their stunning stretch ceiling and fiber optic star ceiling. The quality is exceptional and the team was professional throughout. Highly recommended!',
      project: 'Luxury Villa Interior',
    },
    {
      name: 'Priya Sharma',
      role: 'Interior Designer',
      location: 'Gurgaon',
      rating: 5,
      text: 'As a designer, I\'ve worked with many vendors, but NOOH Living stands out for their innovation and quality. Their SKYLUME system is a game-changer for basement spaces. Absolutely brilliant!',
      project: 'Residential Basement',
    },
    {
      name: 'Amit Patel',
      role: 'Hotel Owner',
      location: 'Mumbai',
      rating: 5,
      text: 'We installed NOOHSTAR fiber optic ceilings in our premium suites. Guests are amazed by the ambiance. The 21-year warranty gives us complete peace of mind. Best investment we made!',
      project: '5-Star Hotel Suites',
    },
    {
      name: 'Sneha Gupta',
      role: 'Homeowner',
      location: 'Delhi',
      rating: 5,
      text: 'The modular kitchen and luxury furniture from NOOH Living exceeded our expectations. Beautiful craftsmanship, timely installation, and excellent after-sales support. Worth every rupee!',
      project: 'Complete Home Interior',
    },
    {
      name: 'Vikram Singh',
      role: 'Office Manager',
      location: 'Bangalore',
      rating: 5,
      text: 'NOOH Living completed our office turnkey project on time with impeccable quality. The LED backlit panels and acoustic stretch ceilings have transformed our workspace. Highly professional team!',
      project: 'Corporate Office',
    },
    {
      name: 'Meera Reddy',
      role: 'Spa Owner',
      location: 'Hyderabad',
      rating: 5,
      text: 'The virtual sky ceiling in our spa creates such a calming atmosphere. Clients love it! NOOH Living understood our vision perfectly and delivered beyond expectations. Simply outstanding!',
      project: 'Luxury Spa Interior',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials - NOOH Living Elevated</title>
        <meta
          name="description"
          content="Read what our satisfied clients say about NOOH Living Elevated's luxury interior design and stretch ceiling services."
        />
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
              Client Testimonials
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Hear from our satisfied clients about their experience with NOOH Living Elevated
            </motion.p>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="section-padding pt-0">
          <div className="container-custom mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-slider pb-16"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-gold rounded-2xl p-8 h-full"
                  >
                    <FaQuoteLeft className="text-4xl text-luxury-gold/30 mb-6" />
                    
                    {/* Rating */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-luxury-gold text-lg" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/80 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Project */}
                    <p className="text-luxury-gold text-sm font-semibold mb-6">
                      Project: {testimonial.project}
                    </p>

                    {/* Client Info */}
                    <div className="border-t border-luxury-gold/20 pt-6">
                      <h4 className="text-white font-bold text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-luxury font-bold text-gradient-gold mb-2">
                  98%
                </h3>
                <p className="text-white/70 uppercase text-sm tracking-wider">
                  Client Satisfaction
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-5xl font-luxury font-bold text-gradient-gold mb-2">
                  1000+
                </h3>
                <p className="text-white/70 uppercase text-sm tracking-wider">
                  Happy Clients
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-5xl font-luxury font-bold text-gradient-gold mb-2">
                  189+
                </h3>
                <p className="text-white/70 uppercase text-sm tracking-wider">
                  Projects Completed
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-5xl font-luxury font-bold text-gradient-gold mb-2">
                  21+
                </h3>
                <p className="text-white/70 uppercase text-sm tracking-wider">
                  Years Warranty
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Placeholder */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gradient-gold mb-4">
                Video Testimonials
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Watch our clients share their NOOH Living experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((video) => (
                <motion.div
                  key={video}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-video glass rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={`https://images.unsplash.com/photo-160060${video}718979-ce8a6c25118c?q=80&w=2053`}
                    alt={`Video Testimonial ${video}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-luxury-black/50 flex items-center justify-center group-hover:bg-luxury-black/70 smooth-transition">
                    <div className="w-20 h-20 rounded-full bg-luxury-gold/90 flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-luxury-black border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Become Our Next Success Story
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trusted NOOH Living with their dream projects
              </p>
              <a href="/contact" className="btn-luxury">
                Start Your Project
              </a>
            </motion.div>
          </div>
        </section>

        <style jsx>{`
          .testimonials-slider .swiper-button-next,
          .testimonials-slider .swiper-button-prev {
            color: #d4af37;
          }
          .testimonials-slider .swiper-pagination-bullet {
            background: #d4af37;
          }
        `}</style>
      </div>
    </>
  );
};

export default Testimonials;

