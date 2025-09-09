"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../animations/AnimatedText';

interface AboutSectionProps {
  className?: string;
}

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill: FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 shadow-lg absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const AboutSection: FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${className}`}>
      <AnimatedText
        text="Passion Fuels Purpose!"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />

      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        {/* Text content */}
        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me</h2>
          <p className="font-medium">
            Hi, I&apos;m Umang Bhardwaj, a web developer and software engineer with a passion for creating beautiful, functional,
            and user-centered digital experiences. With over 5 years of experience in the field, I am always looking for
            new and innovative ways to bring my clients&apos; visions to life.
          </p>
          <p className="my-4 font-medium">
            I believe that design is about more than just making things look pretty – it&apos;s about solving problems and
            creating intuitive, enjoyable experiences for users.
          </p>
          <p className="font-medium">
            Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design
            excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
          </p>
        </div>

        {/* Animation Container */}
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

          <div className="w-full h-[60vh] relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 overflow-hidden">
            {/* Skills */}
            <motion.div className="flex items-center justify-center rounded-full font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Web
            </motion.div>

            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="HTML" x="5vw" y="-10vw" />
            <Skill name="JavaScript" x="0vw" y="-20vw" />
            <Skill name="TypeScript" x="0vw" y="10vw" />
            <Skill name="React" x="-20vw" y="0vw" />
            <Skill name="Next.js" x="15vw" y="0vw" />
            <Skill name="Node.js" x="20vw" y="10vw" />
            <Skill name="Tailwind CSS" x="-20vw" y="15vw" />
            <Skill name="MongoDB" x="15vw" y="-15vw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
