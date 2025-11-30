'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionHeader, ContactInfo, IconBadge } from '@/components/shared';
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
          badge={<IconBadge icon={<Phone />} label="Get In Touch" />}
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
            {/* Map Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#0B1C3F]">Our Location</h4>
              
              <motion.div
                className="relative w-full h-[350px] md:h-[450px] rounded-2xl shadow-lg overflow-hidden border border-[#1CB9F6]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.167054978147!2d85.32227667470215!3d23.373417979045933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1da5ec6fbab%3A0x88ca7b0bb2745078!2sRoshpa%20Tower%2C%20Mahatma%20Gandhi%20Main%20Rd%2C%20Kanka%2C%20Ranchi%2C%20Jharkhand%20834001!5e0!3m2!1sen!2sin!4v1709916200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AirOra Office Location"
                />
              </motion.div>

              <div className="flex justify-center">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Roshpa+Tower,+Ranchi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-[#1CB9F6] text-white rounded-xl shadow-md hover:bg-[#1CB9F6]/90"
                  >
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
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
                  placeholder="Your Name"
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
                  placeholder="name@example.com"
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
                  placeholder="+91 xxxxxxxxxx"
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
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="installation">HVAC Installation</SelectItem>
                    <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                    <SelectItem value="climate">Climate Control</SelectItem>
                    <SelectItem value="audit">Energy Audit</SelectItem>
                    <SelectItem value="upgrade">System Upgrade</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
