import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

/* =========================================================
   NAVIGATION
========================================================= */

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
   ANIMATION VARIANTS
========================================================= */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: 'blur(5px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.1,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   STATIC TECH PARTICLES
   Avoid Math.random() during render for stable deployment.
========================================================= */

const particles = [
  { left: '58%', top: '18%', size: 2, delay: 0, duration: 5 },
  { left: '64%', top: '32%', size: 1, delay: 1, duration: 7 },
  { left: '72%', top: '21%', size: 2, delay: 2, duration: 6 },
  { left: '79%', top: '38%', size: 1, delay: 0.5, duration: 8 },
  { left: '88%', top: '25%', size: 2, delay: 1.5, duration: 6 },
  { left: '92%', top: '52%', size: 1, delay: 2.5, duration: 7 },
  { left: '69%', top: '58%', size: 2, delay: 0.8, duration: 5 },
  { left: '82%', top: '68%', size: 1, delay: 1.2, duration: 8 },
  { left: '61%', top: '76%', size: 2, delay: 2, duration: 6 },
  { left: '74%', top: '84%', size: 1, delay: 0.4, duration: 7 },
  { left: '94%', top: '78%', size: 2, delay: 1.8, duration: 5 },
  { left: '55%', top: '44%', size: 1, delay: 2.2, duration: 8 },
];

/* =========================================================
   HERO SECTION
========================================================= */

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#030302]
        text-[#E8DFD8]
        selection:bg-[#D4AF37]
        selection:text-black
      "
    >

      {/* =====================================================
          CINEMATIC AI / TECH BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Base cinematic atmosphere */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_75%_42%,rgba(212,175,55,0.10),transparent_25%),radial-gradient(circle_at_30%_70%,rgba(155,118,64,0.06),transparent_30%),linear-gradient(120deg,#020201,#090704_50%,#020202)]
          "
        />

        {/* Large golden cinematic glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.28, 0.48, 0.28],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[5%]
            top-[12%]
            h-[34rem]
            w-[34rem]
            rounded-full
            bg-[#D4AF37]/[0.045]
            blur-[110px]
          "
        />

        {/* Secondary bronze glow */}
        <motion.div
          animate={{
            scale: [1.05, 0.95, 1.05],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[28%]
            bottom-[5%]
            h-[26rem]
            w-[26rem]
            rounded-full
            bg-[#8C6D4F]/[0.07]
            blur-[100px]
          "
        />

        {/* Main technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.13]
            [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,0.11) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.11) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />

        {/* Fine AI data grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            [mask-image:radial-gradient(circle_at_78%_48%,black,transparent_55%)]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(232,223,216,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,223,216,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Animated horizontal scan beam */}
        <motion.div
          animate={{
            x: ['-25%', '130%'],
            opacity: [0, 0.45, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            left-0
            top-[38%]
            h-px
            w-[30%]
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
            blur-[1px]
          "
        />

        {/* Second scan beam */}
        <motion.div
          animate={{
            x: ['120%', '-30%'],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
            delay: 3,
          }}
          className="
            absolute
            left-0
            top-[68%]
            h-px
            w-[22%]
            bg-gradient-to-r
            from-transparent
            via-[#C99E5D]
            to-transparent
          "
        />

        {/* =================================================
            LARGE TECH RINGS
        ================================================== */}

        <div
          className="
            absolute
            right-[4%]
            top-[18%]
            h-[28rem]
            w-[28rem]
            rounded-full
            border
            border-[#D4AF37]/[0.07]
          "
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            right-[9%]
            top-[23%]
            h-[22rem]
            w-[22rem]
            rounded-full
            border
            border-dashed
            border-[#C99E5D]/[0.13]
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
            right-[15%]
            top-[29%]
            h-[15rem]
            w-[15rem]
            rounded-full
            border
            border-[#E8D7C5]/[0.06]
          "
        />

        {/* Ring center */}
        <motion.div
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[31%]
            top-[43%]
            h-2
            w-2
            rounded-full
            bg-[#D4AF37]
            shadow-[0_0_20px_#D4AF37]
          "
        />

        {/* =================================================
            FLOATING AI PARTICLES
        ================================================== */}

        {particles.map((particle) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.15, 0.75, 0.15],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              rounded-full
              bg-[#D4AF37]
              shadow-[0_0_12px_#D4AF37]
            "
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}

        {/* =================================================
            TECH CORNER DETAILS
        ================================================== */}

        <div className="absolute right-10 top-28 h-20 w-20 border-r border-t border-[#D4AF37]/20" />

        <div className="absolute bottom-16 left-8 h-16 w-16 border-b border-l border-[#D4AF37]/15" />

        <div className="absolute left-[12%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />

        <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent" />

        {/* Small data labels */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            absolute
            right-[25%]
            top-[25%]
            text-[8px]
            tracking-[0.3em]
            text-[#8C6D4F]
          "
        >
          AI_SYSTEM // ONLINE
        </motion.div>

        <motion.div
          animate={{
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 1,
          }}
          className="
            absolute
            right-[12%]
            bottom-[20%]
            text-[7px]
            tracking-[0.3em]
            text-[#75675B]
          "
        >
          RAG / ML / WEB
        </motion.div>

        {/* Left readability gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/90
            via-[55%]
            to-black/30
          "
        />

        {/* Cinematic vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.78)_100%)]
          "
        />

        {/* Bottom cinematic fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-36
            bg-gradient-to-t
            from-black
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          flex-col
          px-6
          sm:px-10
          lg:px-14
          xl:px-16
          pt-6
          pb-7
        "
      >

        {/* =================================================
            NAVIGATION
        ================================================== */}

        <header
          className="
            grid
            w-full
            grid-cols-[auto_minmax(0,1fr)_auto]
            items-center
            gap-4
            xl:gap-7
          "
        >

          {/* Logo */}
          <a
            href="#"
            className="
              shrink-0
              whitespace-nowrap
              text-xs
              font-semibold
              tracking-[0.30em]
              text-[#EAD8C7]
              transition-colors
              duration-300
              hover:text-white
              sm:text-sm
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            HARSHINI P.
          </a>

          {/* Main navigation */}
          <nav
            className="
              hidden
              min-w-0
              items-center
              justify-center
              gap-3
              lg:flex
              xl:gap-5
              2xl:gap-7
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  group
                  relative
                  shrink-0
                  whitespace-nowrap
                  py-2
                  text-[8px]
                  font-light
                  tracking-[0.16em]
                  text-[#AFA095]
                  transition-colors
                  duration-300
                  hover:text-[#FFF5EB]
                  xl:text-[9px]
                  xl:tracking-[0.19em]
                  2xl:text-[10px]
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
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
              RIGHT SIDE
          ================================================== */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-end
              gap-2
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >

            {/* GitHub + LinkedIn */}
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden
                  items-center
                  gap-1
                  whitespace-nowrap
                  border
                  border-[#8C6D4F]/35
                  px-2
                  py-2
                  text-[7px]
                  font-light
                  tracking-[0.10em]
                  text-[#BFAE9E]
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]
                  hover:text-[#F7E7C4]
                  xl:flex
                  xl:px-2.5
                  xl:text-[8px]
                  2xl:text-[9px]
                "
              >
                <span>{social.name}</span>
                <span className="text-[#D4AF37]">↗</span>
              </a>
            ))}

            {/* Let's Talk */}
            <a
              href="#contact"
              className="
                flex
                shrink-0
                items-center
                gap-1.5
                whitespace-nowrap
                border
                border-[#8C6D4F]/50
                px-3
                py-2
                text-[8px]
                font-light
                tracking-[0.14em]
                text-[#EAD8C7]
                transition-all
                duration-300
                hover:border-[#D4AF37]
                hover:text-[#FFF5EB]
                sm:px-3.5
                lg:text-[9px]
                xl:px-4
                xl:text-[10px]
              "
            >
              <span>LET&apos;S TALK</span>
              <span className="text-[#D4AF37]">↗</span>
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
            flex-1
            flex-col
            justify-center
            py-12
            md:py-10
            lg:flex-row
            lg:items-center
            lg:justify-between
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
              z-20
              w-full
              max-w-[40rem]
            "
          >

            {/* Main headline */}
            <motion.div
              variants={fadeUpVariants}
              className="mb-4 select-none"
            >
              <h1
                className="
                  text-[4.4rem]
                  uppercase
                  leading-[0.82]
                  tracking-tight
                  sm:text-[5.8rem]
                  md:text-[7rem]
                  lg:text-[7.2rem]
                  xl:text-[7.8rem]
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >

                <span
                  className="
                    block
                    bg-gradient-to-b
                    from-white
                    via-[#D5CBC0]
                    to-[#605448]
                    bg-clip-text
                    text-transparent
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
                  "
                >
                  I BUILD
                </span>

                <span
                  className="
                    block
                    bg-gradient-to-b
                    from-[#F7E7C4]
                    via-[#C99E5D]
                    to-[#543B1A]
                    bg-clip-text
                    text-transparent
                    drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]
                  "
                >
                  SMART
                </span>

                <span
                  className="
                    block
                    bg-gradient-to-b
                    from-[#DFBE8A]
                    via-[#9B7640]
                    to-[#342410]
                    bg-clip-text
                    text-transparent
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
                  text-[8px]
                  font-normal
                  uppercase
                  tracking-[0.20em]
                  text-[#C4B29E]
                  sm:text-[10px]
                  md:text-xs
                  md:tracking-[0.25em]
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                AI & FULL STACK DEVELOPER

                <span className="mx-1 text-[#8C6D4F]">
                  •
                </span>

                WEB DEVELOPER

                <span className="mx-1 text-[#8C6D4F]">
                  •
                </span>

                PROBLEM SOLVER
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUpVariants}
              className="
                mb-6
                max-w-lg
                text-xs
                font-light
                leading-[1.8]
                tracking-wide
                text-[#A8988B]
                sm:text-sm
                md:text-[13px]
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

              {/* Explore */}
              <motion.a
                href="#work"
                whileHover={{
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  relative
                  inline-flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  border
                  border-[#8C6D4F]
                  bg-[#120F0C]/80
                  px-4
                  py-3
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#EAD8C7]
                  shadow-[0_0_25px_rgba(212,175,55,0.14)]
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]
                  hover:text-[#FFF5EB]
                  sm:px-6
                  sm:py-3.5
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                <span>EXPLORE MY WORK</span>
                <span className="text-[#D4AF37]">↗</span>

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-[#E8D7C5]/50
                    to-transparent
                  "
                />
              </motion.a>

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  border
                  border-[#8C6D4F]/40
                  px-4
                  py-3
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#BFA895]
                  transition-all
                  duration-300
                  hover:border-[#C99E5D]
                  hover:text-[#EAD8C7]
                  sm:px-6
                  sm:py-3.5
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                <span>DOWNLOAD RESUME</span>
                <span className="text-[#D4AF37]">↓</span>
              </motion.a>

            </motion.div>

          </motion.div>

          {/* =================================================
              RIGHT SIDE — CINEMATIC QUOTE
          ================================================== */}

          <motion.div
            variants={rightPanelVariants}
            initial="hidden"
            animate="visible"
            className="
              z-20
              mt-14
              hidden
              select-none
              lg:flex
              lg:flex-col
              lg:items-start
              lg:pr-8
              xl:pr-16
            "
          >

            {/* Label */}
            <div
              className="
                mb-5
                flex
                items-center
                gap-2
                text-[7px]
                tracking-[0.28em]
                text-[#8C6D4F]
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span className="h-px w-6 bg-[#D4AF37]/50" />
              <span>AI / CODE / DESIGN</span>
            </div>

            {/* Quote */}
            <span className="mb-2 font-serif text-xl leading-none text-[#C99E5D]">
              “
            </span>

            <div
              className="
                mb-3
                space-y-1
                text-[9px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#E0D3C5]
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>CODE WITH PURPOSE.</p>
              <p>BUILD FOR IMPACT.</p>
            </div>

            {/* Accent */}
            <motion.div
              animate={{
                width: ['5rem', '8rem', '5rem'],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                mb-3
                h-px
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#E8D7C5]/70
                to-transparent
                shadow-[0_0_8px_rgba(212,175,55,0.4)]
              "
            />

            {/* Signature */}
            <div
              className="
                text-[2.1rem]
                leading-none
                text-[#D8AB64]
              "
              style={{
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
              }}
            >
              Harshini P
            </div>

            {/* Status */}
            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-[7px]
                uppercase
                tracking-[0.25em]
                text-[#75675B]
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <span
                className="
                  h-1.5
                  w-1.5
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
            pointer-events-none
            absolute
            bottom-6
            right-6
            z-10
            hidden
            items-center
            justify-center
            lg:flex
            lg:right-10
          "
        >
          <div className="relative flex items-center justify-center">

            <div
              className="
                absolute
                h-36
                w-36
                rounded-full
                bg-black/85
                blur-xl
              "
            />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.035, 1],
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
                alt="Harshini insignia"
                className="
                  h-24
                  w-24
                  object-contain
                  drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]
                  lg:h-28
                  lg:w-28
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