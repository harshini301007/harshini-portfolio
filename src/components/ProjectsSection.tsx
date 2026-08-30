import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Netrik',
    category: 'CURRENT / AI DOCUMENT INTELLIGENCE',
    description:
      'An agentic trust intelligence platform designed to automate document verification, information extraction, risk assessment, and intelligent decision-making. The system combines OCR, structured extraction, RAG-based enrichment, and AI agents into an intelligent document processing pipeline.',
    githubUrl: 'https://github.com/harshini301007',
    tech: [
      'Python',
      'PyMuPDF',
      'Tesseract OCR',
      'Sentence Transformers',
      'ChromaDB',
      'RAG',
      'AI Agents',
      'Pydantic',
    ],
    metrics: [
      { label: 'STATUS', value: 'CURRENT PROJECT' },
      { label: 'PIPELINE', value: 'Document → Intelligence' },
      { label: 'RETRIEVAL', value: 'RAG + ChromaDB' },
    ],
  },

  {
    number: '02',
    title: 'DineIQ',
    category: 'CURRENT / AI RESTAURANT PLATFORM',
    description:
      'An AI-powered restaurant recommendation and management platform that helps users discover suitable restaurants while providing restaurant-side tools for menu management, orders, reservations, reviews, and analytics.',
    githubUrl: 'https://github.com/harshini301007',
    tech: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'Supabase',
      'PostgreSQL',
      'REST APIs',
      'AI',
    ],
    metrics: [
      { label: 'STATUS', value: 'CURRENT PROJECT' },
      { label: 'PLATFORM', value: 'Web Application' },
      { label: 'BACKEND', value: 'Node + Express' },
    ],
  },

  {
    number: '03',
    title: 'ShopEase',
    category: 'WEB DEVELOPMENT / E-COMMERCE',
    description:
      'A fully responsive e-commerce website built using HTML5, CSS3, and JavaScript. Implemented product cards, category filtering, real-time search, shopping cart management, local storage persistence, checkout workflow, and form validation.',
    githubUrl: 'https://github.com/harshini301007',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript ES6',
      'DOM Manipulation',
      'Local Storage',
      'Responsive Design',
    ],
    metrics: [
      { label: 'TYPE', value: 'E-COMMERCE' },
      { label: 'FOCUS', value: 'RESPONSIVE UI' },
      { label: 'CORE', value: 'JAVASCRIPT' },
    ],
  },

  {
    number: '04',
    title: 'Student Dashboard',
    category: 'PYTHON / DATA APPLICATION',
    description:
      'An interactive academic performance tracker built with Python and Streamlit. The project focuses on presenting student academic information through a simple and interactive dashboard interface.',
    githubUrl: 'https://github.com/harshini301007',
    tech: [
      'Python',
      'Streamlit',
      'Data Analysis',
      'Data Visualization',
      'Dashboard',
    ],
    metrics: [
      { label: 'TYPE', value: 'DASHBOARD' },
      { label: 'LANGUAGE', value: 'PYTHON' },
      { label: 'FRAMEWORK', value: 'STREAMLIT' },
    ],
  },

  {
    number: '05',
    title: 'Medical Assistant',
    category: 'UI/UX / PROJECT VEGA’26',
    description:
      'A medical assistant website developed as part of Project Vega’26, with a focus on creating a clean, intuitive, and user-friendly interface for a healthcare-oriented digital experience.',
    githubUrl: 'https://github.com/harshini301007',
    tech: [
      'UI/UX',
      'Web Design',
      'Frontend',
      'Responsive Design',
      'Project Vega’26',
    ],
    metrics: [
      { label: 'TYPE', value: 'WEB INTERFACE' },
      { label: 'FOCUS', value: 'UI / UX' },
      { label: 'EVENT', value: 'PROJECT VEGA’26' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore selected projects where I apply web development, AI,
            data analysis, and problem-solving to build practical digital
            solutions.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
  itemDistance={40}
  itemScale={0.04}
  itemStackDistance={35}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.85}
  rotationAmount={0}
  blurAmount={0}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>

              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between">

                    <div>

                      {/* Number + Category */}
                      <div className="flex items-center space-x-3 mb-4">

                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>

                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>

                      </div>

                      {/* Project Title */}
                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>

                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">

                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {tech}
                        </span>
                      ))}

                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">

                    {/* Project Metrics */}
                    <div className="space-y-3">

                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // PROJECT DETAILS
                      </span>

                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {metric.label}
                          </span>

                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {metric.value}
                          </span>
                        </div>
                      ))}

                    </div>

                    {/* GitHub Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>

                  </div>
                </div>
              </div>

            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;