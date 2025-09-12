'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Users,
  Star,
  Palette,
  Target,
  Zap,
  Eye,
  Heart,
  Lightbulb
} from 'lucide-react';
import Card from '../ui/Card';

const AboutUsSection = () => {
  const expertise = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Complete brand systems from logos to guidelines'
    },
    {
      icon: Target,
      title: 'Strategic Design',
      description: 'Purpose-driven designs that achieve business goals'
    },
    {
      icon: Eye,
      title: 'Visual Communication',
      description: 'Clear, compelling messaging through visual design'
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem Solving',
      description: 'Innovative solutions to complex design challenges'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our heart into every project'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients as partners'
    }
  ];

  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meet the creative minds behind Inspire Graphics
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Designer Photo and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <Card className="p-12 bg-white shadow-soft-lg" hover animate>
              <div className="text-center">
                {/* Designer Photo */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-64 h-64 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-creative-500 rounded-full opacity-20 animate-pulse"></div>
                    <img 
                      src="/bundu-khan.jpg" 
                      alt="BUNDU KHAN - Designer" 
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-soft relative z-10"
                    />
                  </div>
                </motion.div>

                {/* Designer Info */}
                <div>
                  <h3 className="text-3xl font-trajan font-bold text-neutral-900 mb-4">
                    BUNDU KHAN
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-warning-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-neutral-600 ml-2">20+ Years Experience</span>
                  </div>
                </div>
              </div>

            </Card>
          </motion.div>

          {/* Professional Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Professional Expertise
              </h3>
              
              <Card className="p-6 bg-white border-neutral-100">
                <p className="text-neutral-600 leading-relaxed text-lg mb-6">
                  Bundu Khan is a seasoned Graphic Designer with extensive experience in delivering high-quality visual solutions across diverse industries. With a proven track record of completing numerous successful projects, including comprehensive educational materials, corporate branding systems, and hospitality design solutions, Bundu Khan brings deep creative expertise and innovative design thinking to every engagement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Complete design solutions across all visual mediums
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Extensive portfolio of successful brand launches
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Specialized in rapid design and delivery
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Committed to international design standards
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Professional printing services on various materials (mugs, t-shirts, paper types)
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-white" hover animate>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-creative-50 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-creative-600" />
                      </div>
                      <h4 className="text-lg font-display font-semibold text-neutral-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-neutral-600">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;