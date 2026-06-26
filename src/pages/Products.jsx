import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    'all',
    'Stretch Ceilings',
    'Fiber Optic',
    'Wall Coverings',
    'LED Panels',
    'Furniture',
  ];

  const products = [
    {
      id: 1,
      title: 'Textile Stretch Ceiling',
      category: 'Stretch Ceilings',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    },
    {
      id: 2,
      title: 'Fiber Optic Star Ceiling',
      category: 'Fiber Optic',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    },
    {
      id: 3,
      title: 'Embroidery Wall Fabric',
      category: 'Wall Coverings',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074',
    },
    {
      id: 4,
      title: 'LED Backlit Panel',
      category: 'LED Panels',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    },
    {
      id: 5,
      title: 'Luxury Sofa Set',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070',
    },
    {
      id: 6,
      title: 'Translucent Ceiling',
      category: 'Stretch Ceilings',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070',
    },
    {
      id: 7,
      title: 'Galaxy Ceiling Effect',
      category: 'Fiber Optic',
      image: '/image/galaxy.jpg',
    },
    {
      id: 8,
      title: 'Custom Wall Mural',
      category: 'Wall Coverings',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087',
    },
    {
      id: 9,
      title: 'RGBW LED System',
      category: 'LED Panels',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2067',
    },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Product Gallery - NOOH Living Elevated</title>
        <meta
          name="description"
          content="Browse our premium collection of stretch ceilings, fiber optic systems, wall coverings, and luxury furniture."
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
              Product Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Discover our exquisite collection of premium interior solutions
            </motion.p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="section-padding pt-0">
          <div className="container-custom mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full uppercase text-sm font-semibold tracking-wider smooth-transition ${
                    activeFilter === category
                      ? 'bg-luxury-gold text-luxury-black'
                      : 'glass text-white hover:glass-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer h-80"
                    onClick={() => setLightboxImage(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-80 group-hover:opacity-90 smooth-transition" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-luxury-gold text-xs uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-white text-xl font-luxury font-bold mt-2">
                        {product.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-luxury font-bold text-white mb-2">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-luxury-gold">{lightboxImage.category}</p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-8 right-8 text-white text-4xl hover:text-luxury-gold smooth-transition"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Products;
