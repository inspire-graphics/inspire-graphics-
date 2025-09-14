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
      <section id="home" className="min-h-screen flex items-center justify-center" style={{background: 'radial-gradient(ellipse at bottom left, #E6C066 0%, #D9117D 25%, #D900D9 55%, #7527C0 100%)'}}>
        <div className="text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-tight px-4 mb-8" 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '2px',
              background: 'linear-gradient(180deg, #ffffff, #cccccc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            INNOVATION.
            <br />
            DESIGN.
            <br />
            WITH A TWIST.
          </h1>
          
          <p 
            className="text-base md:text-lg lg:text-xl font-normal px-6 md:px-12 lg:px-16 max-w-4xl mx-auto"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              lineHeight: '1.6',
              background: 'linear-gradient(135deg, #FFDEE9, #B5FFFC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Logos, stories, and brands that don't just look beautiful — they feel alive. With timeless design principles powered by AI innovation, we build work that moves quickly, resonates deeply, and stays authentically human.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white">
        {/* First Page - Introduction */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="section-heading mb-12 text-5xl md:text-6xl lg:text-7xl xl:text-8xl -mt-16">CREATIVE WAYSHOWERS.</h1>
            <p className="body-text mb-6 text-xl md:text-2xl">
              At inspiregraphics, we believe that technology should enhance creativity, not replace it. That's why we combine strategy, storytelling, and smart AI workflows to help brands stay bold, relevant, and impossible to ignore.
            </p>
            <p className="body-text text-xl md:text-2xl">
              From visual identities and dynamic websites to messaging systems and brand campaigns, we help you find your voice, amplify your vision, and future-proof your presence.
            </p>
          </div>
        </div>

        {/* Second Page - Grid Layout */}
        <div className="bg-white py-16 px-4">
          {/* Container without background */}
          <div className="w-full max-w-7xl mx-auto p-8">
            {/* 2x4 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">
              {/* Logo Design Card */}
              <div className="bg-white shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center border border-yellow-400">
                {/* Pink SVG Icon - Logo/Design Icon */}
                <div className="mb-6 flex justify-center">
                  <svg className="w-20 h-20 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L14 2V4.5L9 9.5C8.62 9.87 8.62 10.37 9 10.75L10.25 12L7 15.25C6.65 15.6 6.65 16.15 7 16.5L9.75 19.25C10.1 19.6 10.65 19.6 11 19.25L14.25 16L15.5 17.25C15.88 17.63 16.38 17.63 16.75 17.25L21.5 12.5L22.5 11.5L21 9Z"/>
                  </svg>
                </div>
                
                {/* Bold Heading in Vibrant Pink */}
                <h3 className="font-bold text-2xl mb-4" style={{color: '#e64980'}}>
                  Logo Design
                </h3>
                
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  Distinctive logos that embody your brand's personality and create instant recognition across all platforms and applications.
                </p>
              </div>
              
              {/* Logo Design Details Card */}
              <div className="zebra-pattern shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-yellow-400 flex items-center">
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-tight text-lg md:text-xl lg:text-2xl font-medium text-center w-full">
                  Professional logo creation process including concept development, multiple design iterations, color variations, and complete brand mark systems. We deliver scalable vector formats, style guides, and usage guidelines for consistent brand application across all media.
                </p>
              </div>
              
              {/* Strategic Brand Positioning Card - Zebra Pattern */}
              <div className="zebra-pattern shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-yellow-400 flex items-center">
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-tight text-lg md:text-xl lg:text-2xl font-medium text-center w-full">
                  Strategic brand positioning that tells your unique story. From concept to execution, we develop comprehensive brand systems that stand out in today's competitive marketplace and create lasting connections.
                </p>
              </div>
              
              {/* Brand Design Card */}
              <div className="bg-white shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center border border-yellow-400">
                {/* Pink SVG Icon - Brand/Identity Icon */}
                <div className="mb-6 flex justify-center">
                  <svg className="w-20 h-20 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                  </svg>
                </div>
                
                {/* Bold Heading in Vibrant Pink */}
                <h3 className="font-bold text-2xl mb-4" style={{color: '#e64980'}}>
                  Brand Design
                </h3>
                
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  Complete visual identity systems that tell your story and make your brand memorable in every touchpoint.
                </p>
              </div>
              
              {/* Graphic Design Card */}
              <div className="bg-white shadow-md p-12 hover:shadow-lg transition-shadow duration-300 text-center border border-yellow-400">
                {/* Pink SVG Icon - Graphic Design Icon */}
                <div className="mb-6 flex justify-center">
                  <svg className="w-20 h-20 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,2V8H7V10H9V14A4,4 0 0,0 13,18H14V16H13A2,2 0 0,1 11,14V10H14V8H11V2H9M19,2H17V4H15V6H17V8H19V6H21V4H19V2Z"/>
                  </svg>
                </div>
                
                {/* Bold Heading in Vibrant Pink */}
                <h3 className="font-bold text-2xl mb-4" style={{color: '#e64980'}}>
                  Graphic Design
                </h3>
                
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  Marketing collateral, presentation decks, packaging, digital and print publications.
                </p>
              </div>
              
              {/* Graphic Design Quote Card - Zebra Pattern Background */}
              <div className="zebra-pattern shadow-md p-12 hover:shadow-lg transition-shadow duration-300 border border-yellow-400 flex items-center">
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-tight text-lg md:text-xl lg:text-2xl font-medium text-center w-full">
                  Graphic design brings a business card or magazine ad to life. It delivers a powerful message in a tangible manner. Whether you need an advertisement designed or a brochure to showcase your service offering, we're here to help you in that process.
                </p>
              </div>
              
              {/* Printing Services Quote Card - Zebra Pattern Background */}
              <div className="zebra-pattern shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-yellow-400 flex items-center">
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-tight text-lg md:text-xl lg:text-2xl font-medium text-center w-full">
                  Should you need assistance with printing, we have an extensive menu of products available. We can assist you in basic business needs such as business cards and collateral, promotional items and large-scale banners.
                </p>
              </div>
              
              {/* Printing Card - White Background */}
              <div className="bg-white shadow-md p-8 hover:shadow-lg transition-shadow duration-300 text-center border border-yellow-400">
                {/* Pink SVG Icon - Printing Icon */}
                <div className="mb-6 flex justify-center">
                  <svg className="w-20 h-20 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"/>
                  </svg>
                </div>
                
                {/* Bold Heading in Vibrant Pink */}
                <h3 className="font-bold text-2xl mb-4" style={{color: '#e64980'}}>
                  Printing
                </h3>
                
                {/* Body Text in Dark Gray */}
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  EDDM, direct mail, postcards, business cards, menus, flyers, promotional products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding organic-wavy-pattern">
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
      <section id="contact" className="section-padding" style={{background: 'radial-gradient(ellipse at bottom left, #E6C066 0%, #D9117D 25%, #D900D9 55%, #7527C0 100%)'}}>
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
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
              style={{
                background: 'linear-gradient(180deg, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                background: 'linear-gradient(180deg, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
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
                        title: "20+ Years Experience", 
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