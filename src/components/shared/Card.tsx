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

  const colorClasses = {
    maroon: 'from-maroon/10 to-maroon/5 border-maroon/20',
    navy: 'from-navy/10 to-navy/5 border-navy/20',
    gold: 'from-gold/10 to-gold/5 border-gold/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${
        colorClasses[color as keyof typeof colorClasses] || colorClasses.maroon
      } p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      {Icon && (
        <div className="mb-4">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-maroon to-navy">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      )}

      <h3 className="font-poppins text-xl font-semibold text-navy mb-3 group-hover:text-maroon transition-colors">
        {title}
      </h3>

      <p className="font-inter text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};
