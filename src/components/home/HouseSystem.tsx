import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { schoolData } from '../../content/schoolData';
import { SectionTitle } from '../shared/SectionTitle';

export const HouseSystem = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-maroon rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-navy rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-maroon/10 to-navy/10 border border-maroon/20 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-maroon to-navy rounded-full animate-pulse" />
            <span className="font-montserrat font-semibold text-maroon text-sm uppercase tracking-wider">
              House System
            </span>
          </div> */}

          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight">
            Champions of
            <span className="block bg-gradient-to-r from-maroon via-gold to-navy bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="font-inter text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {schoolData.houses.intro}
          </p>

          {/* Trophy Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold to-yellow-600 shadow-2xl mt-8"
          >
            <Icons.Trophy className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* House Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {schoolData.houses.list.map((house, index) => {
            const Icon = Icons[house.icon as keyof typeof Icons] as LucideIcon;

            return (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 25
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: {
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 400,
                    damping: 25
                  }
                }}
                className="group relative h-full"
              >
                {/* Premium Card Container */}
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                  {/* Luxury Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

                  {/* Metallic Accent Border */}
                  <div className="absolute inset-0 rounded-3xl border border-gray-200/50 group-hover:border-gray-300/70 transition-colors duration-500" />

                  {/* Premium Shadow Layers */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-black/5 group-hover:to-black/10 transition-all duration-500" />

                  {/* House Color Overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${house.color}08 0%, ${house.color}15 50%, ${house.color}08 100%)`
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                  />

                  {/* Animated Luxury Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${house.color}10, transparent 70%)`
                    }}
                  />

                  {/* Top Luxury Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: index * 0.15 + 0.2, ease: 'easeOut' }}
                    className="absolute top-0 left-0 right-0 h-1 origin-left"
                    style={{
                      background: `linear-gradient(90deg, ${house.color}, ${house.color}dd, ${house.color})`,
                      boxShadow: `0 2px 8px ${house.color}40`
                    }}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 p-10 h-full flex flex-col">
                    {/* Premium Icon Section */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15 + 0.4,
                        type: 'spring',
                        stiffness: 200,
                        damping: 20
                      }}
                      className="mb-8 relative"
                    >
                      {/* Luxury Icon Background */}
                      <div className="relative inline-flex">
                        {/* Outer Glow Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl blur-xl"
                          style={{ backgroundColor: house.color }}
                          animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />

                        {/* Main Icon Container */}
                        <div
                          className="relative p-6 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20"
                          style={{
                            background: `linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)`,
                            boxShadow: `0 20px 40px ${house.color}20, inset 0 1px 0 rgba(255,255,255,0.8)`,
                          }}
                        >
                          <Icon
                            className="w-10 h-10 drop-shadow-sm"
                            style={{ color: house.color }}
                            strokeWidth={1.5}
                          />

                          {/* Inner Luxury Highlight */}
                          <div
                            className="absolute inset-0 rounded-2xl opacity-30"
                            style={{
                              background: `linear-gradient(135deg, transparent 0%, ${house.color}10 50%, transparent 100%)`
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Premium House Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                      className="mb-6"
                    >
                      <h3
                        className="font-playfair text-3xl md:text-4xl font-bold leading-tight mb-2"
                        style={{ color: house.color }}
                      >
                        {house.name}
                      </h3>

                      {/* Luxury Underline */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.7 }}
                        className="h-0.5 w-16 origin-left"
                        style={{ backgroundColor: house.color }}
                      />
                    </motion.div>

                    {/* Premium Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                      className="flex-grow mb-8"
                    >
                      <p className="font-inter text-gray-700 leading-relaxed text-base group-hover:text-gray-800 transition-colors duration-300">
                        {house.description}
                      </p>
                    </motion.div>

                    {/* Premium Bottom Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.8 }}
                      className="mt-auto"
                    >
                      {/* Luxury Progress Indicator */}
                      {/* <div className="flex items-center justify-between mb-4">
                        <span className="font-montserrat text-sm font-medium text-gray-600 uppercase tracking-wider">
                          Excellence
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '60%' }}
                          transition={{ duration: 1.5, delay: index * 0.15 + 1, ease: 'easeOut' }}
                          className="h-1 bg-gray-200 rounded-full overflow-hidden"
                        >
                          <div
                            className="h-full rounded-full"
                            style={{ backgroundColor: house.color }}
                          />
                        </motion.div>
                      </div> */}

                      {/* Premium CTA Button */}
                      {/* <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-6 rounded-xl font-montserrat font-semibold text-sm uppercase tracking-wider transition-all duration-300 group/btn"
                        style={{
                          background: `linear-gradient(135deg, ${house.color}, ${house.color}dd)`,
                          color: 'white',
                          boxShadow: `0 8px 25px ${house.color}30`,
                        }}
                      >
                        <span className="relative z-10">Explore {house.name}</span>
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: house.color }}
                        />
                      </motion.button> */}
                    </motion.div>

                    {/* Luxury Corner Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.15 + 1.2,
                        type: 'spring',
                        stiffness: 200
                      }}
                      className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: house.color }}
                      />
                    </motion.div>
                  </div>

                  {/* Premium Hover Effects */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)'
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Luxury Reflection */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    style={{ transformOrigin: 'bottom' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-maroon to-navy text-white shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group">
            <Icons.Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-montserrat font-semibold text-lg">
              Join Our House System
            </span>
            <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
