"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/config/navigation";
import { CONTACT_INFO, APP_NAME } from "@/lib/constants";
import { NavLink } from "@/components/ui/NavLink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      layout
      className={`fixed z-50 overflow-hidden ${
        scrolled
          ? "top-4 inset-x-0 mx-auto w-[92%] lg:w-[90%] lg:max-w-6xl rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-[#1CB9F6]/10 h-16"
          : "top-0 inset-x-0 bg-white h-20 shadow-sm"
      }`}
      initial={false}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        layout: { duration: 0.4 },
      }}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link href="/" className="flex flex-col items-center group">
            <div
              className={`relative mb-[-5px] transition-all duration-300 ease-in-out ${
                scrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
            >
              <Image
                src="/logo/airoralogo.svg"
                alt="AirOra Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`mt-1 font-bold leading-none transition-all duration-300 ease-in-out text-[#023F96] ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              AirOra
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Contact Info & CTA - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-[#1CB9F6] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#1CB9F6]/90 transition font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger
            aria-label="Open main menu"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#0B1C3F] hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[350px] bg-[#0B1C3F] border-l border-[#1CB9F6]/20 p-0 text-white"
          >
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/10">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-12 h-12 mb-[-2px]">
                    <Image
                      src="/logo/airoralogo.svg"
                      alt="AirOra Logo"
                      fill
                      className="object-contain brightness-0 invert"
                      priority
                    />
                  </div>
                  <span className="text-2xl font-bold text-white leading-none">
                    AirOra
                  </span>
                </Link>
              </div>

              {/* Navigation Links */}
              <motion.div
                className="flex-1 overflow-y-auto py-6 px-6 flex flex-col space-y-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <NavLink
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-medium text-white/90 hover:text-[#1CB9F6] py-3 border-b border-white/5 transition-colors block"
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              {/* Drawer Footer */}
              <div className="p-6 bg-[#0B1C3F] border-t border-white/10">
                <div className="flex flex-col gap-3 w-full">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-[#1CB9F6] text-white px-4 py-3 rounded-xl shadow-md hover:bg-[#1CB9F6]/90 transition text-center font-medium text-lg"
                    aria-label="Navigate to contact page"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="https://wa.me/918434008450?text=Hello%20AirOra%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20HVAC%20services%20and%20request%20a%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-[#25D366] text-white px-4 py-3 rounded-xl shadow-md hover:bg-[#25D366]/90 transition flex items-center justify-center gap-2 font-medium text-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat With Us
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
