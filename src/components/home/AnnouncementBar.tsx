import { motion } from 'framer-motion';
import { schoolData } from '../../content/schoolData';
import { useState } from 'react';

export const AnnouncementBar = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-gradient-to-r from-maroon via-navy to-maroon py-3 overflow-hidden">
      <motion.div
        className="flex gap-12"
        animate={{
          x: isPaused ? 0 : [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...schoolData.announcements, ...schoolData.announcements, ...schoolData.announcements].map(
          (announcement, index) => (
            <div
              key={index}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="font-poppins text-white text-sm md:text-base font-medium">
                {announcement.text}
              </span>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};
