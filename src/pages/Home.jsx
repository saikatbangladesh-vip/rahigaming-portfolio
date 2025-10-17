import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiTv, FiPlay, FiMessageSquare, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { personalInfo, socialLinks, projects } from '../data/portfolioData';
import projectImage from '../assets/images/image.jpg';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-orange-400/25 to-red-500/25 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl animate-float animation-delay-4000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white/30 to-yellow-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50"></div>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]"></div>
        </div>

        <div className="relative z-10 container-custom section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Greeting Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <div className="relative inline-block group">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                
                {/* Main badge */}
                <span className="relative inline-block px-8 py-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 backdrop-blur-sm rounded-full text-sm font-semibold bg-white/90 dark:bg-gray-900/90 border-2 border-gradient-to-r from-yellow-200 via-orange-200 to-red-200 dark:from-yellow-600/50 dark:via-orange-600/50 dark:to-red-600/50 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent font-bold tracking-wide">
                    🎮 Welcome to my Gaming World
                  </span>
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-1 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1 left-3 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse animation-delay-1000"></div>
                  <div className="absolute top-2 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-bounce animation-delay-2000"></div>
                </span>
              </div>
            </motion.div>

            {/* Name with enhanced typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-primary text-gray-900 dark:text-white mb-6"
            >
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            {/* Professional Title with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {personalInfo.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full"></div>
            </motion.div>

            {/* Enhanced tagline with better typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-12"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Enhanced Profile Logo with modern design */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
              className="mx-auto mb-12 relative group"
            >
              
              {/* Main logo container */}
              <div className="relative w-44 h-44 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl p-2 relative overflow-hidden">
                    <img 
                      src="/logo.png" 
                      alt="Rahi Gaming Logo" 
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" 
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>
                </div>
                
                {/* Online status indicator */}
                <div className="absolute -bottom-2 -right-2 flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>
                
                {/* Floating particles */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-2000 opacity-80"></div>
                <div className="absolute -top-2 -right-6 w-2 h-2 bg-orange-500 rounded-full animate-bounce animation-delay-4000 opacity-60"></div>
                <div className="absolute -bottom-4 -left-6 w-4 h-4 bg-red-400 rounded-full animate-bounce opacity-70"></div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Watch My Content</span>
              </motion.button>
              
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <FiDownload size={18} />
                <span>Media Kit</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center space-x-6 pt-8"
            >
              {socialLinks.slice(0, 3).map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200"
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FiArrowDown size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 btn-primary"
            >
              Learn More About Me
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="card group cursor-pointer overflow-hidden"
              >
                <div className="h-[200px] overflow-hidden rounded-t-lg bg-gray-300">
                  <img
                    src={project.image || projectImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-md border border-yellow-200 dark:border-yellow-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-md border border-yellow-200 dark:border-yellow-700">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View All Projects
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
