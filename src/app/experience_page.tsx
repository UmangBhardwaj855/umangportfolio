import { Metadata } from 'next';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ParticleBackground from '@/components/animations/ParticleBackground';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Experience | Umang Bhardwaj',
  description: 'Professional experience of Umang Bhardwaj - Web Developer and Software Engineer',
};

export default function Experience() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ParticleBackground />
      </Suspense>
      
      <div className="w-full px-32 py-16 z-10 relative lg:px-16 md:px-12 sm:px-8">
        <ExperienceSection />
      </div>
    </>
  );
}
