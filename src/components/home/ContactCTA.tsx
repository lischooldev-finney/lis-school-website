import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { schoolData } from '../../content/schoolData';
import { SectionTitle } from '../shared/SectionTitle';
import { Button } from '../shared/Button';
import { FAQ } from '../shared/FAQ';
import { navigateTo } from '../../utils/navigation';

export const ContactCTA = () => {
  const handleNavClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have questions? We're here to help you on your child's educational journey"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-3xl font-bold text-navy mb-8">
              Frequently Asked Questions
            </h3>
            <FAQ items={schoolData.faqs} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-3xl font-bold text-navy mb-8">Contact Information</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-navy mb-2">Address</h4>
                    <p className="font-inter text-gray-600">
                      {schoolData.schoolInfo.address.street}, {schoolData.schoolInfo.address.mandal}
                      <br />
                      {schoolData.schoolInfo.address.district} - {schoolData.schoolInfo.address.pincode}
                      <br />
                      {schoolData.schoolInfo.address.state}, {schoolData.schoolInfo.address.country}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-navy mb-2">Phone</h4>
                    {schoolData.schoolInfo.contact.phones.map((phone, index) => (
                      <p key={index} className="font-inter text-gray-600">
                        <a href={`tel:${phone}`} className="hover:text-maroon transition-colors">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-navy mb-2">Email</h4>
                    <p className="font-inter text-gray-600">
                      <a
                        href={`mailto:${schoolData.schoolInfo.contact.email}`}
                        className="hover:text-maroon transition-colors"
                      >
                        {schoolData.schoolInfo.contact.email}
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-maroon to-navy rounded-2xl p-8 text-center"
            >
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                Schedule a Campus Visit
              </h3>
              <p className="font-inter text-white/90 mb-6">
                Experience our facilities and meet our dedicated faculty team
              </p>
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => handleNavClick('/contact')}
                className="bg-white text-maroon hover:bg-gold hover:text-navy"
              >
                Book a Visit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
