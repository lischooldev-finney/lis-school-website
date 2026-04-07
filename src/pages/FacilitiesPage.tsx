import { motion } from 'framer-motion';
import { schoolData } from '../content/schoolData';
import { SectionTitle } from '../components/shared/SectionTitle';
import { Card } from '../components/shared/Card';

export const FacilitiesPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy via-maroon to-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8326712/pexels-photo-8326712.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            World-Class Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Modern infrastructure designed to inspire learning, creativity, and growth
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Campus Facilities" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {schoolData.facilities.map((facility, index) => (
              <Card
                key={facility.id}
                title={facility.title}
                description={facility.description}
                icon={facility.icon}
                image={facility.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Sports & Physical Education" subtitle="Building strength, teamwork, and character" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {schoolData.sports.map((sport, index) => (
              <Card
                key={sport.id}
                title={sport.title}
                description={sport.description}
                icon={sport.icon}
                image={sport.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
