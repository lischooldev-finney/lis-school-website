import { motion } from 'framer-motion';
import { schoolData } from '../../content/schoolData';
import { SectionTitle } from '../shared/SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';
import { navigateTo } from '../../utils/navigation';

export const GalleryPreview = () => {
  const handleNavClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Campus Gallery"
          subtitle="Explore our vibrant learning environment"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {schoolData.gallery.images.slice(0, 8).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-poppins text-white font-semibold">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            onClick={() => handleNavClick('/gallery')}
          >
            View Full Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
