import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '../../content/schoolData';
import { SectionTitle } from '../shared/SectionTitle';

export const HouseSystem = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="House System" subtitle={schoolData.houses.intro} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {schoolData.houses.list.map((house, index) => {
            const Icon = Icons[house.icon as keyof typeof Icons] as LucideIcon;

            return (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl bg-white border-2 p-8 text-center hover:shadow-2xl transition-shadow"
                style={{ borderColor: house.color }}
              >
                <div
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: house.color }}
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 inline-flex p-4 rounded-full mb-6"
                  style={{ backgroundColor: `${house.color}20` }}
                >
                  <Icon className="w-10 h-10" style={{ color: house.color }} />
                </motion.div>

                <h3
                  className="relative z-10 font-playfair text-2xl font-bold mb-4"
                  style={{ color: house.color }}
                >
                  {house.name}
                </h3>

                <p className="relative z-10 font-inter text-gray-600 leading-relaxed">
                  {house.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
