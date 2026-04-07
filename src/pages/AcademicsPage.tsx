import { motion } from 'framer-motion';
import { schoolData } from '../content/schoolData';
import { SectionTitle } from '../components/shared/SectionTitle';
import { Card } from '../components/shared/Card';

export const AcademicsPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy via-maroon to-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Academic Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            Preparing students for success in board exams and competitive entrance examinations
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card
              title={schoolData.academics.iitNeet.title}
              description={schoolData.academics.iitNeet.description}
              icon={schoolData.academics.iitNeet.icon}
            />
            <Card
              title={schoolData.academics.growthCard.title}
              description={schoolData.academics.growthCard.description}
              icon={schoolData.academics.growthCard.icon}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why Choose LIS for Academics?" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Expert Faculty', description: 'Experienced teachers dedicated to student success', icon: 'Users' },
              { title: 'Structured Curriculum', description: 'Aligned with CBSE and NEP 2020 guidelines', icon: 'BookOpen' },
              { title: 'Regular Assessments', description: 'Continuous evaluation and personalized feedback', icon: 'ClipboardCheck' },
              { title: 'Digital Learning', description: 'Modern technology-integrated classrooms', icon: 'Monitor' },
              { title: 'Conceptual Clarity', description: 'Focus on deep understanding over rote learning', icon: 'Lightbulb' },
              { title: 'Exam Preparation', description: 'Strategic training for competitive exams', icon: 'Target' },
            ].map((item, index) => (
              <Card key={item.title} title={item.title} description={item.description} icon={item.icon} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
