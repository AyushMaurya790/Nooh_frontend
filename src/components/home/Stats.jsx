import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaAward, FaUsers, FaBuilding, FaMapMarkedAlt } from 'react-icons/fa';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: FaBuilding,
      number: 189,
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      icon: FaAward,
      number: 21,
      suffix: '+',
      label: 'Years Warranty Support',
    },
    {
      icon: FaUsers,
      number: 1000,
      suffix: '+',
      label: 'Happy Customers',
    },
    {
      icon: FaMapMarkedAlt,
      number: 100,
      suffix: '%',
      label: 'Pan India Installation',
    },
  ];

  const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;
      
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isInView, target]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="section-padding bg-luxury-gray">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-gold rounded-2xl p-8 text-center hover:scale-105 smooth-transition"
            >
              <stat.icon className="text-5xl text-luxury-gold mx-auto mb-4" />
              <h3 className="text-4xl md:text-5xl font-luxury font-bold text-gradient-gold mb-2">
                <Counter target={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
