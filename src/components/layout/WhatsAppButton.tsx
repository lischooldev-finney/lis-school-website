import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { schoolData } from '../../content/schoolData';

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Hello! I would like to know more about The Lighthouse School.');
    window.open(`https://wa.me/${schoolData.schoolInfo.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-poppins text-sm font-medium">
        Chat on WhatsApp
      </span>
    </motion.button>
  );
};
