import { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import ParticleBackground from '@/components/animations/ParticleBackground';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'About | Umang Bhardwaj',
  description: 'Learn more about Umang Bhardwaj - Web Developer and Software Engineer',
};

export default function About() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ParticleBackground />
      </Suspense>
      
      <div className="w-full px-32 py-16 z-10 relative lg:px-16 md:px-12 sm:px-8">
        <AboutSection />
      </div>
    </>
  );
}
