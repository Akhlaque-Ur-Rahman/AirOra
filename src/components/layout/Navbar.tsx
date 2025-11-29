'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/config/navigation';
import { CONTACT_INFO, APP_NAME } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a href="#home" className="text-[#0B1C3F] text-2xl font-bold">
              <span className="text-[#1CB9F6]">APEX</span> HVAC
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#0B1C3F] hover:text-[#1CB9F6] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#0B1C3F]">
              <Phone className="w-4 h-4" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <Button className="bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 transition-colors">
              <Menu className="h-6 w-6 text-[#0B1C3F]" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[#0B1C3F] hover:text-[#1CB9F6] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-[#0B1C3F] mb-4">
                    <Phone className="w-4 h-4" />
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                  <Button className="w-full bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white">
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
