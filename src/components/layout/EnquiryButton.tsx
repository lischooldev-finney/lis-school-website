import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const EnquiryButton = () => {
  const handleClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-maroon to-maroon-light text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Enquire Now"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-poppins text-sm font-medium">
        Enquire Now
      </span>
    </motion.button>
  );
};
