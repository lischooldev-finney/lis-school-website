import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  color?: string;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  image,
  color = 'maroon',
  className = '',
  delay = 0,
}) => {
  const Icon = icon ? (Icons[icon as keyof typeof Icons] as LucideIcon) : null;

  const colorThemes = {
    maroon: {
      icon: 'bg-gradient-to-br from-maroon to-maroon-dark',
      accent: 'text-maroon',
      border: 'border-maroon/20',
      glow: 'group-hover:shadow-maroon/30',
      lightBg: 'group-hover:bg-maroon/5',
    },
    navy: {
      icon: 'bg-gradient-to-br from-navy to-navy-dark',
      accent: 'text-navy',
      border: 'border-navy/20',
      glow: 'group-hover:shadow-navy/30',
      lightBg: 'group-hover:bg-navy/5',
    },
    gold: {
      icon: 'bg-gradient-to-br from-gold to-gold-dark',
      accent: 'text-gold',
      border: 'border-gold/20',
      glow: 'group-hover:shadow-gold/30',
      lightBg: 'group-hover:bg-gold/5',
    },
  };

  const theme = colorThemes[color as keyof typeof colorThemes] || colorThemes.maroon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      whileHover={{ y: -16, transition: { duration: 0.4 } }}
      className={`group relative h-full overflow-hidden rounded-3xl border ${theme.border} ${theme.lightBg} bg-white/40 backdrop-blur-2xl transition-all duration-500 hover:shadow-2xl ${theme.glow} shadow-xl ${className}`}
    >
      {/* Premium gradient border */}
      <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-white/40 via-white/20 to-white/10 pointer-events-none" />

      {/* Image Section - Full width at top */}
      {/* {image && (
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <motion.img
            src={image}
            alt={title}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
          />
    
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 group-hover:to-black/50 transition-all duration-300" />


          {Icon && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: delay + 0.15 }}
              className="absolute top-6 right-6 z-20"
            >
              <div className={`inline-flex p-4 rounded-2xl ${theme.icon} shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>
          )}
        </div>
      )} */}

      {/* Content Section */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* {!image && Icon && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + 0.15 }}
            className="mb-6"
          >
            <div className={`inline-flex p-4 rounded-2xl ${theme.icon} shadow-xl transition-all duration-300 group-hover:scale-125`}>
              <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
          </motion.div>
        )} */}

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className={`font-playfair text-3xl font-bold ${theme.accent} mb-3 group-hover:text-navy transition-colors duration-300 leading-tight`}
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.25 }}
          className="font-inter text-gray-700 leading-relaxed text-base group-hover:text-gray-900 transition-colors duration-300 flex-grow"
        >
          {description}
        </motion.p>

        {/* Accent bar at bottom */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
          className={`mt-6 h-1.5 rounded-full bg-gradient-to-r from-maroon via-gold to-navy opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </div>
    </motion.div>
  );
};
