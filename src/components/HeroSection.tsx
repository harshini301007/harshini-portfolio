import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GITHUB',
    href: 'https://github.com/harshini301007',
  },
  {
    name: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/harshini-poornachandran',
  },
];

/* =========================================================
   CINEMATIC AI / TECH BACKGROUND
========================================================= */

const techSymbols = [
  {
    text: '</>',
    x: '73%',
    y: '19%',
    size: '1.3rem',
    delay: 0,
    duration: 7,
  },
  {
    text: 'AI',
    x: '87%',
    y: '30%',
    size: '1rem',
    delay: 1.5,
    duration: 8,
  },
  {
    text: '{}',
    x: '68%',
    y: '39%',
    size: '1.1rem',
    delay: 2,
    duration: 9,
  },
  {
    text: '01',
    x: '92%',
    y: '52%',
    size: '0.8rem',
    delay: 0.8,
    duration: 6,
  },
  {
    text: 'ML',
    x: '78%',
    y: '68%',
    size: '0.9rem',
    delay: 2.5,
    duration: 8,
  },
  {
    text: 'DB',
    x: '88%',
    y: '77%',
    size: '0.75rem',
    delay: 1,
    duration: 7,
  },
  {
    text: '01',
    x: '61%',
    y: '78%',
    size: '0.65rem',
    delay: 3,
    duration: 9,
  },
];

const codeFragments = [
  {
    text: 'const intelligence = build();',
    x: '67%',
    y: '25%',
    rotate: -4,
    delay: 0,
  },
  {
    text: 'RAG → RETRIEVE → REASON',
    x: '75%',
    y: '48%',
    rotate: 3,
    delay: 1.8,
  },
  {
    text: 'AI_SYSTEM // ONLINE',
    x: '65%',
    y: '63%',
    rotate: -2,
    delay: 0.8,
  },
  {
    text: 'npm run build',
    x: '84%',
    y: '84%',
    rotate: 4,
    delay: 2.4,
  },
];

const particles = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: `${45 + Math.random() * 52}%`,
  top: `${5 + Math.random() * 90}%`,
  size: Math.random() > 0.8 ? 3 : 1.5,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 7,
}));

/* =========================================================
   HERO SECTION
========================================================= */

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({
    x: -100,
    y: -100,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className="
        relative
        w-screen
        h-screen
        overflow-hidden
        bg-black
        text-[#E8DFD8]
        font-sans
        selection:bg-[#cbb59d]
        selection:text-black
        cursor-none
      "
    >

      {/* =====================================================
          1. CINEMATIC AI BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Base black atmosphere */}
        <div className="absolute inset-0 bg-black" />

        {/* Large bronze cinematic glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[-10%]
            top-[5%]
            w-[60vw]
            h-[80vh]
            rounded-full
            bg-[#8C6D4F]/10
            blur-[150px]
          "
        />

        {/* Gold core glow */}
        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[8%]
            top-[22%]
            w-[32vw]
            h-[48vh]
            rounded-full
            bg-[#D4AF37]/10
            blur-[120px]
          "
        />

        {/* Left darkness for readability */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/95
            via-[58%]
            to-black/35
          "
        />

        {/* Top cinematic vignette */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/75
            via-transparent
            to-black/80
          "
        />

        {/* =================================================
            TECH GRID
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.16]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage:
              'linear-gradient(to right, transparent 20%, black 55%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 20%, black 55%, transparent 100%)',
          }}
        />

        {/* Smaller data grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(232,223,216,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,223,216,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            maskImage:
              'radial-gradient(circle at 78% 50%, black, transparent 55%)',
            WebkitMaskImage:
              'radial-gradient(circle at 78% 50%, black, transparent 55%)',
          }}
        />

        {/* =================================================
            CIRCUIT LINES
        ================================================= */}

        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          {/* Main horizontal circuits */}

          <motion.path
            d="M760 180 H980 L1040 240 H1390"
            fill="none"
            stroke="rgba(212,175,55,0.28)"
            strokeWidth="1"
            strokeDasharray="5 10"
            animate={{
              strokeDashoffset: [0, -100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.path
            d="M820 320 H940 L1000 380 H1510"
            fill="none"
            stroke="rgba(201,158,93,0.25)"
            strokeWidth="1"
            strokeDasharray="3 12"
            animate={{
              strokeDashoffset: [0, -120],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.path
            d="M700 510 H900 L960 450 H1280"
            fill="none"
            stroke="rgba(212,175,55,0.22)"
            strokeWidth="1"
            strokeDasharray="4 9"
            animate={{
              strokeDashoffset: [0, -90],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.path
            d="M850 670 H1060 L1130 600 H1480"
            fill="none"
            stroke="rgba(140,109,79,0.35)"
            strokeWidth="1"
            strokeDasharray="6 12"
            animate={{
              strokeDashoffset: [0, -110],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Vertical circuit */}

          <motion.path
            d="M1080 80 V190 L1150 260 V430"
            fill="none"
            stroke="rgba(212,175,55,0.2)"
            strokeWidth="1"
            strokeDasharray="4 10"
            animate={{
              strokeDashoffset: [0, 100],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.path
            d="M1330 200 V330 L1260 400 V700"
            fill="none"
            stroke="rgba(212,175,55,0.18)"
            strokeWidth="1"
            strokeDasharray="3 11"
            animate={{
              strokeDashoffset: [0, 120],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </svg>

        {/* =================================================
            DATA NODES
        ================================================= */}

        {[
          ['67%', '20%'],
          ['82%', '27%'],
          ['91%', '36%'],
          ['72%', '43%'],
          ['84%', '56%'],
          ['65%', '61%'],
          ['90%', '70%'],
          ['76%', '82%'],
        ].map(([left, top], index) => (
          <motion.div
            key={`${left}-${top}`}
            className="absolute"
            style={{
              left,
              top,
            }}
            animate={{
              opacity: [0.25, 0.9, 0.25],
              scale: [0.8, 1.15, 0.8],
            }}
            transition={{
              duration: 2.5 + index * 0.35,
              repeat: Infinity,
              delay: index * 0.4,
              ease: 'easeInOut',
            }}
          >
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37] blur-[4px]" />
              <div className="relative w-2 h-2 rounded-full border border-[#D4AF37]/80 bg-[#D4AF37]/30" />
            </div>
          </motion.div>
        ))}

        {/* =================================================
            FLOATING TECH SYMBOLS
        ================================================= */}

        {techSymbols.map((symbol) => (
          <motion.div
            key={`${symbol.text}-${symbol.x}-${symbol.y}`}
            className="
              absolute
              font-mono
              text-[#D4AF37]/25
              select-none
            "
            style={{
              left: symbol.x,
              top: symbol.y,
              fontSize: symbol.size,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.12, 0.38, 0.12],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: symbol.duration,
              repeat: Infinity,
              delay: symbol.delay,
              ease: 'easeInOut',
            }}
          >
            {symbol.text}
          </motion.div>
        ))}

        {/* =================================================
            CODE FRAGMENTS
        ================================================= */}

        {codeFragments.map((code) => (
          <motion.div
            key={code.text}
            className="
              absolute
              hidden
              md:block
              font-mono
              text-[8px]
              tracking-[0.18em]
              text-[#C99E5D]/20
              whitespace-nowrap
            "
            style={{
              left: code.x,
              top: code.y,
              rotate: `${code.rotate}deg`,
            }}
            animate={{
              x: [-8, 8, -8],
              opacity: [0.05, 0.25, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: code.delay,
              ease: 'easeInOut',
            }}
          >
            {code.text}
          </motion.div>
        ))}

        {/* =================================================
            FLOATING PARTICLES
        ================================================= */}

        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="
              absolute
              rounded-full
              bg-[#D4AF37]
            "
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: '0 0 8px rgba(212,175,55,0.45)',
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0, 0.55, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* =================================================
            CINEMATIC HORIZONTAL LIGHT
        ================================================= */}

        <motion.div
          animate={{
            x: ['-20%', '120%'],
            opacity: [0, 0.18, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 4,
          }}
          className="
            absolute
            top-[32%]
            left-0
            w-[45%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
            blur-[1px]
          "
        />

        {/* Bottom technical glow */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-[70%]
            h-[25%]
            bg-gradient-to-t
            from-[#8C6D4F]/8
            to-transparent
            blur-[40px]
          "
        />

      </div>

      {/* =====================================================
          2. CUSTOM CURSOR
      ===================================================== */}

      {cursorPos.x >= 0 && (
        <motion.div
          className="
            fixed
            top-0
            left-0
            pointer-events-none
            z-50
            rounded-full
            border
            border-[#D4AF37]/40
            flex
            items-center
            justify-center
            backdrop-blur-[1px]
          "
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered
              ? 'rgba(212,175,55,0.1)'
              : 'rgba(235,215,195,0.95)',
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 350,
            mass: 0.5,
          }}
        />
      )}

      {/* =====================================================
          3. WATERMARK
      ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          right-6
          lg:bottom-10
          lg:right-12
          pointer-events-none
          flex
          items-center
          justify-center
          z-10
        "
      >
        <div className="relative flex items-center justify-center">

          <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />

          <motion.div
            animate={{
              y: [-3, 3, -3],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex items-center justify-center"
          >
            <img
              src={watermarkImg}
              alt="Insignia"
              className="
                w-28
                h-28
                lg:w-32
                lg:h-32
                object-contain
                drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]
              "
            />
          </motion.div>

        </div>
      </div>

      {/* =====================================================
          4. MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-between
          h-full
          w-full
          px-6
          sm:px-12
          lg:px-16
          pt-6
          pb-8
          pointer-events-none
        "
      >

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <header
          className="
            relative
            grid
            grid-cols-[auto_1fr_auto]
            items-center
            w-full
            pointer-events-auto
            gap-4
          "
        >

          {/* Logo */}

          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              text-xs
              sm:text-sm
              font-semibold
              tracking-[0.35em]
              uppercase
              text-[#EAD8C7]
              hover:opacity-75
              transition-opacity
              whitespace-nowrap
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            HARSHINI P.
          </a>

          {/* Navigation */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              space-x-6
              xl:space-x-8
              text-[10px]
              xl:text-[11px]
              tracking-[0.22em]
              xl:tracking-[0.28em]
              font-light
              uppercase
              text-[#C4B5A5]
              absolute
              left-1/2
              -translate-x-1/2
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="
                  relative
                  group
                  py-1
                  transition-colors
                  duration-300
                  hover:text-[#FFF5EB]
                  whitespace-nowrap
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[1px]
                    bg-[#D4AF37]/50
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            <span className="w-px h-4 bg-[#8C6D4F]/40 mx-1" />

            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="
                  relative
                  group
                  py-1
                  transition-colors
                  duration-300
                  hover:text-[#F7E7C4]
                  whitespace-nowrap
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[1px]
                    bg-[#D4AF37]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

          </nav>

          {/* Right Actions */}

          <div className="flex items-center justify-end gap-2">

            <a
              href="https://github.com/harshini301007"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                hidden
                xl:flex
                items-center
                space-x-1.5
                text-[9px]
                tracking-[0.16em]
                font-light
                uppercase
                py-2
                px-2.5
                border
                border-[#8C6D4F]/40
                hover:border-[#D4AF37]
                text-[#C4B5A5]
                hover:text-[#F7E7C4]
                transition-all
                duration-300
                whitespace-nowrap
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span>GITHUB</span>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/harshini-poornachandran"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                hidden
                xl:flex
                items-center
                space-x-1.5
                text-[9px]
                tracking-[0.16em]
                font-light
                uppercase
                py-2
                px-2.5
                border
                border-[#8C6D4F]/40
                hover:border-[#D4AF37]
                text-[#C4B5A5]
                hover:text-[#F7E7C4]
                transition-all
                duration-300
                whitespace-nowrap
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span>LINKEDIN</span>
              <span>↗</span>
            </a>

            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                group
                flex
                items-center
                space-x-2
                text-[10px]
                lg:text-[11px]
                tracking-[0.20em]
                lg:tracking-[0.24em]
                font-light
                uppercase
                py-2
                px-3
                lg:px-4
                border
                border-[#8C6D4F]/50
                hover:border-[#D4AF37]
                text-[#EAD8C7]
                transition-all
                duration-300
                backdrop-blur-sm
                whitespace-nowrap
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span>LET&apos;S TALK</span>

              <span
                className="
                  transform
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  text-xs
                "
              >
                ↗
              </span>
            </a>

          </div>
        </header>

        {/* =================================================
            MAIN HERO
        ================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            w-full
            pt-4
            pb-2
            my-auto
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              max-w-sm
              sm:max-w-md
              md:max-w-lg
              lg:max-w-[37rem]
              xl:max-w-[40rem]
              pointer-events-auto
              z-20
            "
          >

            {/* Main Headline */}

            <motion.div
              variants={fadeUpVariants}
              className="
                relative
                mb-3.5
                select-none
              "
            >

              <h1
                className="
                  text-6xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[7.2rem]
                  xl:text-[7.8rem]
                  tracking-tight
                  uppercase
                  leading-[0.83]
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#FFFFFF]
                    via-[#D5CBC0]
                    to-[#605448]
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
                  "
                >
                  I BUILD
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#F7E7C4]
                    via-[#C99E5D]
                    to-[#543B1A]
                    drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]
                  "
                >
                  SMART
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#DFBE8A]
                    via-[#9B7640]
                    to-[#342410]
                    drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]
                  "
                >
                  SOLUTIONS
                </span>

              </h1>

            </motion.div>

            {/* Subtitle */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-4"
            >
              <p
                className="
                  text-[10px]
                  sm:text-[11px]
                  md:text-xs
                  font-normal
                  tracking-[0.28em]
                  uppercase
                  text-[#C4B29E]
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                AI & FULL STACK DEVELOPER
                <span className="text-[#8C6D4F] mx-1">•</span>
                WEB DEVELOPER
                <span className="text-[#8C6D4F] mx-1">•</span>
                PROBLEM SOLVER
              </p>
            </motion.div>

            {/* Description */}

            <motion.div
              variants={fadeUpVariants}
              className="
                text-xs
                sm:text-sm
                md:text-[13.5px]
                font-light
                text-[#A8988B]
                leading-[1.8]
                tracking-wide
                max-w-lg
                mb-6
                space-y-1
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                I build modern web applications and intelligent digital
                solutions.
                <br />
                Combining clean design, full-stack development, and AI to solve
                real-world problems.
              </p>
            </motion.div>

            {/* CTA */}

            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-row
                items-center
                gap-4
                sm:gap-6
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >

              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  relative
                  inline-flex
                  items-center
                  space-x-3
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]
                  bg-[#120F0C]/80
                  hover:border-[#D4AF37]
                  text-[#EAD8C7]
                  hover:text-[#FFF5EB]
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                  shadow-[0_0_25px_rgba(212,175,55,0.18)]
                "
              >
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#E8D7C5]/40
                    to-transparent
                    pointer-events-none
                  "
                />

                <span>EXPLORE MY WORK</span>

                <span
                  className="
                    text-xs
                    transform
                    transition-transform
                    duration-300
                  "
                >
                  ↗
                </span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  relative
                  inline-flex
                  items-center
                  space-x-2
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]/40
                  hover:border-[#8C6D4F]
                  text-[#BFA895]
                  hover:text-[#EAD8C7]
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                "
              >
                <span>DOWNLOAD RESUME</span>
                <span className="text-xs">↓</span>
              </motion.a>

            </motion.div>

          </motion.div>

          {/* =================================================
              RIGHT QUOTE / SIGNATURE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              hidden
              lg:flex
              flex-col
              items-start
              pointer-events-auto
              pr-24
              xl:pr-36
              mr-4
              z-20
              select-none
            "
          >

            <span
              className="
                text-xl
                text-[#C99E5D]
                leading-none
                font-serif
                mb-2
              "
            >
              “
            </span>

            <div
              className="
                text-[9.5px]
                font-medium
                tracking-[0.24em]
                uppercase
                text-[#E0D3C5]
                space-y-1
                mb-3
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>CODE WITH PURPOSE.</p>
              <p>BUILD FOR IMPACT.</p>
            </div>

            <div
              className="
                w-28
                h-[1px]
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#E8D7C5]/70
                to-transparent
                shadow-[0_0_8px_rgba(212,175,55,0.4)]
                mb-2
              "
            />

            <div
              className="
                text-[2.2rem]
                text-[#D8AB64]
                font-normal
                leading-none
                -ml-0.5
              "
              style={{
                fontFamily:
                  "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Harshini P
            </div>

          </motion.div>

        </div>

        {/* Bottom Spacer */}

        <div className="h-2" />

      </div>

    </section>
  );
};

export default HeroSection;