import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { personalInfo, skills, experience, education } from '../data/portfolioData';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-24 bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="heading-primary text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Get to know more about my background, skills, and experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto lg:mx-0 mb-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-forest-500 to-teal-500 rounded-3xl animate-pulse-slow blur-sm opacity-60"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary-400 via-forest-500 to-teal-500 rounded-3xl p-0.5 shadow-xl">
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl p-1.5 relative overflow-hidden">
                      <img 
                        src="/logo.png" 
                        alt="Rahi Gaming Logo" 
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-forest-600 bg-clip-text text-transparent mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-4">
                  {personalInfo.title}
                </p>
                <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300 mb-6">
                  <FiMapPin className="mr-2" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center lg:justify-start space-x-2 w-fit mx-auto lg:mx-0"
              >
                <FiDownload size={18} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="card"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {skillCategory.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {tech.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary-500 to-forest-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: techIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and the impact I&apos;ve made along the way
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1 md:text-right">
                      <div className="flex items-center md:justify-end">
                        <FiBriefcase className="mr-1" size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center md:justify-end">
                        <FiMapPin className="mr-1" size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1 md:text-right">
                      <div className="flex items-center md:justify-end">
                        <FiBookOpen className="mr-1" size={14} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center md:justify-end">
                        <FiMapPin className="mr-1" size={14} />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="text-gray-700 dark:text-gray-300 font-medium">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>

                  {edu.relevant && (
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Relevant Coursework:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-forest-50 dark:bg-forest-900/20 text-forest-700 dark:text-forest-300 text-xs rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
