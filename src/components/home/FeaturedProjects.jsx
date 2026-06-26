import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Luxury Villa Interior',
      category: 'Residential',
      location: 'Delhi NCR',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070',
    },
    {
      title: 'Premium Hotel Suite',
      category: 'Hospitality',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    },
    {
      title: 'Modern Office Space',
      category: 'Commercial',
      location: 'Bangalore',
      image: '/image/office.jpg',
    },
    {
      title: 'Luxury Penthouse',
      category: 'Residential',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    },
    {
      title: 'Designer Farmhouse',
      category: 'Residential',
      location: 'Gurgaon',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074',
    },
  ];

  return (
    <section className="section-padding bg-luxury-black overflow-hidden">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gradient-gold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore our portfolio of exquisite luxury interiors and architectural masterpieces
          </p>
        </motion.div>

        {/* Projects Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="featured-projects-slider"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="pb-16">
              <motion.div
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer h-96"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-80 group-hover:opacity-90 smooth-transition" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-luxury-gold text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-luxury font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4">{project.location}</p>
                  <Link
                    to="/projects"
                    className="text-luxury-gold font-semibold uppercase text-sm tracking-wider animated-underline inline-block"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/projects" className="btn-luxury">
            View All Projects
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .featured-projects-slider {
          padding: 40px 0;
        }
        .featured-projects-slider .swiper-slide {
          width: 350px;
        }
        .featured-projects-slider .swiper-button-next,
        .featured-projects-slider .swiper-button-prev {
          color: #d4af37;
        }
        .featured-projects-slider .swiper-pagination-bullet {
          background: #d4af37;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;

