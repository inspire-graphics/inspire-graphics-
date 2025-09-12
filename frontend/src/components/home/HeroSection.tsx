'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Award, 
  Sparkles,
  Palette,
  Target,
  Zap
} from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const stats = [
    {
      icon: Users,
      number: '100+',
      label: 'Happy Clients',
      color: 'text-primary-500'
    },
    {
      icon: Award,
      number: '500+',
      label: 'Projects Completed',
      color: 'text-creative-500'
    },
    {
      icon: Star,
      number: '10+',
      label: 'Years Experience',
      color: 'text-warning-500'
    }
  ];
  
  const features = [
    {
      icon: Palette,
      title: 'Creative Excellence',
      description: 'Unique designs that stand out'
    },
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'Designs that achieve your goals'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromise'
    }
  ];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400 to-creative-400 rounded-full opacity-10 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-creative-400 to-primary-400 rounded-full opacity-10 blur-3xl"
          animate={{
            x: -mousePosition.x * 0.03,
            y: -mousePosition.y * 0.03,
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 20 }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary-400 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-creative-400 rounded-full opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/6 w-2 h-2 bg-warning-400 rounded-full opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-100 shadow-soft mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-2xl font-extrabold text-gradient">
                Professional Design Services
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-neutral-900 leading-tight mb-6"
            >
              <span className="block">
                Bring Your
              </span>
              <span className="block text-gradient">
                Vision to Life
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Professional graphic design services that inspire and elevate your brand. 
              From logos to complete brand identities, we create designs that make an impact.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                className="group shadow-glow"
                rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
              
              <Button
                variant="primary"
                size="lg"
                className="group shadow-glow"
                leftIcon={<Play className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
                onClick={() => window.location.href = '/showcase'}
              >
                View Our Work
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-white shadow-soft`}>
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-neutral-900">
                        {stat.number}
                      </div>
                      <div className="text-sm text-neutral-600 -mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Feature Card */}
            <Card
              className="p-8 bg-white/80 backdrop-blur-sm border-white/20 shadow-soft-lg"
              hover
              animate
            >
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-500 to-creative-500 rounded-2xl flex items-center justify-center shadow-glow">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">
                    Professional Design
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    We transform your ideas into stunning visual designs that capture 
                    attention and drive results for your business.
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-1 text-warning-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-neutral-500 italic">
                  "Exceptional creativity and professional service"
                </p>
              </div>
            </Card>
            
            {/* Floating Feature Cards */}
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`absolute hidden lg:block ${
                    index === 0 ? '-top-4 -left-8' :
                    index === 1 ? 'top-1/2 -right-8' :
                    '-bottom-4 left-1/2 -translate-x-1/2'
                  }`}
                  style={{
                    transform: `translate3d(${mousePosition.x * 0.01 * (index + 1)}px, ${mousePosition.y * 0.01 * (index + 1)}px, 0)`,
                  }}
                >
                  <Card
                    className="p-4 bg-white shadow-soft border-primary-100 w-48"
                    hover
                    animate
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-50">
                        <IconComponent className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-neutral-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;