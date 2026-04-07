import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { schoolData } from '../../content/schoolData';
import { Button } from '../shared/Button';
import { navigateTo } from '../../utils/navigation';

export const HeroSection = () => {
  const handleNavClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/lis_school.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-maroon/80 to-navy/90" /> */}

        {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-gray-800/70 to-slate-900/80" />     */}

        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/70 to-blue-950/85" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/85 via-stone-800/70 to-zinc-900/85" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-full text-gold  font-bold font-montserrat text-lg uppercase tracking-wider mb-16">
              Admissions Open 2026-27
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {schoolData.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
          >
            {schoolData.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => handleNavClick('/admissions')}
            >
              Admissions Open 2026-27
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={Download}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-maroon"
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
