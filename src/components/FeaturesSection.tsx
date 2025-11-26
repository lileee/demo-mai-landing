import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe, Cpu, Database } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Neural Networks',
      description: 'State-of-the-art deep learning architectures that adapt and evolve with your data.',
      color: 'from-tech-gray to-tech-blue',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI inference with sub-millisecond latency for critical applications.',
      color: 'from-tech-light to-tech-purple',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption and compliance with global data protection standards.',
      color: 'from-tech-blue to-tech-gray',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy AI solutions worldwide with our distributed infrastructure and edge computing.',
      color: 'from-tech-purple to-tech-light',
    },
    {
      icon: Cpu,
      title: 'Custom AI Models',
      description: 'Tailored machine learning models designed specifically for your industry needs.',
      color: 'from-tech-gray to-tech-light',
    },
    {
      icon: Database,
      title: 'Smart Analytics',
      description: 'Transform raw data into actionable insights with our intelligent analytics platform.',
      color: 'from-tech-light to-tech-blue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-tech-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-tech-dark mb-6">
            Revolutionary AI
            <span className="bg-gradient-to-r from-tech-gray to-tech-light bg-clip-text text-transparent">
              {' '}Features
            </span>
          </h2>
          <p className="text-xl text-tech-dark/70 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make M.AI the leading choice for
            enterprises seeking intelligent automation and advanced machine learning solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-tech-bg/50 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-inter font-bold text-tech-dark mb-4 group-hover:text-tech-gray transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-tech-dark/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-tech-gray/5 to-tech-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-tech-gray to-tech-light text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;