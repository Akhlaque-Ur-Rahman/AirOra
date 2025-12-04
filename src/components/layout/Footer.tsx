'use client';

import { motion } from 'motion/react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';
import Link from 'next/link';
import { APP_NAME, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'All Services', href: '/services' },
      { name: 'HVAC Installation', href: '/services' },
      { name: 'Maintenance', href: '/services' },
      { name: 'Repairs', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blogs', href: '/blogs' },
    ],
    resources: [
      { name: 'FAQs', href: '/faqs' },
      { name: 'Support', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0B1C3F] text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#1CB9F6]">AirOra</span>
            </div>
            <p className="text-white/70 mb-6">
              Your trusted partner for innovative HVAC solutions. Delivering
              comfort, efficiency, and excellence since 2005.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1CB9F6] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#1CB9F6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#1CB9F6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#1CB9F6] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>


          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 AirOra. All rights reserved. | Designed by <a href="https://edunexservices.com" target="_blank" className="text-[#1CB9F6] hover:text-[#1CB9F6]/80 transition-colors">EduNex</a> with ❤️
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="https://facebook.com/AirOra"
                className="text-white/60 hover:text-[#1CB9F6] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://x.com/AirOra"
                className="text-white/60 hover:text-[#1CB9F6] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://linkedin.com/company/AirOra"
                className="text-white/60 hover:text-[#1CB9F6] transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#1CB9F6] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0B1C3F] transition-colors z-50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: '-500px' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
}
