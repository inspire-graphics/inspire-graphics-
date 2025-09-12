'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, FOOTER_QUICK_LINKS, FOOTER_SERVICES } from '../../utils/constants';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="60" height="60" fill="url(#footer-pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <motion.div
          className="container-custom section-padding-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div variants={staggerItem} className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-creative-500 shadow-glow">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-sm text-neutral-400 -mt-1">
                    {BUSINESS_INFO.tagline}
                  </p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                {BUSINESS_INFO.description}
              </p>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-display font-semibold mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {FOOTER_QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(link.href.substring(1));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Services */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-display font-semibold mb-6 text-white">
                Our Services
              </h4>
              <div className="space-y-3">
                {FOOTER_SERVICES.map((service) => (
                  <div key={service} className="text-neutral-300">
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={staggerItem}>
              <h4 className="text-lg font-display font-semibold mb-6 text-white">
                Get In Touch
              </h4>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <a
                      href={`mailto:${BUSINESS_INFO.contact.email}`}
                      className="text-white font-medium hover:text-primary-400 transition-colors duration-200 block"
                    >
                      {BUSINESS_INFO.contact.email}
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <a
                      href={`tel:${BUSINESS_INFO.contact.phone}`}
                      className="text-white font-medium hover:text-primary-400 transition-colors duration-200 block"
                    >
                      {BUSINESS_INFO.contact.phone}
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div className="text-white font-medium">
                    <p className="text-white">{BUSINESS_INFO.contact.address.street}</p>
                    <p className="text-white">
                      {BUSINESS_INFO.contact.address.city}, {BUSINESS_INFO.contact.address.state} {BUSINESS_INFO.contact.address.zip}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-neutral-400 text-sm text-center md:text-left">
                © {currentYear} {BUSINESS_INFO.name}. All rights reserved. 
                <span className="hidden md:inline">Designed with ❤️ for creative excellence.</span>
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#top"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Back to top
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;