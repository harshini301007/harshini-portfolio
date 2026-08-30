import { useEffect, useState } from 'react';
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

export const HeroSection = () => {
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
        bg-[#050403]
        text-[#E8DFD8]
        font-sans
        selection:bg-[#cbb59d]
        selection:text-black
        cursor-none
      "
    >

      {/* =====================================================
          CINEMATIC AI / TECH BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Base cinematic gradient */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_72%_45%,rgba(212,175,55,0.09),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(155,118,64,0.06),transparent_32%),linear-gradient(120deg,#030302,#0a0806_45%,#020202)]
          "
        />

        {/* Large cinematic glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[8%]
            top-[20%]
            w-[32rem]
            h-[32rem]
            rounded-full
            bg-[#D4AF37]/[0.035]
            blur-[100px]
          "
        />

        {/* Tech grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.10]
            bg-[linear-gradient(rgba(212,175,55,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.12)_1px,transparent_1px)]
            bg-[size:70px_70px]
            [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
          "
        />

        {/* Horizontal cinematic light beam */}
        <motion.div
          animate={{
            x: ['-20%', '120%'],
            opacity: [0, 0.35, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            top-[38%]
            left-0
            w-[35%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
            blur-[1px]
          "
        />

        {/* Floating AI nodes */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[28%]
            top-[25%]
            w-1
            h-1
            rounded-full
            bg-[#D4AF37]
            shadow-[0_0_15px_#D4AF37]
          "
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[15%]
            top-[65%]
            w-1.5
            h-1.5
            rounded-full
            bg-[#C99E5D]
            shadow-[0_0_18px_#C99E5D]
          "
        />

        <motion.div
          animate={{
            y: [-8, 8, -8],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-[55%]
            top-[18%]
            w-1
            h-1
            rounded-full
            bg-[#E8D7C5]
            shadow-[0_0_12px_#E8D7C5]
          "
        />

        {/* Large technical circle */}
        <div
          className="
            absolute
            right-[5%]
            top-[15%]
            w-[30rem]
            h-[30rem]
            rounded-full
            border
            border-[#D4AF37]/[0.07]
          "
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            right-[10%]
            top-[20%]
            w-[20rem]
            h-[20rem]
            rounded-full
            border
            border-dashed
            border-[#C99E5D]/[0.10]
          "
        />

        {/* Tech corner marks */}
        <div className="absolute top-32 right-12 w-20 h-20 border-t border-r border-[#D4AF37]/20" />
        <div className="absolute bottom-16 left-10 w-16 h-16 border-b border-l border-[#D4AF37]/15" />

        {/* Subtle vertical cinematic lines */}
        <div className="absolute left-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />
        <div className="absolute right-[18%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.72)_100%)]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-40
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CUSTOM CURSOR
      ====================================================== */}

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
              ? 'rgba(212,175,55,0.10)'
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
          MAIN CONTENT
      ====================================================== */}

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

        {/* =================================================
            NAVIGATION
        ================================================== */}

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

          {/* Logo */}
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

          {/* Main Navigation */}

          <nav
            className="
              hidden
              lg:flex
              flex-1
              items-center
              justify-center
              gap-5
              xl:gap-7
              2xl:gap-8
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
                  py-1
                  text-[9px]
                  xl:text-[10px]
                  tracking-[0.22em]
                  uppercase
                  font-light
                  text-[#B9AA9C]
                  hover:text-[#FFF5EB]
                  transition-colors
                  duration-300
                  whitespace-nowrap
                  group
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
              RIGHT SIDE — SOCIALS ONLY ONCE
          ================================================== */}

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
              href="https://github.com/harshini301007"
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
                2xl:text-[9px]
                tracking-[0.15em]
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
              href="https://www.linkedin.com/in/harshini-poornachandran"
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
                2xl:text-[9px]
                tracking-[0.15em]
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
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span>LET&apos;S TALK</span>

              <span className="text-xs">
                ↗
              </span>
            </a>

          </div>
        </header>

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            w-full
            flex-1
            py-10
            lg:py-4
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

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
              w-full
            "
          >

            {/* Headline */}
            <motion.div
              variants={fadeUpVariants}
              className="relative mb-4 select-none"
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
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  font-normal
                  tracking-[0.25em]
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

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-row
                items-center
                gap-3
                sm:gap-5
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
                  px-5
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]
                  bg-[#120F0C]/80
                  hover:border-[#D4AF37]
                  text-[#EAD8C7]
                  hover:text-[#FFF5EB]
                  text-[10px]
                  sm:text-[11px]
                  font-medium
                  tracking-[0.20em]
                  uppercase
                  transition-all
                  duration-300
                  shadow-[0_0_25px_rgba(212,175,55,0.18)]
                  whitespace-nowrap
                "
              >
                <span>
                  EXPLORE MY WORK
                </span>

                <span className="text-xs">
                  ↗
                </span>

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
                  px-5
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]/40
                  hover:border-[#8C6D4F]
                  text-[#BFA895]
                  hover:text-[#EAD8C7]
                  text-[10px]
                  sm:text-[11px]
                  font-medium
                  tracking-[0.20em]
                  uppercase
                  transition-all
                  duration-300
                  whitespace-nowrap
                "
              >
                <span>
                  DOWNLOAD RESUME
                </span>

                <span className="text-xs">
                  ↓
                </span>
              </motion.a>

            </motion.div>

          </motion.div>

          {/* =================================================
              RIGHT SIDE — QUOTE / SIGNATURE / TECH ELEMENT
          ================================================== */}

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
              pr-10
              xl:pr-20
              z-20
              select-none
            "
          >

            {/* Technical label */}
            <div
              className="
                flex
                items-center
                gap-2
                mb-5
                text-[8px]
                tracking-[0.28em]
                text-[#8C6D4F]
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span className="w-6 h-px bg-[#D4AF37]/50" />
              <span>AI / CODE / DESIGN</span>
            </div>

            {/* Quote */}
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">
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

            {/* Accent line */}
            <div
              className="
                w-28
                h-px
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#E8D7C5]/70
                to-transparent
                shadow-[0_0_8px_rgba(212,175,55,0.4)]
                mb-3
              "
            />

            {/* Signature */}
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

            {/* Tiny tech status */}
            <div
              className="
                flex
                items-center
                gap-2
                mt-5
                text-[7px]
                tracking-[0.25em]
                text-[#75675B]
                uppercase
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#D4AF37]
                  shadow-[0_0_8px_#D4AF37]
                "
              />
              <span>BUILDING DIGITAL SYSTEMS</span>
            </div>

          </motion.div>
        </div>

        {/* =================================================
            WATERMARK
        ================================================== */}

        <div
          className="
            absolute
            bottom-6
            right-6
            lg:bottom-8
            lg:right-10
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
                  w-24
                  h-24
                  lg:w-28
                  lg:h-28
                  object-contain
                  drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]
                "
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;