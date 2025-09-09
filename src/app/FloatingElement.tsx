"use client";

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

const FloatingElement: FC<FloatingElementProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 4,
  distance = 15,
}) => {
  const floatingAnimation = {
    y: [-distance/2, distance/2],
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration,
      ease: "easeInOut" as const,
      delay,
    },
  };

  return (
    <motion.div
      className={className}
      animate={floatingAnimation}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
