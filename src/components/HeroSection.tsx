import React, { useState, useEffect } from 'react';
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

      {/* =========================================================
          1. CUSTOM CURSOR
      ========================================================= */}
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
          "
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered
              ? 'rgba(212, 175, 55, 0.1)'
              : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 350,
            mass: 0.5,
          }}
        />
      )}

      {/* =========================================================
          2. CINEMATIC AI / TECH BACKGROUND
      ========================================================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">

        {/* Main radial glow */}
        <div
          className="
            absolute
            top-1/2
            right-[8%]
            -translate-y-1/2
            w-[520px]
            h-[520px]
            rounded-full
            bg-[#D4AF37]/[0.025]
            blur-[100px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            top-[15%]
            left-[45%]
            w-[260px]
            h-[260px]
            rounded-full
            bg-[#C99E5D]/[0.018]
            blur-[90px]
          "
        />

        {/* =====================================================
            TECH GRID
        ===================================================== */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.10]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '90px 90px',
          }}
        />

        {/* Fine radial grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* =====================================================
            ROTATING TECH ORBIT
        ===================================================== */}
        <motion.div
          className="
            absolute
            right-[7%]
            top-1/2
            -translate-y-1/2
            w-[430px]
            h-[430px]
            rounded-full
            border
            border-[#D4AF37]/10
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="
              absolute
              top-1/2
              -translate-y-1/2
              -left-1
              w-2
              h-2
              rounded-full
              bg-[#D4AF37]
              shadow-[0_0_15px_#D4AF37]
            "
          />
        </motion.div>

        <motion.div
          className="
            absolute
            right-[11%]
            top-1/2
            -translate-y-1/2
            w-[320px]
            h-[320px]
            rounded-full
            border
            border-[#C99E5D]/10
          "
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="
              absolute
              top-1/2
              -translate-y-1/2
              -left-1
              w-1.5
              h-1.5
              rounded-full
              bg-[#C99E5D]
              shadow-[0_0_12px_#C99E5D]
            "
          />
        </motion.div>

        {/* =====================================================
            FLOATING PARTICLES
        ===================================================== */}
        <motion.div
          className="
            absolute
            top-[25%]
            right-[17%]
            w-1.5
            h-1.5
            rounded-full
            bg-[#F7E7C4]
            shadow-[0_0_12px_#F7E7C4]
          "
          animate={{
            y: [-8, 8, -8],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            absolute
            top-[38%]
            right-[24%]
            w-1
            h-1
            rounded-full
            bg-[#D4AF37]
            shadow-[0_0_10px_#D4AF37]
          "
          animate={{
            y: [5, -8, 5],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[30%]
            right-[28%]
            w-1
            h-1
            rounded-full
            bg-[#C99E5D]
            shadow-[0_0_10px_#C99E5D]
          "
          animate={{
            y: [-5, 10, -5],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            SCAN LINE
        ===================================================== */}
        <motion.div
          className="
            absolute
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]/10
            to-transparent
          "
          animate={{
            top: ['20%', '80%', '20%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Left cinematic fade */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[55%]
            bg-gradient-to-r
            from-black
            via-black/95
            to-transparent
          "
        />

        {/* Bottom cinematic fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-32
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />

        {/* =====================================================
            WATERMARK
        ===================================================== */}
        <div
          className="
            absolute
            bottom-6
            right-6
            lg:bottom-10
            lg:right-12
            flex
            items-center
            justify-center
            z-10
          "
        >
          <div className="relative flex items-center justify-center">

            <div
              className="
                absolute
                w-36
                h-36
                bg-black/85
                rounded-full
                blur-xl
              "
            />

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
              className="
                relative
                flex
                items-center
                justify-center
              "
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
      </div>

      {/* =========================================================
          3. CONTENT LAYER
      ========================================================= */}
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

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <header
          className="
            relative
            flex
            items-center
            justify-between
            w-full
            pointer-events-auto
            gap-6
          "
        >

          {/* LOGO */}
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
              hover:text-[#FFF5EB]
              transition-colors
              whitespace-nowrap
              shrink-0
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            HARSHINI P.
          </a>

          {/* =================================================
              CENTER NAVIGATION
          ================================================= */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              justify-center
              gap-5
              xl:gap-7
              flex-1
              min-w-0
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >

            {/* Main Links */}
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
                  text-[9px]
                  xl:text-[10px]
                  tracking-[0.20em]
                  xl:tracking-[0.24em]
                  font-light
                  uppercase
                  text-[#C4B5A5]
                  hover:text-[#FFF5EB]
                  transition-colors
                  duration-300
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
                    h-px
                    bg-[#D4AF37]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            {/* Divider */}
            <span
              className="
                w-px
                h-4
                bg-[#8C6D4F]/50
                shrink-0
                mx-1
              "
            />

            {/* =================================================
                GITHUB
            ================================================= */}
            <a
              href="https://github.com/harshini301007"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                relative
                group
                py-1
                text-[9px]
                xl:text-[10px]
                tracking-[0.18em]
                xl:tracking-[0.20em]
                font-medium
                uppercase
                text-[#C4B5A5]
                hover:text-[#F7E7C4]
                transition-colors
                duration-300
                whitespace-nowrap
                shrink-0
              "
            >
              GITHUB
              <span className="ml-1 text-[#D4AF37]">↗</span>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  w-0
                  h-px
                  bg-[#D4AF37]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>

            {/* =================================================
                LINKEDIN
            ================================================= */}
            <a
              href="https://www.linkedin.com/in/harshini-poornachandran"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                relative
                group
                py-1
                text-[9px]
                xl:text-[10px]
                tracking-[0.18em]
                xl:tracking-[0.20em]
                font-medium
                uppercase
                text-[#C4B5A5]
                hover:text-[#F7E7C4]
                transition-colors
                duration-300
                whitespace-nowrap
                shrink-0
              "
            >
              LINKEDIN
              <span className="ml-1 text-[#D4AF37]">↗</span>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  w-0
                  h-px
                  bg-[#D4AF37]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          </nav>

          {/* Social Links */}
<div className="hidden lg:flex items-center gap-3 ml-2">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative px-4 py-2 border border-[#8C6D4F]/30 hover:border-[#D4AF37]/70 transition-all duration-300"
      aria-label={social.name}
    >
      <span
        className="text-[10px] tracking-[0.18em] text-[#A8988B] group-hover:text-[#F7E7C4] transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {social.name} ↗
      </span>

      <span className="absolute inset-0 bg-[#D4AF37]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  ))}
</div>

          {/* =================================================
              LET'S TALK
          ================================================= */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              group
              flex
              items-center
              gap-2
              text-[9px]
              lg:text-[10px]
              tracking-[0.18em]
              lg:tracking-[0.22em]
              font-light
              uppercase
              py-2
              px-3
              lg:px-4
              border
              border-[#8C6D4F]/50
              hover:border-[#D4AF37]
              text-[#EAD8C7]
              hover:text-[#FFF5EB]
              transition-all
              duration-300
              backdrop-blur-sm
              whitespace-nowrap
              shrink-0
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span>LET&apos;S TALK</span>

            <span
              className="
                text-xs
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            >
              ↗
            </span>
          </a>

        </header>

        {/* =====================================================
            MAIN HERO CONTENT
        ===================================================== */}
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

            {/* HEADLINE */}
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

            {/* SUBTITLE */}
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

            {/* DESCRIPTION */}
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
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                I build modern web applications and intelligent digital
                solutions.
                <br />
                Combining clean design, full-stack development, and AI to
                solve real-world problems.
              </p>
            </motion.div>

            {/* CTA BUTTONS */}
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

              {/* EXPLORE */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                }}
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
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#E8D7C5]/40
                    to-transparent
                    pointer-events-none
                  "
                />

                <span>EXPLORE MY WORK</span>
                <span>↗</span>
              </motion.a>

              {/* RESUME */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                }}
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
                <span>↓</span>
              </motion.a>

            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT QUOTE
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
                h-px
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

        <div className="h-2" />

      </div>
    </section>
  );
};

export default HeroSection;