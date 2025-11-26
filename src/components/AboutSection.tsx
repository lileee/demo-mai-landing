import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Clients',
      description: 'Trusted by leading enterprises worldwide',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Industry Awards',
      description: 'Recognized for innovation and excellence',
    },
    {
      icon: Target,
      value: '99.8%',
      label: 'Success Rate',
      description: 'Proven track record of delivering results',
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'ROI Increase',
      description: 'Average return on investment for our clients',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-tech-dark mb-6">
              Pioneering the
              <span className="bg-gradient-to-r from-tech-gray to-tech-light bg-clip-text text-transparent">
                {' '}Future of AI
              </span>
            </h2>
            <div className="space-y-6 text-lg text-tech-dark/80 leading-relaxed">
              <p>
                Founded in 2020, M.AI has emerged as a global leader in artificial intelligence
                and machine learning solutions. Our mission is to democratize AI technology,
                making it accessible and beneficial for businesses of all sizes.
              </p>
              <p>
                With a team of world-class researchers, engineers, and data scientists, we've
                developed cutting-edge AI platforms that have transformed industries from
                healthcare to finance, from manufacturing to retail.
              </p>
              <p>
                Our commitment to innovation, ethics, and excellence drives us to create
                AI solutions that not only solve today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-tech-gray to-tech-light text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 bg-gradient-to-br from-tech-gray/10 to-tech-light/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tech-gray/20 to-tech-light/20" />
                
                {/* Animated Elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-tech-gray to-tech-light rounded-xl opacity-80"
                />
                
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-tech-light to-tech-blue rounded-xl opacity-70"
                />
                
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-tech-blue to-tech-purple rounded-full opacity-60"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-tech-bg"
              >
                <div className="text-2xl font-bold text-tech-gray">AI</div>
                <div className="text-sm text-tech-dark/70">Powered</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-tech-bg"
              >
                <div className="text-2xl font-bold text-tech-light">24/7</div>
                <div className="text-sm text-tech-dark/70">Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-tech-bg to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-tech-bg/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-tech-gray to-tech-light rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-tech-dark mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-tech-gray mb-2">{stat.label}</div>
                  <div className="text-sm text-tech-dark/70">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;