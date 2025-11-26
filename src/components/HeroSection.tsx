import React from 'react';
import { motion } from 'framer-motion';
import { GrainGradient } from '@paper-design/shaders-react';

const HeroSection: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with GrainGradient */}
      <div className="absolute inset-0">
        <GrainGradient
          className="w-full h-full"
          colors={["#8E9AAF", "#BCA1A1", "#E8E9EB"]}
          intensity={0.3}
          speed={0.5}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/20 via-transparent to-tech-gray/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-inter font-bold text-tech-dark leading-tight"
          >
            The Future of
            <br />
            <span className="bg-gradient-to-r from-tech-gray via-tech-light to-tech-blue bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-tech-dark/80 max-w-3xl mx-auto leading-relaxed"
          >
            M.AI pioneers the next generation of AI solutions, transforming industries through
            cutting-edge machine learning and intelligent automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToFeatures}
              className="bg-gradient-to-r from-tech-gray to-tech-light text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-tech-gray text-tech-gray px-8 py-4 rounded-full font-semibold text-lg hover:bg-tech-gray hover:text-white transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-tech-gray mb-2">500+</div>
              <div className="text-tech-dark/70 font-medium">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-tech-light mb-2">99.9%</div>
              <div className="text-tech-dark/70 font-medium">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-tech-blue mb-2">24/7</div>
              <div className="text-tech-dark/70 font-medium">AI Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-tech-gray rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-tech-gray rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;