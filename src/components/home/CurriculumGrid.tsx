import { motion } from 'framer-motion';
import { schoolData } from '../../content/schoolData';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';

export const CurriculumGrid = () => {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Holistic Curriculum Framework"
          subtitle="Six key domains designed to nurture well-rounded, confident learners"
        />

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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="font-inter text-lg text-gray-600 max-w-4xl mx-auto">
            {schoolData.curriculum.approach}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
