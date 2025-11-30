'use client';

import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const pathname = usePathname();

  // Hide on contact page
  if (pathname === '/contact') {
    return null;
  }

  const whatsappLink =
    'https://wa.me/917091634233?text=Hello%20AirOra%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20HVAC%20services%20and%20request%20a%20quote.';

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  );
}
