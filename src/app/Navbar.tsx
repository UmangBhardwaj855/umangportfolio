"use client";

import { FC, ReactNode, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Custom link component with animations
const CustomLink: FC<{
  href: string;
  title: string;
  className?: string;
}> = ({ href, title, className = '' }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-purple-600 absolute left-0 -bottom-0.5 
        ${isActive ? 'w-full' : 'w-0'} 
        group-hover:w-full transition-[width] ease duration-300`}
      />
    </Link>
  );
};

// Mobile link component
const CustomMobileLink: FC<{
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}> = ({ href, title, className = '', toggle }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} relative group text-white my-2`}
      onClick={toggle}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-white absolute left-0 -bottom-0.5 
        ${isActive ? 'w-full' : 'w-0'} 
        group-hover:w-full transition-[width] ease duration-300`}
      />
    </Link>
  );
};

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`w-full px-32 py-4 font-bold text-lg flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8 ${className} bg-black/90 backdrop-blur-xl border-b-2 border-gradient-to-r from-blue-400 via-purple-500 to-green-400`}
    >
      {/* Charismatic Professional Identity */}
      <div className="flex items-center space-x-8">
        <motion.div
          className="flex items-center space-x-4"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 5px rgba(64,255,64,0.8)',
                '0 0 15px rgba(64,255,255,0.8)',
                '0 0 5px rgba(64,255,64,0.8)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <div className="text-sm">
            <motion.div 
              className="text-green-400 font-black text-xs tracking-widest"
              animate={{ opacity: [0.7, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🔥 LEGENDARY STATUS
            </motion.div>
            <div className="text-gray-300 text-xs font-semibold">Elite Developer Available Now</div>
          </div>
        </motion.div>
        
        {/* Umang's Power Stats */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <div className="text-blue-400 font-black text-lg">3+</div>
            <div className="text-gray-300 text-xs font-semibold">Years Mastery</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <div className="text-purple-400 font-black text-lg">15+</div>
            <div className="text-gray-300 text-xs font-semibold">Certifications</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <div className="text-yellow-400 font-black text-lg">TOP 1%</div>
            <div className="text-gray-300 text-xs font-semibold">Global Rank</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <div className="text-green-400 font-black text-lg">10M+</div>
            <div className="text-gray-300 text-xs font-semibold">Transactions</div>
          </motion.div>
        </div>
      </div>

      {/* Umang's Direct Contact - More Appealing */}
      <div className="hidden lg:flex items-center space-x-4 text-sm">
        <motion.a
          href="mailto:umangbhardwaj855@gmail.com"
          className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-2 border-blue-400/50 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            �
          </motion.span>
          <span className="text-blue-400 font-bold group-hover:text-white transition-colors">Let&apos;s Connect</span>
        </motion.a>
        
        <motion.div
          className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-600/30 to-blue-600/30 border-2 border-green-400/50 rounded-xl group"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            �
          </motion.span>
          <span className="text-green-400 font-bold group-hover:text-white transition-colors">+91 9370403372</span>
        </motion.div>
        
        <motion.div
          className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-400/50 rounded-xl"
          animate={{ 
            boxShadow: [
              '0 0 10px rgba(147,51,234,0.3)',
              '0 0 20px rgba(147,51,234,0.6)',
              '0 0 10px rgba(147,51,234,0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span>⚡</span>
          <span className="text-purple-400 font-bold">Instant Hire Ready</span>
        </motion.div>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>

      {/* Desktop Menu */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/experience" title="Experience" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/UmangBhardwaj855"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://in.linkedin.com/in/umang-bhardwaj-771132216"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </motion.a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-gradient-to-br from-blue-600 to-purple-800 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            <CustomMobileLink href="/experience" title="Experience" toggle={handleClick} />
            <CustomMobileLink href="/contact" title="Contact" toggle={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-8">
            <motion.a
              href="https://github.com/UmangBhardwaj855"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fill-white">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://in.linkedin.com/in/umang-bhardwaj-771132216"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-white">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
