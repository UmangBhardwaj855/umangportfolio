"use client";

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
  download?: boolean;
  external?: boolean;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  href,
  className = '',
  children,
  download = false,
  external = false,
}) => {
  const buttonVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  const LinkComponent = ({ className = '', children }: { className?: string; children: ReactNode }) => {
    if (external) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          download={download}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      className="inline-block"
    >
      <LinkComponent
        className={`py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      >
        {children}
      </LinkComponent>
    </motion.div>
  );
};

export default AnimatedButton;
