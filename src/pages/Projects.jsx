import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaCalendar, FaRuler } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Residential', 'Commercial', 'Hospitality'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa - Greater Noida',
      category: 'Residential',
      location: 'Greater Noida, UP',
      area: '5000 sq.ft',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070',
      description: 'Complete interior design with stretch ceilings and fiber optic star ceilings',
    },
    {
      id: 2,
      title: '5-Star Hotel Suite',
      category: 'Hospitality',
      location: 'Mumbai, Maharashtra',
      area: '3500 sq.ft',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      description: 'Premium hospitality interiors with LED backlit panels and custom furniture',
    },
    {
      id: 3,
      title: 'Corporate Office',
      category: 'Commercial',
      location: 'Bangalore, Karnataka',
      area: '10000 sq.ft',
      year: '2023',
      image: '/image/office.jpg',
      description: 'Modern office design with acoustic stretch ceilings and smart lighting',
    },
    {
      id: 4,
      title: 'Designer Penthouse',
      category: 'Residential',
      location: 'Gurgaon, Haryana',
      area: '4500 sq.ft',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
      description: 'Ultra-luxury penthouse with NOOH SKYLUME artificial daylight systems',
    },
    {
      id: 5,
      title: 'Fine Dining Restaurant',
      category: 'Hospitality',
      location: 'Delhi, NCR',
      area: '2500 sq.ft',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074',
      description: 'Elegant restaurant interiors with custom wall murals and ambient lighting',
    },
    {
      id: 6,
      title: 'Retail Showroom',
      category: 'Commercial',
      location: 'Pune, Maharashtra',
      area: '6000 sq.ft',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087',
      description: 'Contemporary showroom with translucent stretch ceilings and branding elements',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Projects - NOOH Living Elevated</title>
        <meta
          name="description"
          content="Explore our portfolio of completed luxury interior projects across residential, commercial, and hospitality sectors."
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
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Showcasing excellence in luxury interior design across India
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="section-padding pt-0">
          <div className="container-custom mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-full uppercase text-sm font-semibold tracking-wider smooth-transition ${
                    activeCategory === category
                      ? 'bg-luxury-gold text-luxury-black'
                      : 'glass text-white hover:glass-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl overflow-hidden group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-full text-xs font-bold uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-luxury font-bold text-white mb-4 group-hover:text-luxury-gold smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-6">{project.description}</p>

                    {/* Project Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-start space-x-2">
                        <FaMapMarkerAlt className="text-luxury-gold mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white/50 text-xs">Location</p>
                          <p className="text-white text-sm">{project.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <FaRuler className="text-luxury-gold mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white/50 text-xs">Area</p>
                          <p className="text-white text-sm">{project.area}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <FaCalendar className="text-luxury-gold mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white/50 text-xs">Year</p>
                          <p className="text-white text-sm">{project.year}</p>
                        </div>
                      </div>
                    </div>

                    <button className="text-luxury-gold font-semibold uppercase text-sm tracking-wider animated-underline">
                      View Details →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with our expertise
              </p>
              <a href="/contact" className="btn-luxury">
                Start Your Project
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
