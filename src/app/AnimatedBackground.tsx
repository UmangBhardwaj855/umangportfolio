"use client";

import { FC, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Animated sphere component
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere args={[1, 100, 100]} ref={meshRef}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </motion.div>
  );
};

export default AnimatedBackground;
