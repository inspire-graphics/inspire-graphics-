'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '../../utils/cn';
import { useApp } from '../../contexts/AppContext';
import { NAVIGATION_ITEMS, BUSINESS_INFO } from '../../utils/constants';
import Button from '../ui/Button';

const Header = () => {
  const pathname = usePathname();
  const { state, toggleMenu, closeMenu, setActiveSection } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);
  
  // Close menu when pathname changes
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);
  
  // Handle menu item click with smooth scrolling
  const handleMenuClick = (section: string, href: string) => {
    setActiveSection(section);
    closeMenu();
    
    // Handle smooth scrolling for section links
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Handle page navigation
      window.location.href = href;
    }
  };
  
  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || state.navigation.isMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-100'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a
                href="#home"
                className="flex items-center group"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick('home', '#home');
                }}
              >
                <div className="relative h-20 w-auto group-hover:shadow-glow transition-all duration-300">
                  <Image
                    src="/inspire_logo.png"
                    alt="Inspire Graphics Logo"
                    width={280}
                    height={80}
                    className="object-contain h-full w-auto filter contrast-125 brightness-110"
                    priority
                    quality={100}
                    unoptimized
                  />
                </div>
              </a>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div
              className="hidden lg:flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {NAVIGATION_ITEMS.map((item, index) => {
                const isActive = pathname === item.href || 
                  state.navigation.activeSection === item.section;
                
                return (
                  <motion.div
                    key={item.section}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <a
                      href={item.href}
                      className={cn(
                        'relative px-3 py-2 text-sm font-semibold transition-all duration-200 rounded-lg',
                        'hover:text-primary-600 hover:bg-primary-50',
                        isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-neutral-700'
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuClick(item.section, item.href);
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary-500 rounded-full"
                          layoutId="activeIndicator"
                          initial={false}
                          style={{ x: '-50%' }}
                        />
                      )}
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
            
            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Decorative Tagline - Desktop */}
              <motion.div
                className="hidden lg:flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-px h-8 bg-gradient-to-b from-primary-300 to-primary-500"></div>
                <span className="text-sm font-extrabold bg-gradient-to-r from-primary-600 via-creative-500 to-primary-500 bg-clip-text text-transparent">
                  {BUSINESS_INFO.tagline}
                </span>
              </motion.div>
              
              {/* Mobile Menu Toggle */}
              <motion.button
                className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {state.navigation.isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {state.navigation.isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-white border-b border-neutral-100 shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="container-custom py-6">
                {/* Navigation Links */}
                <div className="space-y-1 mb-6">
                  {NAVIGATION_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href || 
                      state.navigation.activeSection === item.section;
                    
                    return (
                      <motion.div
                        key={item.section}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        <a
                          href={item.href}
                          className={cn(
                            'flex items-center px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200',
                            'hover:bg-primary-50 hover:text-primary-600',
                            isActive
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-neutral-700'
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick(item.section, item.href);
                          }}
                        >
                          {item.label}
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="shadow-lg"
                    onClick={() => handleMenuClick('contact', '#contact')}
                  >
                    Get Started
                  </Button>
                </motion.div>
                
                {/* Contact Info */}
                <motion.div
                  className="mt-6 pt-6 border-t border-neutral-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="text-center space-y-2">
                    <p className="text-sm text-neutral-600">
                      Ready to start your project?
                    </p>
                    <div className="flex flex-col gap-1">
                      <a
                        href={`tel:${BUSINESS_INFO.contact.phone}`}
                        className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        {BUSINESS_INFO.contact.phone}
                      </a>
                      <a
                        href={`mailto:${BUSINESS_INFO.contact.email}`}
                        className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        {BUSINESS_INFO.contact.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;