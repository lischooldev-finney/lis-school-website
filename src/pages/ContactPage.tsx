import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { schoolData } from '../content/schoolData';
import { SectionTitle } from '../components/shared/SectionTitle';

export const ContactPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-20 px-4 bg-gradient-to-br from-navy via-maroon to-navy text-white">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
          >
            We're here to answer your questions and welcome you to our community
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-4xl font-bold text-navy mb-8">
                Visit Our Campus
              </h2>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-navy text-lg mb-2">Address</h3>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {schoolData.schoolInfo.address.street}
                      <br />
                      {schoolData.schoolInfo.address.mandal}
                      <br />
                      {schoolData.schoolInfo.address.district} - {schoolData.schoolInfo.address.pincode}
                      <br />
                      {schoolData.schoolInfo.address.state}, {schoolData.schoolInfo.address.country}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-navy text-lg mb-2">Phone</h3>
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
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-navy text-lg mb-2">Email</h3>
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

                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white shadow-lg"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-navy text-lg mb-2">Office Hours</h3>
                    <p className="font-inter text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 8:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="font-playfair text-3xl font-bold text-navy mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block font-poppins font-medium text-navy mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-navy mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-navy mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-navy mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-maroon to-navy text-white px-8 py-4 rounded-xl font-montserrat uppercase tracking-wider font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Find Us on the Map" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-2xl overflow-hidden shadow-2xl h-96 bg-gray-200"
          >
            <div className="w-full h-full flex items-center justify-center">
              {/* <p className="font-inter text-gray-500">Map integration placeholder</p> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
