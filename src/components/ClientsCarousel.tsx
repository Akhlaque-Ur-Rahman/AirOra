"use client";

import { motion } from "motion/react";

export function ClientsCarousel() {
  // Placeholder client logos (you can replace with actual company names/logos)
  const clients = [
    "TechCorp Industries",
    "Global Manufacturing Co.",
    "City Hospital",
    "Premium Hotels Group",
    "Retail Excellence Inc.",
    "Education First Academy",
    "Pharma Solutions Ltd.",
    "Green Energy Corp.",
    "Logistics International",
    "Financial Services Inc.",
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[#0B1C3F] mb-2">
            Trusted by Leading Organizations
          </h3>
          <p className="text-gray-600">
            We&apos;re proud to serve clients across various industries
          </p>
        </motion.div>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: ["linear"] as any,
              },
            }}
          >
            {/* Duplicate clients array for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center px-6 shadow-sm"
              >
                <span className="text-gray-400 text-center whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badges / Certifications */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#1CB9F6]/10 rounded-full flex items-center justify-center">
              <span className="text-[#1CB9F6]">✓</span>
            </div>
            <span>ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#1CB9F6]/10 rounded-full flex items-center justify-center">
              <span className="text-[#1CB9F6]">✓</span>
            </div>
            <span>NATE Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#1CB9F6]/10 rounded-full flex items-center justify-center">
              <span className="text-[#1CB9F6]">✓</span>
            </div>
            <span>EPA Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#1CB9F6]/10 rounded-full flex items-center justify-center">
              <span className="text-[#1CB9F6]">✓</span>
            </div>
            <span>Energy Star Partner</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
