import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import * as Icons from 'lucide-react';
import { schoolData } from '../content/schoolData';
import { contactContent } from '../content/contactContent';
import { SectionTitle } from '../components/shared/SectionTitle';
import { LucideIcon } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
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

      {/* Department Cards - Eye Catching Mobile Layout */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-cream via-white to-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Contact Our Departments"
            subtitle="Quick access to all our departments"
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-12">
            {contactContent.departments.map((dept, index) => {
              const Icon = Icons[dept.icon as keyof typeof Icons] as LucideIcon;

              return (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 h-full"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 via-transparent to-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-maroon via-gold to-navy" />

                  <div className="relative z-10 p-4 md:p-6 lg:p-8 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                      className="mb-2 md:mb-4"
                    >
                      <div className="inline-flex p-2.5 md:p-3.5 rounded-lg md:rounded-2xl bg-gradient-to-br from-maroon to-navy shadow-lg group-hover:scale-110 md:group-hover:scale-125 transition-transform duration-300">
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Department Name */}
                    <h3 className="font-playfair text-lg md:text-xl lg:text-2xl font-bold text-navy mb-2 md:mb-3 group-hover:text-maroon transition-colors duration-300 leading-tight">
                      {dept.name}
                    </h3>

                    {/* Contact Info - Hidden on mobile, visible on larger screens */}
                    <div className="flex-grow hidden md:block">
                      {/* Phone */}
                      <div className="mb-3 pb-3 border-b border-gray-200/50">
                        <a
                          href={`tel:${dept.contact}`}
                          className="inline-flex items-center gap-2 text-maroon font-bold text-sm lg:text-lg hover:text-navy transition-colors duration-300 break-all"
                        >
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          <span>{dept.contact}</span>
                        </a>
                      </div>

                      {/* Email */}
                      <a
                        href={`mailto:${dept.email}`}
                        className="inline-block text-gray-600 text-xs break-all hover:text-maroon transition-colors duration-300 font-inter leading-relaxed"
                      >
                        {dept.email}
                      </a>
                    </div>

                    {/* Contact Info - Compact for mobile */}
                    <div className="flex-grow md:hidden">
                      <a
                        href={`tel:${dept.contact}`}
                        className="text-maroon font-bold text-sm hover:text-navy transition-colors duration-300 line-clamp-1"
                      >
                        {dept.contact}
                      </a>
                    </div>

                    {/* Call Button */}
                    <motion.a
                      href={`tel:${dept.contact}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 md:mt-4 inline-block w-full text-center bg-gradient-to-r from-maroon to-navy text-white py-2 md:py-2.5 px-2 rounded-lg md:rounded-xl font-montserrat font-semibold text-xs md:text-sm hover:shadow-lg transition-all duration-300"
                    >
                      Call
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info Cards */}
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
                {[
                  { icon: MapPin, title: 'Address', key: 'address' },
                  { icon: Phone, title: 'Phone', key: 'phone' },
                  { icon: Mail, title: 'Email', key: 'email' },
                  { icon: Clock, title: 'Office Hours', key: 'hours' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-cream border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-maroon to-navy flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-poppins font-semibold text-navy text-lg mb-2">{item.title}</h3>
                      {item.key === 'address' && (
                        <p className="font-inter text-gray-600 leading-relaxed text-sm">
                          {schoolData.schoolInfo.address.street}
                          <br />
                          {schoolData.schoolInfo.address.mandal}
                          <br />
                          {schoolData.schoolInfo.address.district} - {schoolData.schoolInfo.address.pincode}
                          <br />
                          {schoolData.schoolInfo.address.state}, {schoolData.schoolInfo.address.country}
                        </p>
                      )}
                      {item.key === 'phone' && (
                        <div className="space-y-1">
                          {schoolData.schoolInfo.contact.phones.map((phone, index) => (
                            <p key={index} className="font-inter text-gray-600 text-sm">
                              <a href={`tel:${phone}`} className="hover:text-maroon transition-colors font-bold">
                                {phone}
                              </a>
                            </p>
                          ))}
                        </div>
                      )}
                      {item.key === 'email' && (
                        <p className="font-inter text-gray-600 text-sm">
                          <a
                            href={`mailto:${schoolData.schoolInfo.contact.email}`}
                            className="hover:text-maroon transition-colors break-all"
                          >
                            {schoolData.schoolInfo.contact.email}
                          </a>
                        </p>
                      )}
                      {item.key === 'hours' && (
                        <p className="font-inter text-gray-600 text-sm leading-relaxed">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 8:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-cream rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100/50"
            >
              <h2 className="font-playfair text-3xl font-bold text-navy mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block font-poppins font-medium text-navy mb-3 text-sm">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none font-inter"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-navy mb-3 text-sm">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none font-inter"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-navy mb-3 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none font-inter"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-navy mb-3 text-sm">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all outline-none resize-none font-inter"
                    placeholder="How can we help you?"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-maroon to-navy text-white px-8 py-4 rounded-xl font-montserrat font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Find Us on the Map" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-200"
          >
            <div className="w-full h-full flex items-center justify-center">
              {/* Map integration placeholder */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
