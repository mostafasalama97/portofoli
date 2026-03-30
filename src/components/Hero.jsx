import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5 mb-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mostafa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build IoT, web, and AI products.
          </p>
          <div className='mt-6 flex flex-wrap gap-4'>
            <a
              href='https://github.com/mostafasalama97'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#915EFF] hover:bg-[#915EFF]/20'
              aria-label='Open Mostafa GitHub profile'
            >
              <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current' aria-hidden='true'>
                <path d='M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 0 1 5.5 8c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.1 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z' />
              </svg>
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/mostafamohamedsalama/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#0a66c2] hover:bg-[#0a66c2]/20'
              aria-label='Open Mostafa LinkedIn profile'
            >
              <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current' aria-hidden='true'>
                <path d='M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.03-1.84-3.03-1.84 0-2.12 1.44-2.12 2.93v5.68H9.37V9h3.42v1.56h.05c.48-.9 1.64-1.84 3.37-1.84 3.6 0 4.27 2.37 4.27 5.45v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0Z' />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='canvas-loader' />
          </div>
        }
      >
        <ComputersCanvas />
      </Suspense>
      {/* accessibility for mobile screen */}
      <div className='absolute z-20 xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' aria-label='Scroll to about section'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;