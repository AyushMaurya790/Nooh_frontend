import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeaturedServices from '../components/home/FeaturedServices';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyChoose from '../components/home/WhyChoose';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NOOH Living Elevated - Luxury Interior Design & Stretch Ceiling Solutions</title>
        <meta 
          name="description" 
          content="Premium luxury interior design, stretch ceilings, fiber optic systems, and turnkey projects. 21+ years warranty. Pan India installation." 
        />
        <meta 
          name="keywords" 
          content="luxury interior design, stretch ceiling, fiber optic ceiling, modular kitchen, turnkey projects, NOOH Living" 
        />
      </Helmet>

      <div className="overflow-hidden">
        <Hero />
        <Stats />
        <FeaturedServices />
        <WhyChoose />
        <FeaturedProjects />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
