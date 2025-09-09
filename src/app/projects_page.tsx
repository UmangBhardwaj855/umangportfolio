import { Metadata } from 'next';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ParticleBackground from '@/components/animations/ParticleBackground';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Projects | Umang Bhardwaj',
  description: 'Explore projects by Umang Bhardwaj - Web Developer and Software Engineer',
};

export default function Projects() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ParticleBackground />
      </Suspense>
      
      <div className="w-full px-32 py-16 z-10 relative lg:px-16 md:px-12 sm:px-8">
        <ProjectsSection />
      </div>
    </>
  );
}
