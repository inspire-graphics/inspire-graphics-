'use client';

import { motion } from 'framer-motion';
import { 
  Palette, 
  FileText, 
  CreditCard, 
  Image, 
  Package, 
  GraduationCap,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  Sparkles
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AboutUsSection from '../components/home/AboutUsSection';
import { PORTFOLIO_PROJECTS, HOME_SERVICES } from '../utils/constants';

export default function Home() {
  // Map icon names to actual icon components
  const getIconComponent = (iconName: string) => {
    const icons = { 
      Palette, 
      FileText, 
      CreditCard, 
      Image, 
      Package, 
      GraduationCap 
    };
    return icons[iconName as keyof typeof icons];
  };





  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="section-padding bg-gradient-creative">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-100 shadow-soft mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-neutral-700">
                Professional Design Services
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bring Your{" "}
              <span className="text-gradient">Vision to Life</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional graphic design services that inspire and elevate your brand. 
              From logos to complete brand identities, we create designs that make an impact.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                leftIcon={<Palette className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
                onClick={() => window.location.href = '/showcase'}
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Users, number: '500+', label: 'Happy Clients' },
                { icon: Award, number: '1000+', label: 'Projects Completed' },
                { icon: Star, number: '20+', label: 'Years Experience' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="p-2 rounded-lg bg-white shadow-soft">
                      <IconComponent className="w-5 h-5 text-primary-500" />
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We offer a comprehensive range of graphic design services to help your business stand out
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_SERVICES.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover padding="lg" className="h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Portfolio
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              From concept to completion, we deliver professional designs and custom printing solutions that elevate your brand
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover padding="none" className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-64 group-hover:scale-105 transition-transform duration-300 ${
                        project.category === 'Logo Design' ? 'object-contain bg-white' : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-primary-100">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-medium text-primary-600">{project.category}</span>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 mt-1">{project.title}</h3>
                    <p className="text-neutral-600">{project.client}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to bring your vision to life? Get in touch and let's discuss your project
            </motion.p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card padding="lg">
                <h3 className="text-2xl font-display font-semibold text-neutral-900 mb-6 text-center">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600 mr-4" />
                    <div className="text-center">
                      <p className="font-semibold text-neutral-900">Email</p>
                      <a href="mailto:inspiregraphicsju@gmail.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                        inspiregraphicsju@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600 mr-4" />
                    <div className="text-center">
                      <p className="font-semibold text-neutral-900">Phone</p>
                      <a href="tel:+919680197786" className="text-primary-600 hover:text-primary-700 transition-colors">
                        +91 9680197786
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-center">
                    <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                    <div className="text-center">
                      <p className="font-semibold text-neutral-900">Location</p>
                      <p className="text-neutral-600">78, D.I.G. Firoz Khan Colony Suthla<br />Chopasani Road, Jodhpur<br />Rajasthan, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-display font-semibold text-neutral-900 mb-4 text-center">Why Choose Us?</h4>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Professional quality designs that stand out
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Fast turnaround times without compromising quality
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Personalized service and unlimited revisions
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Competitive pricing for all budgets
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}