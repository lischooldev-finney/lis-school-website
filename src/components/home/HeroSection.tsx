import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { schoolData } from '../../content/schoolData';
import { Button } from '../shared/Button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden md:items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-[length:125%_auto] md:bg-[position:center_top]"
        style={{
          backgroundImage: 'url(/lis_school.jpeg)',
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-maroon/80 to-navy/90" /> */}

        {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-gray-800/70 to-slate-900/80" />     */}

        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/70 to-blue-950/85" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/85 via-stone-800/70 to-zinc-900/85" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-black/10" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black/50 via-transparent to-transparent md:block" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-20 sm:px-6 md:py-32 lg:px-8">
        <div className="relative max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute -inset-x-3 -inset-y-5 rounded-[2rem] bg-black/50 blur-2xl sm:-inset-x-6 md:hidden"
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 mb-5 hidden items-center gap-3 sm:flex"
          >
            <span className="h-px w-10 bg-gold sm:w-14" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.24em] text-gold sm:text-sm">
              The Lighthouse School
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mb-5 max-w-sm font-playfair text-3xl font-bold leading-[1.12] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.9)] sm:mb-6 sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {schoolData.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 mb-7 max-w-sm font-inter text-sm leading-6 text-white/95 [text-shadow:0_2px_8px_rgba(0,0,0,0.95)] sm:mb-9 sm:max-w-3xl sm:text-lg md:text-xl md:leading-relaxed"
          >
            {schoolData.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 flex flex-wrap gap-4"
          >
            <Button
              variant="outline"
              size="lg"
              icon={Download}
              className="border-white/80 bg-black/25 px-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm hover:bg-white hover:text-maroon sm:px-8"
            >
              Download Brochure
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
