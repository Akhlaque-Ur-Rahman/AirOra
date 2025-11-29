'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader, ContactInfo } from '@/components/shared';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  const contactInfoItems = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: CONTACT_INFO.address,
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: CONTACT_INFO.phone,
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: CONTACT_INFO.email,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: CONTACT_INFO.hours,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          heading="Request a Free Consultation"
          description="Have a project in mind? Contact us today to discuss your HVAC needs and get a customized solution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-[#0B1C3F] mb-8">
              Contact Information
            </h3>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfoItems.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-[#1CB9F6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[#1CB9F6]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1C3F] mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="relative h-64 bg-gray-200 rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0B1C3F]/80 to-[#1CB9F6]/80">
                <div className="text-white text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm opacity-80">
                    (Embed Google Maps or similar)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-[#0B1C3F] mb-6">
                Send Us a Message
              </h3>

              {/* Name Input */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#0B1C3F] mb-2 font-medium"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#0B1C3F] mb-2 font-medium"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Phone Input */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-[#0B1C3F] mb-2 font-medium"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>

              {/* Service Type Select */}
              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-[#0B1C3F] mb-2 font-medium"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1CB9F6]"
                >
                  <option>Select a service</option>
                  <option>HVAC Installation</option>
                  <option>Maintenance & Repair</option>
                  <option>Climate Control</option>
                  <option>Energy Audit</option>
                  <option>System Upgrade</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[#0B1C3F] mb-2 font-medium"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#1CB9F6] hover:bg-[#0B1C3F] text-white"
              >
                Send Message
              </Button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
