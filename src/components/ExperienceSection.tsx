// src/components/ExperienceSection.tsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'JUN - JUL 2026',
    title: 'WEB DEVELOPMENT INTERN',
    organization: 'SYSSLAN IT SOLUTIONS',
    description:
      'Built and deployed a fully responsive e-commerce website from scratch using HTML5, CSS3, and JavaScript. Implemented product cards, category filtering, real-time search, shopping cart functionality, local storage persistence, checkout workflow, and form validation.',
  },
  {
    id: '02',
    year: 'APR - MAY 2026',
    title: 'DATA SCIENCE INTERN',
    organization: 'COGNIFYZ IT SOLUTIONS',
    description:
      'Performed end-to-end data analysis on a restaurant dataset using Python, Pandas, and Matplotlib. Worked on data exploration, preprocessing, feature engineering, descriptive analysis, and geospatial visualization to generate actionable insights.',
  },
  {
    id: '03',
    year: 'PROJECT VEGA 26',
    title: 'UI / UX DEVELOPER',
    organization: 'MEDICAL ASSISTANT WEBSITE',
    description:
      'Contributed to the UI/UX design of a medical records management web application focused on secure data handling, accessibility, and a clean user experience.',
  },
  {
    id: '04',
    year: '2025 - 2029',
    title: 'B.E. COMPUTER SCIENCE & ENGINEERING',
    organization:
      'SCSVMV — AI & DATA SCIENCE',
    description:
      'Pursuing B.E. in Computer Science & Engineering with specialization in Artificial Intelligence & Data Science. Current CGPA: 8.95/10. Expected graduation: May 2029.',
  },
  {
    id: '05',
    year: 'CERTIFICATIONS',
    title: 'TECHNICAL LEARNING',
    organization: 'PYTHON • C • AI',
    description:
      'Completed Cisco Python Essentials 1, Honours Diploma in Computer Applications (HDCA), C Training from IIT Bombay with 97.5%, and Python 3.4.3 certification from IIT Bombay with 90%. Also participated in AI-focused workshops including Klizer AI and Freedom with AI.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full">

          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">

            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                }}
                className="relative flex flex-col md:flex-row items-start group"
              >

                {/* Desktop Year */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">

                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />

                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />

                </div>

                {/* Content */}
                <div className="ml-14 md:ml-12 pl-2">

                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                  >
                    {stop.title}
                  </h3>

                  {/* Organization */}
                  <span
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {stop.organization}
                  </span>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {stop.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;