import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@m.ai',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: 'Come say hello at our office',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-tech-dark to-tech-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
            Get in
            <span className="bg-gradient-to-r from-tech-bg to-tech-light bg-clip-text text-transparent">
              {' '}Touch
            </span>
          </h2>
          <p className="text-xl text-tech-bg/80 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how M.AI can help
            you achieve your goals and stay ahead of the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-inter font-bold mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-tech-bg" />
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-tech-bg focus:border-transparent text-white placeholder-white/60 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-tech-bg focus:border-transparent text-white placeholder-white/60 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-tech-bg focus:border-transparent text-white placeholder-white/60 transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-tech-bg focus:border-transparent text-white placeholder-white/60 transition-all duration-200 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-tech-bg to-tech-light text-tech-dark font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-inter font-bold mb-6">Contact Information</h3>
              <p className="text-tech-bg/80 mb-8">
                We're here to help you unlock the power of AI for your business.
                Reach out to us through any of the following channels.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-tech-bg to-tech-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-tech-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-tech-bg font-medium mb-1">{info.content}</p>
                      <p className="text-tech-bg/70 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-tech-bg/20 to-tech-light/20 p-6 rounded-xl border border-white/20"
            >
              <h4 className="font-bold text-lg mb-2">Ready to get started?</h4>
              <p className="text-tech-bg/80 mb-4">
                Schedule a free consultation with our AI experts to discuss your specific needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-tech-bg to-tech-light text-tech-dark font-semibold py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;