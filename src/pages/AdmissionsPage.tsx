import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { schoolData } from '../content/schoolData';
import { SectionTitle } from '../components/shared/SectionTitle';
import { Button } from '../components/shared/Button';

export const AdmissionsPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy via-maroon to-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-8 py-3 bg-gold rounded-full mb-6"
          >
            <span className="font-montserrat text-sm uppercase tracking-wider font-bold text-navy">
              Now Open
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            {schoolData.admissions.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            {schoolData.admissions.intro}
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Admission Process" subtitle="Simple steps to join our community" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolData.admissions.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-maroon/20 group hover:border-maroon transition-colors"
              >
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon to-navy flex items-center justify-center shadow-lg">
                    <span className="font-space-grotesk text-xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-playfair text-2xl font-bold text-navy mb-4 group-hover:text-maroon transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle title="Ready to Begin?" subtitle="Take the first step towards a brighter future" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            {schoolData.admissions.cta.map((cta) => (
              <Button
                key={cta.label}
                variant="primary"
                size="lg"
                onClick={() => {
                  const element = document.querySelector(cta.path);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {cta.label}
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-gradient-to-br from-cream to-white rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="font-playfair text-2xl font-bold text-navy mb-4">Need Help?</h3>
            <p className="font-inter text-gray-600 mb-6">
              Our admissions team is here to answer your questions and guide you through the process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${schoolData.schoolInfo.contact.phones[0]}`} className="font-poppins text-maroon font-semibold hover:text-navy transition-colors">
                Call: {schoolData.schoolInfo.contact.phones[0]}
              </a>
              <span className="text-gray-400">|</span>
              <a href={`mailto:${schoolData.schoolInfo.contact.email}`} className="font-poppins text-maroon font-semibold hover:text-navy transition-colors">
                Email: {schoolData.schoolInfo.contact.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
