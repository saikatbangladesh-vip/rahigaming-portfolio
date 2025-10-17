import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTv, FiPlay, FiMessageSquare, FiTwitter, FiInstagram, FiMail, FiArrowUp, FiMapPin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      FiTv: FiTv,
      FiPlay: FiPlay,
      FiMessageSquare: FiMessageSquare,
      FiTwitter: FiTwitter,
      FiInstagram: FiInstagram,
      FiMail: FiMail
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.footer
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-gray-50 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800 backdrop-blur-sm"
    >
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section - Same as Header */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-0.5 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 p-1 relative overflow-hidden">
                    <img 
                      src="/logo.png" 
                      alt="Rahi Gaming Logo" 
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" 
                    />
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-700 ease-in-out"></div>
                  </div>
                </div>
                
                {/* Enhanced status indicator */}
                <div className="absolute -top-1 -right-1 flex items-center justify-center">
                  <span className="flex h-4 w-4 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-gray-900"></span>
                  </span>
                </div>
              </motion.div>
              
              {/* Enhanced Text - Same as Header */}
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  {personalInfo.title}
                </p>
              </div>
            </Link>
            
            {/* Tagline */}
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Creating epic gaming content and building communities
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={item.path}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 group">
                <FiMail className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-yellow-500 transition-colors duration-200" />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                <FiMapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Available for collaborations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <div className="flex justify-between items-center">
            {/* Copyright */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} {personalInfo.name}. All Rights Reserved.
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
