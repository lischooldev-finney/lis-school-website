import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { schoolData } from '../../content/schoolData';
import { SectionTitle } from '../shared/SectionTitle';

export const EventsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-navy/5 to-maroon/5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Monthly Engagement Programmes"
          subtitle="Year-round activities designed to nurture talent and foster excellence"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {schoolData.activities.monthlyPrograms.map((program, index) => (
            <motion.div
              key={program.month}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-space-grotesk text-2xl font-bold text-maroon mb-2">
                    {program.month}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">{program.program}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
