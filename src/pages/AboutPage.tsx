import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { schoolData } from '../content/schoolData';
import { SectionTitle } from '../components/shared/SectionTitle';

export const AboutPage = () => {
  const { chairman, correspondent, principal } = schoolData.leadership;

  type Leader = {
    image?: string;
    name: string;
    title: string;
    message: string;
    quote?: string;
    author?: string;
  };

  const LeaderMessage = ({ leader, index }: { leader: Leader; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-maroon shadow-lg"
          >
            <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
          </motion.div>
          <h3 className="font-playfair text-2xl font-bold text-navy mb-2">{leader.name}</h3>
          <p className="font-poppins text-maroon font-semibold">{leader.title}</p>
        </div>

        <div className="lg:col-span-2 space-y-4">
         

          <p className="font-inter text-gray-600 leading-relaxed text-justify">{leader.message}</p>
           {leader.quote && (
            <div className="relative bg-gradient-to-br from-maroon/5 to-navy/5 rounded-xl p-6 mb-6">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-maroon/20" />
              <p className="font-playfair text-lg italic text-gray-700 pl-8">{leader.quote}</p>
              <p className="font-poppins text-sm text-gray-500 mt-2 pl-8">– {leader.author}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-24">
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy via-maroon to-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            About Our School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            {schoolData.about.short}
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Vision" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="font-playfair text-2xl md:text-3xl text-navy italic max-w-4xl mx-auto leading-relaxed">
              "{schoolData.about.vision}"
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionTitle title="Leadership" subtitle="Meet the visionaries guiding our institution" />

          <div className="space-y-12 mt-16">
            <LeaderMessage leader={chairman} index={0} />
            <LeaderMessage leader={correspondent} index={1} />
            <LeaderMessage leader={principal} index={2} />
          </div>
        </div>
      </section>
    </div>
  );
};
