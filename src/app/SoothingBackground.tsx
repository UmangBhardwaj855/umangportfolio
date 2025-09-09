'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SoothingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for air effect - floating particles with gentle movement
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
      color: string;
    }> = [];

    // Create diverse air particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.6 + 0.2,
        size: Math.random() * 4 + 1,
        color: ['#E0F7FF', '#F0F9FF', '#EFF6FF', '#F0F4FF'][Math.floor(Math.random() * 4)]
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating particles with breathing effect
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add subtle breathing movement
        const breathe = Math.sin(Date.now() * 0.002 + index * 0.1) * 0.5;
        particle.vy += breathe * 0.01;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.save();
        ctx.globalAlpha = particle.opacity * (0.8 + breathe * 0.2);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Beautiful balloon animations with varied colors and movements
  const balloons = [
    { color: 'bg-gradient-to-b from-pink-300 to-pink-400', delay: 0, duration: 15 },
    { color: 'bg-gradient-to-b from-blue-300 to-blue-400', delay: 2, duration: 18 },
    { color: 'bg-gradient-to-b from-yellow-300 to-yellow-400', delay: 4, duration: 16 },
    { color: 'bg-gradient-to-b from-green-300 to-green-400', delay: 1, duration: 19 },
    { color: 'bg-gradient-to-b from-purple-300 to-purple-400', delay: 3, duration: 14 },
    { color: 'bg-gradient-to-b from-red-300 to-red-400', delay: 5, duration: 17 },
    { color: 'bg-gradient-to-b from-orange-300 to-orange-400', delay: 6, duration: 20 }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Multi-layer Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 via-indigo-50 to-purple-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-50/30 to-transparent" />
      
      {/* Canvas for floating air particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Animated Balloons floating upward */}
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className={`absolute w-10 h-14 ${balloon.color} rounded-full shadow-xl`}
          style={{
            left: `${5 + (index * 13)}%`,
            top: '110%'
          }}
          animate={{
            y: [0, -800],
            x: [0, Math.sin(index * 0.7) * 120],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Balloon highlight */}
          <div className="absolute top-2 left-2 w-3 h-4 bg-white bg-opacity-40 rounded-full" />
          {/* Balloon string */}
          <motion.div
            className="absolute top-full left-1/2 w-0.5 h-24 bg-gray-600 transform -translate-x-1/2"
            animate={{
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}

      {/* Animated Ocean Waves at bottom with multiple layers */}
      <div className="absolute bottom-0 w-full">
        {/* Back wave layer */}
        <svg
          className="absolute bottom-0 w-full h-40 opacity-60"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z"
            fill="url(#oceanGradient1)"
            animate={{
              d: [
                "M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z",
                "M0,60 Q200,100 400,60 T800,60 T1200,60 L1200,120 L0,120 Z",
                "M0,80 Q200,40 400,80 T800,80 T1200,80 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Front wave layer */}
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="url(#oceanGradient2)"
            animate={{
              d: [
                "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
                "M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z",
                "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="oceanGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="oceanGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BFDBFE" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.7} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Clouds with varied sizes */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`cloud-${index}`}
          className="absolute opacity-80"
          style={{
            top: `${10 + index * 12}%`,
            left: '-15%'
          }}
          animate={{
            x: ['0vw', '115vw']
          }}
          transition={{
            duration: 25 + index * 8,
            repeat: Infinity,
            ease: "linear",
            delay: index * 6
          }}
        >
          <div className={`${index % 2 === 0 ? 'w-24 h-14' : 'w-28 h-16'} bg-white bg-opacity-70 rounded-full relative shadow-lg`}>
            <div className="absolute -left-5 top-3 w-14 h-9 bg-white bg-opacity-70 rounded-full" />
            <div className="absolute -right-5 top-2 w-18 h-11 bg-white bg-opacity-70 rounded-full" />
            <div className="absolute left-3 -top-3 w-16 h-9 bg-white bg-opacity-70 rounded-full" />
          </div>
        </motion.div>
      ))}

      {/* Running People Silhouettes with more detailed animation */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`person-${index}`}
          className="absolute bottom-36"
          style={{
            left: '-8%'
          }}
          animate={{
            x: ['0vw', '108vw']
          }}
          transition={{
            duration: 10 + index * 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 4
          }}
        >
          {/* Detailed running person silhouette */}
          <motion.div
            className="w-10 h-20 relative"
            animate={{
              scaleX: [1, 0.95, 1],
              y: [0, -6, 0]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Head */}
            <div className="w-4 h-4 bg-gradient-to-br from-indigo-400 to-indigo-500 bg-opacity-80 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-sm" />
            {/* Body */}
            <div className="w-3 h-10 bg-gradient-to-b from-indigo-400 to-indigo-500 bg-opacity-80 absolute top-4 left-1/2 transform -translate-x-1/2 rounded-sm" />
            {/* Arms */}
            <motion.div
              className="w-1.5 h-6 bg-gradient-to-b from-indigo-400 to-indigo-500 bg-opacity-80 absolute top-5 left-0.5 rounded-full origin-top"
              animate={{
                rotate: [0, 50, 0, -50, 0]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-1.5 h-6 bg-gradient-to-b from-indigo-400 to-indigo-500 bg-opacity-80 absolute top-5 right-0.5 rounded-full origin-top"
              animate={{
                rotate: [0, -50, 0, 50, 0]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Legs */}
            <motion.div
              className="w-1.5 h-7 bg-gradient-to-b from-indigo-400 to-indigo-500 bg-opacity-80 absolute bottom-0 left-2 rounded-full origin-top"
              animate={{
                rotate: [0, 35, 0, -35, 0]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-1.5 h-7 bg-gradient-to-b from-indigo-400 to-indigo-500 bg-opacity-80 absolute bottom-0 right-2 rounded-full origin-top"
              animate={{
                rotate: [0, -35, 0, 35, 0]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-50/40 to-transparent opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-50/20 via-transparent to-pink-50/20 opacity-50" />
      
      {/* Dynamic Moving Gradient Overlay for depth */}
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 40% 90%, rgba(236, 72, 153, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 90% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
