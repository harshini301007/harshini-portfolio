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
        min-h-screen
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
            z-[100]
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

      {/* =========================================================
          2. CINEMATIC AI / TECH BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 z-0 overflow-hidden bg-black">

        {/* Main atmospheric glow */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_75%_45%,rgba(212,175,55,0.12),transparent_35%)]
          "
        />

        {/* Secondary warm glow */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_90%_20%,rgba(201,158,93,0.08),transparent_28%)]
          "
        />

        {/* Cinematic grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
            bg-[linear-gradient(rgba(212,175,55,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.18)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* Vertical cinematic light */}
        <div
          className="
            absolute
            top-0
            right-[18%]
            w-px
            h-full
            bg-gradient-to-b
            from-transparent
            via-[#D4AF37]/30
            to-transparent
          "
        />

        {/* Horizontal light */}
        <div
          className="
            absolute
            top-[45%]
            right-0
            w-[55%]
            h-px
            bg-gradient-to-l
            from-[#D4AF37]/30
            via-[#C99E5D]/10
            to-transparent
          "
        />

        {/* AI nodes */}
        <div className="absolute top-[24%] right-[23%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_#D4AF37]" />
        <div className="absolute top-[35%] right-[12%] w-1 h-1 rounded-full bg-[#C99E5D] shadow-[0_0_14px_#C99E5D]" />
        <div className="absolute top-[62%] right-[27%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_#D4AF37]" />
        <div className="absolute top-[72%] right-[10%] w-1 h-1 rounded-full bg-[#C99E5D] shadow-[0_0_14px_#C99E5D]" />

        {/* Tech circuit lines */}
        <div className="absolute right-[22%] top-[24%] w-[150px] h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
        <div className="absolute right-[12%] top-[35%] w-[180px] h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
        <div className="absolute right-[27%] top-[62%] w-[120px] h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

        {/* Large futuristic rings */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            right-[5%]
            top-[18%]
            w-[420px]
            h-[420px]
            rounded-full
            border
            border-[#D4AF37]/10
          "
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            right-[10%]
            top-[23%]
            w-[320px]
            h-[320px]
            rounded-full
            border
            border-[#C99E5D]/10
          "
        />

        {/* Dark cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/85
            to-black/25
          "
        />

        {/* Bottom vignette */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-1/3
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />

        {/* Watermark */}
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
                alt="Harshini insignia"
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
          3. MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-between
          min-h-screen
          w-full
          px-6
          sm:px-12
          lg:px-16
          pt-6
          pb-8
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
            gap-6
            pointer-events-auto
          "
        >

          {/* LOGO */}

          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              shrink-0
              text-xs
              sm:text-sm
              font-semibold
              tracking-[0.35em]
              uppercase
              text-[#EAD8C7]
              hover:text-white
              transition-colors
              whitespace-nowrap
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            HARSHINI P.
          </a>


          {/* =================================================
              CENTER NAVIGATION

              IMPORTANT:
              GitHub + LinkedIn are NOT here anymore.
              This fixes the overlap.
          ================================================= */}

          <nav
            className="
              hidden
              lg:flex
              absolute
              left-1/2
              -translate-x-1/2
              items-center
              gap-5
              xl:gap-7
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
          </nav>


          {/* =================================================
              RIGHT ACTIONS

              GitHub + LinkedIn appear ONLY HERE.
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-end
              gap-2
              shrink-0
            "
          >

            {/* GitHub */}

            <a
              href={socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                hidden
                xl:flex
                items-center
                gap-1.5
                text-[8px]
                tracking-[0.14em]
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


            {/* LinkedIn */}

            <a
              href={socialLinks[1].href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
                hidden
                xl:flex
                items-center
                gap-1.5
                text-[8px]
                tracking-[0.14em]
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


            {/* Let's Talk */}

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
                lg:tracking-[0.20em]
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
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span>LET'S TALK</span>

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

          </div>

        </header>


        {/* =====================================================
            HERO CONTENT
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


            {/* TECHNOLOGY LABEL */}

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

                <span className="text-[#8C6D4F] mx-1">
                  •
                </span>

                WEB DEVELOPER

                <span className="text-[#8C6D4F] mx-1">
                  •
                </span>

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

              {/* Explore Work */}

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
                  gap-3
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
                  "
                />

                <span>
                  EXPLORE MY WORK
                </span>

                <span>
                  ↗
                </span>
              </motion.a>


              {/* Resume */}

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
                  gap-2
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
                <span>
                  DOWNLOAD RESUME
                </span>

                <span>
                  ↓
                </span>
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
              <p>
                CODE WITH PURPOSE.
              </p>

              <p>
                BUILD FOR IMPACT.
              </p>
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

        <div className="h-2" />

      </div>

    </section>
  );
};

export default HeroSection;