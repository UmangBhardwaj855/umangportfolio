"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../animations/AnimatedText';

interface ExperienceItemProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ position, company, companyLink, time, address, work }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-start justify-between mb-12 last:mb-0"
    >
      <h3 className="text-2xl font-bold capitalize">{position}</h3>
      <div className="flex flex-wrap w-full justify-between my-2">
        <a href={companyLink} target="_blank" className="text-primary font-bold hover:underline">
          @{company}
        </a>
        <span className="text-gray-500 dark:text-gray-400">
          {time} | {address}
        </span>
      </div>
      <p className="font-medium w-full">{work}</p>
    </motion.div>
  );
};

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ className = '' }) => {
  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center ${className}`}>
      <AnimatedText
        text="Professional Experience"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />

      <div className="w-full max-w-5xl mx-auto">
        <div className="relative w-full h-full">
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500
            transform -translate-x-1/2 md:hidden"></div>

          <div className="w-full grid grid-cols-9 gap-16 md:grid-cols-1 md:gap-8">
            <div className="col-span-6 md:col-span-1 relative pl-16 md:pl-0">
              {/* Experience Timeline - Left side (PC) / Full width (mobile) */}
              <div className="w-full flex flex-col items-start justify-between md:items-center">
                <ExperienceItem
                  position="Software Engineer"
                  company="Google"
                  companyLink="https://www.google.com"
                  time="2022-Present"
                  address="Mountain View, CA"
                  work="Working on a team responsible for developing new features for Google&apos;s search engine, including improving the accuracy and relevance of search results."
                />

                <ExperienceItem
                  position="Frontend Developer"
                  company="Facebook"
                  companyLink="https://www.facebook.com"
                  time="2020-2022"
                  address="Menlo Park, CA"
                  work="Worked on a team responsible for developing the Facebook website, implementing new features and optimizing existing ones for performance."
                />

                <ExperienceItem
                  position="Software Engineer Intern"
                  company="Amazon"
                  companyLink="https://www.amazon.com"
                  time="2019-2020"
                  address="Seattle, WA"
                  work="Worked on a team responsible for developing Amazon&apos;s mobile app, implementing new features and fixing bugs."
                />
              </div>
            </div>

            {/* Education Timeline - Right side (PC only) */}
            <div className="col-span-3 md:hidden relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500
                transform -translate-x-1/2"></div>

              <div className="w-full flex flex-col items-start justify-between">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  viewport={{ once: true }}
                  className="w-full flex flex-col items-start justify-between mb-12"
                >
                  <h3 className="text-2xl font-bold">Master of Science in Computer Science</h3>
                  <div className="flex flex-wrap w-full justify-between my-2">
                    <a href="#" target="_blank" className="text-primary font-bold hover:underline">
                      @Stanford University
                    </a>
                    <span className="text-gray-500 dark:text-gray-400">2018-2020</span>
                  </div>
                  <p className="font-medium w-full">Completed a master&apos;s project on deep learning with a focus on computer vision and graduated with a 4.0 GPA.</p>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full flex flex-col items-start justify-between"
                >
                  <h3 className="text-2xl font-bold">Bachelor of Science in Computer Engineering</h3>
                  <div className="flex flex-wrap w-full justify-between my-2">
                    <a href="#" target="_blank" className="text-primary font-bold hover:underline">
                      @MIT
                    </a>
                    <span className="text-gray-500 dark:text-gray-400">2014-2018</span>
                  </div>
                  <p className="font-medium w-full">Completed a bachelor&apos;s degree in Computer Engineering with a minor in Mathematics and graduated with honors.</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Education Timeline - Mobile only */}
          <div className="hidden md:block mt-16">
            <AnimatedText
              text="Education"
              className="mb-8 !text-4xl"
            />
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-start justify-between mb-12"
            >
              <h3 className="text-2xl font-bold">Master of Science in Computer Science</h3>
              <div className="flex flex-wrap w-full justify-between my-2">
                <a href="#" target="_blank" className="text-primary font-bold hover:underline">
                  @Stanford University
                </a>
                <span className="text-gray-500 dark:text-gray-400">2018-2020</span>
              </div>
              <p className="font-medium w-full">Completed a master&apos;s project on deep learning with a focus on computer vision and graduated with a 4.0 GPA.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-start justify-between"
            >
              <h3 className="text-2xl font-bold">Bachelor of Science in Computer Engineering</h3>
              <div className="flex flex-wrap w-full justify-between my-2">
                <a href="#" target="_blank" className="text-primary font-bold hover:underline">
                  @MIT
                </a>
                <span className="text-gray-500 dark:text-gray-400">2014-2018</span>
              </div>
              <p className="font-medium w-full">Completed a bachelor&apos;s degree in Computer Engineering with a minor in Mathematics and graduated with honors.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
