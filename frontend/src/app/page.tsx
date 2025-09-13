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
      <section id="home" className="min-h-screen flex items-center bg-white relative overflow-hidden">
        {/* Clean Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-primary-50/30"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-creative-100/40 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left max-w-2xl">
              {/* Experience Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">
                  5+ Years of Creative Excellence
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Brand is{" "}
                <span className="text-primary-600">Unique.</span>
                <br />
                It has its own{" "}
                <span className="text-creative-600">Story.</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We specialize in creating personalized design solutions that capture your brand's essence and tell your unique story through compelling visuals.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group shadow-lg text-lg px-8 py-4"
                  rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Tell Your Story
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-2 border-primary-300 text-primary-700 hover:bg-primary-50 text-lg px-8 py-4"
                  leftIcon={<Palette className="w-5 h-5" />}
                  onClick={() => window.location.href = '/showcase'}
                >
                  See Our Work
                </Button>
              </motion.div>

              {/* Key Services Preview */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { icon: Palette, label: 'Logo Design' },
                  { icon: FileText, label: 'Branding' },
                  { icon: Package, label: 'Print Design' }
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.label}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      <IconComponent className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-medium text-neutral-700">{service.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Content - Visual Element */}
            <motion.div
              className="relative lg:block hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Visual Card */}
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-neutral-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-creative-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
                      Creative Excellence
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Transforming ideas into memorable brand experiences
                    </p>
                    
                    {/* Design Elements */}
                    <div className="space-y-3">
                      {[
                        { color: 'bg-primary-500', width: 'w-full' },
                        { color: 'bg-creative-500', width: 'w-3/4' },
                        { color: 'bg-neutral-300', width: 'w-1/2' }
                      ].map((bar, index) => (
                        <motion.div
                          key={index}
                          className={`h-3 ${bar.color} rounded-full ${bar.width}`}
                          initial={{ width: 0 }}
                          animate={{ width: bar.width }}
                          transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Award className="w-8 h-8 text-primary-600" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-creative-100 rounded-full flex items-center justify-center"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Star className="w-6 h-6 text-creative-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Palette className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Our Services
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional Design Services
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We offer comprehensive graphic design solutions tailored to bring your vision to life with creativity and precision.
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
                className="group"
              >
                <Card hover padding="lg" className="h-full bg-white border border-neutral-200 group-hover:border-primary-300 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
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

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-neutral-600 mb-6">
              Ready to elevate your brand with professional design?
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-lg"
              rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Our Portfolio
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Work
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Explore our recent projects that demonstrate our commitment to exceptional design and client satisfaction.
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
                <Card hover padding="none" className="overflow-hidden bg-white border border-neutral-200 group-hover:border-primary-300 group-hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-64 group-hover:scale-105 transition-transform duration-300 ${
                        project.category === 'Logo Design' ? 'object-contain bg-neutral-50 p-8' : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white w-full">
                        <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
                        <p className="text-neutral-200">{project.client}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200">
                        {project.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 mb-1 group-hover:text-primary-700 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600">{project.client}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 border-primary-300 text-primary-700 hover:bg-primary-50"
              rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
              onClick={() => window.location.href = '/showcase'}
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Mail className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Get In Touch
              </span>
            </motion.div>
            
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
              className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to bring your vision to life? Contact us today to discuss your design project and discover how we can help tell your unique story.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" className="bg-white border border-neutral-200 shadow-lg">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Email */}
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                      <Mail className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 mb-2">Email</h3>
                    <a href="mailto:inspiregraphicsju@gmail.com" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                      inspiregraphicsju@gmail.com
                    </a>
                  </div>
                  
                  {/* Phone */}
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-creative-50 rounded-2xl flex items-center justify-center group-hover:bg-creative-100 transition-colors duration-300">
                      <Phone className="w-8 h-8 text-creative-600" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 mb-2">Phone</h3>
                    <a href="tel:+919680197786" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                      +91 9680197786
                    </a>
                  </div>
                  
                  {/* Location */}
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                      <MapPin className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 mb-2">Location</h3>
                    <address className="text-neutral-600 not-italic text-sm leading-relaxed">
                      78, D.I.G. Firoz Khan Colony Suthla<br />
                      Chopasani Road, Jodhpur<br />
                      Rajasthan, India
                    </address>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-neutral-200">
                  <h3 className="text-xl font-display font-semibold text-neutral-900 mb-6 text-center">Why Choose Inspire Graphics?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: "5+ Years Experience", 
                        description: "Proven track record in delivering exceptional design solutions" 
                      },
                      { 
                        title: "Personalized Approach", 
                        description: "Every project is tailored to your unique brand and vision" 
                      },
                      { 
                        title: "Quality Guaranteed", 
                        description: "Professional designs that exceed industry standards" 
                      },
                      { 
                        title: "Fast Turnaround", 
                        description: "Quick delivery without compromising on quality" 
                      }
                    ].map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">{benefit.title}</h4>
                          <p className="text-neutral-600 text-sm">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="shadow-lg"
                    rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />}
                    onClick={() => window.location.href = 'mailto:inspiregraphicsju@gmail.com'}
                  >
                    Start Your Project Today
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}