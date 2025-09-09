"use client";

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../animations/AnimatedText';
import FloatingElement from '../animations/FloatingElement';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center py-32 ${className}`}>
      <div className="w-full flex justify-between items-center lg:flex-col">
        {/* Text content */}
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText 
            text="Turning Vision Into Reality With Code And Design." 
            className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in web development and software engineering.
          </p>
          
          <div className="flex items-center self-start mt-2 lg:self-center">
            <motion.a 
              href="/resume.pdf"
              download={true}
              className="flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white p-2.5 px-6 
              rounded-lg text-lg font-semibold hover:bg-dark hover:text-light 
              border-2 border-solid border-transparent hover:border-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
              hover:dark:border-light md:p-2 md:px-4 md:text-base"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a 
              href="mailto:your-email@example.com"
              target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
        </div>

        {/* Image or 3D model */}
        <FloatingElement className="w-1/2 lg:w-full lg:mt-8" distance={10} duration={3}>
          <div className="w-3/4 h-auto mx-auto relative">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl absolute top-0 -right-2 -z-10 
            animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-pink-500 rounded-2xl absolute -bottom-2 left-2 -z-10
            animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
            <div className="w-full h-0 pt-[100%] bg-gray-200 rounded-2xl overflow-hidden relative shadow-xl">
              {/* Replace with actual image/avatar */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-400">
                Your Photo Here
              </div>
            </div>
          </div>
        </FloatingElement>
      </div>
    </div>
  );
};

export default HeroSection;
