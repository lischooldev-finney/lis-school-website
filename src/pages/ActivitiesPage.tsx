import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { schoolData } from '../content/schoolData';
import { SectionTitle } from '../components/shared/SectionTitle';
import { Card } from '../components/shared/Card';

export const ActivitiesPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy via-maroon to-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Activities & Enrichment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Fostering creativity, leadership, and lifelong skills through diverse experiences
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={schoolData.activities.coCurricular.title} subtitle={schoolData.activities.coCurricular.intro} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {schoolData.activities.coCurricular.sections.map((section, index) => (
              <Card
                key={section.title}
                title={section.title}
                description={section.description}
                icon={section.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={schoolData.activities.excursions.title} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {schoolData.activities.excursions.list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-cream rounded-xl"
              >
                <div className="w-2 h-2 bg-maroon rounded-full mt-2 flex-shrink-0" />
                <p className="font-inter text-gray-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-navy/5 to-maroon/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={schoolData.activities.awards.title} subtitle={schoolData.activities.awards.description} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {schoolData.activities.awards.categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-playfair text-2xl font-bold text-navy mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.awards.map((award, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icons.Award className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <span className="font-inter text-gray-700">{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
