"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../animations/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      viewport={{ once: true }}
      className="col-span-6 sm:col-span-12"
    >
      <div className="w-full p-6 bg-white dark:bg-black rounded-2xl shadow-xl flex flex-col justify-between h-full
        border border-solid border-dark dark:border-light">
        
        {/* Project Image with hover animation */}
        <div className="w-full h-0 relative rounded-lg overflow-hidden pb-[56.25%] mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gray-200"
          >
            {/* Placeholder for image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">
              {title} Project Image
            </div>
          </motion.div>
        </div>
        
        {/* Content */}
        <div>
          <span className="text-primary font-medium text-sm dark:text-primaryDark">{type}</span>
          <h2 className="text-2xl font-bold my-2">{title}</h2>
          <p className="text-sm mb-4">{summary}</p>
        </div>
        
        {/* Links */}
        <div className="flex items-center mt-2">
          {github && (
            <Link href={github} target="_blank" className="w-10 mr-4">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 496 512"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="fill-current dark:text-light"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </motion.svg>
            </Link>
          )}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={link} 
              target="_blank"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg py-2 px-6 text-lg font-semibold"
            >
              Visit Project
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ className = '' }) => {
  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center ${className}`}>
      <AnimatedText 
        text="Imagination Trumps Knowledge!" 
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />

      <div className="grid grid-cols-12 gap-6 gap-y-16">
        {/* Featured Project */}
        <div className="col-span-12 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center justify-between rounded-2xl p-8
              border border-solid border-dark dark:border-light bg-gradient-to-br from-purple-100 to-blue-100 
              dark:from-purple-900 dark:to-blue-900 shadow-xl lg:flex-col lg:p-6"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">Featured Project</h2>
            <div className="w-full grid grid-cols-2 gap-6 lg:grid-cols-1">
              <div className="w-full h-auto relative rounded-lg overflow-hidden shadow-xl">
                <div className="w-full h-0 pt-[75%] bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
                    Featured Project Image
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Featured Project Title</h3>
                  <p className="mb-4">
                    A comprehensive feature-rich application showcasing advanced techniques in web development.
                    This project demonstrates the use of modern frameworks and technologies to build a scalable
                    and robust application.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Link href="https://github.com" target="_blank" className="w-10">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 496 512"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </motion.svg>
                  </Link>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="https://example.com" 
                      target="_blank"
                      className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg py-2 px-6 text-lg font-semibold"
                    >
                      Visit Project
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Regular Projects */}
        <ProjectCard 
          type="Web Development"
          title="Project One"
          summary="A full-stack web application with authentication, database integration and responsive UI design."
          img="/project1.jpg"
          link="https://example.com/project1"
          github="https://github.com/username/project1"
        />
        
        <ProjectCard 
          type="Mobile App"
          title="Project Two"
          summary="A cross-platform mobile application built with React Native, featuring real-time data sync and offline functionality."
          img="/project2.jpg"
          link="https://example.com/project2"
          github="https://github.com/username/project2"
        />
        
        <ProjectCard 
          type="UI/UX Design"
          title="Project Three"
          summary="A comprehensive design system created for a fintech startup, including component library and usage guidelines."
          img="/project3.jpg"
          link="https://example.com/project3"
        />
        
        <ProjectCard 
          type="Backend API"
          title="Project Four"
          summary="A RESTful API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation."
          img="/project4.jpg"
          link="https://example.com/project4"
          github="https://github.com/username/project4"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
