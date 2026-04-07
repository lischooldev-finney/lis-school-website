import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';
import { navigateTo } from '../../utils/navigation';

export const AdmissionsBanner = () => {
  const handleNavClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-maroon via-navy to-maroon" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm mb-6"
          >
            <GraduationCap className="w-12 h-12 text-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Admissions Open 2026-27
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Join a community committed to excellence, innovation, and holistic development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => handleNavClick('/admissions')}
              className="bg-white text-maroon hover:bg-gold hover:text-navy"
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNavClick('/contact')}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-maroon"
            >
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
