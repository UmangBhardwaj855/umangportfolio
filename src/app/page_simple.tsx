'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [hulkMode, setHulkMode] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          {/* Main Title */}
          <motion.h1 
            className="text-7xl md:text-9xl font-black mb-6 text-blue-400 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            UMANG BHARDWAJ
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-5xl text-white font-bold tracking-wide mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            DIGITAL TRANSFORMATION WIZARD
          </motion.h2>
          
          <motion.div
            className="text-xl md:text-2xl text-gray-300 font-medium tracking-wider mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            ⚡ Transforming Ideas into Digital Reality
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">3+</div>
              <div className="text-white font-semibold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">10M+</div>
              <div className="text-white font-semibold">Daily Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">99.9%</div>
              <div className="text-white font-semibold">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-2">15+</div>
              <div className="text-white font-semibold">Certifications</div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">⚡ TECH STACK</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="p-4 rounded-lg bg-blue-900/30 border border-blue-400/30">
                <div className="font-bold text-blue-400 text-lg mb-2">Backend</div>
                <div className="text-white text-sm">Java • Spring Boot • Node.js</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-900/30 border border-blue-400/30">
                <div className="font-bold text-blue-400 text-lg mb-2">Frontend</div>
                <div className="text-white text-sm">React • Angular • Next.js</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-900/30 border border-blue-400/30">
                <div className="font-bold text-blue-400 text-lg mb-2">Cloud</div>
                <div className="text-white text-sm">AWS • GCP • Azure</div>
              </div>
              <div className="p-4 rounded-lg bg-blue-900/30 border border-blue-400/30">
                <div className="font-bold text-blue-400 text-lg mb-2">Database</div>
                <div className="text-white text-sm">PostgreSQL • MongoDB</div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="text-2xl font-bold mb-4 text-blue-400">🚀 READY FOR YOUR NEXT PROJECT</div>
            <div className="text-white text-lg mb-4">
              📧 umangbhardwaj855@gmail.com | 📱 +91 9370403372
            </div>
            <div className="text-gray-400">Delhi, India • Available for Remote/Hybrid/Onsite</div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
