import { motion } from 'framer-motion';
import { schoolData } from '../content/schoolData';
import { SectionTitle } from '../components/shared/SectionTitle';
import { Card } from '../components/shared/Card';

export const CurriculumPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy via-maroon to-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8466766/pexels-photo-8466766.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            {schoolData.curriculum.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-poppins text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-4"
          >
            {schoolData.curriculum.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-lg text-white/80 max-w-4xl mx-auto"
          >
            {schoolData.curriculum.intro}
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Learning Domains" subtitle="Six pillars of holistic education" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {schoolData.curriculum.domains.map((domain, index) => (
              <Card
                key={domain.id}
                title={domain.title}
                description={domain.description}
                icon={domain.icon}
                color={domain.color}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-maroon to-navy rounded-2xl p-12 text-center"
          >
            <h3 className="font-playfair text-3xl font-bold text-white mb-6">
              Our Learning Approach
            </h3>
            <p className="font-inter text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {schoolData.curriculum.approach}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
