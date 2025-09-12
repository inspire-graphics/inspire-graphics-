/**
 * Application constants and configuration
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  TIMEOUT: 10000, // 10 seconds
} as const;

// Business Information
export const BUSINESS_INFO = {
  name: 'Inspire Graphics',
  tagline: 'Bringing Your Vision to Life',
  description: 'Professional graphic design services that inspire and elevate your brand. From logos to complete brand identities, we create designs that make an impact.',
  
  // Contact Information
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'inspiregraphicsju@gmail.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 9680197786',
    address: {
      street: '78, D.I.G. Firoz Khan Colony Suthla',
      city: 'Jodhpur',
      state: 'Rajasthan',
      zip: '342008',
      country: 'India'
    }
  },
  
  // Social Media
  social: {
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || 'https://facebook.com/inspiregraphics',
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || 'https://instagram.com/inspiregraphics',
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || 'https://linkedin.com/company/inspiregraphics',
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || 'https://twitter.com/inspiregraphics',
    behance: process.env.NEXT_PUBLIC_SOCIAL_BEHANCE || 'https://behance.net/inspiregraphics',
    dribbble: process.env.NEXT_PUBLIC_SOCIAL_DRIBBBLE || 'https://dribbble.com/inspiregraphics',
  },
  
  // Business Hours
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    weekends: 'Saturday - Sunday: By Appointment',
    timezone: 'EST'
  }
} as const;

// Navigation
export const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    href: '#home',
    section: 'home'
  },
  {
    label: 'Services',
    href: '#services',
    section: 'services'
  },
  {
    label: 'About Us',
    href: '#about',
    section: 'about'
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
    section: 'portfolio'
  },
  {
    label: 'Our Work',
    href: '/showcase',
    section: 'showcase'
  },
  {
    label: 'Contact',
    href: '#contact',
    section: 'contact'
  }
] as const;

// Footer quick links
export const FOOTER_QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Our Work', href: '/showcase' },
  { name: 'Contact', href: '#contact' }
] as const;

// Footer services list
export const FOOTER_SERVICES = [
  'Logo Design',
  'Brand Identity',
  'Marketing Materials',
  'Business Cards',
  'Packaging Design',
  'School Work Graphics'
] as const;

// Social media links
export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: BUSINESS_INFO.social.facebook,
    icon: 'Facebook',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Instagram',
    url: BUSINESS_INFO.social.instagram,
    icon: 'Instagram',
    color: 'hover:text-pink-600'
  },
  {
    name: 'LinkedIn',
    url: BUSINESS_INFO.social.linkedin,
    icon: 'Linkedin',
    color: 'hover:text-blue-700'
  },
  {
    name: 'Twitter',
    url: BUSINESS_INFO.social.twitter,
    icon: 'Twitter',
    color: 'hover:text-blue-500'
  }
] as const;

// Portfolio projects data
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Inspire Graphics Logo',
    client: '',
    category: 'Logo Design',
    image: '/inspire_logo.png'
  },
  {
    id: 2,
    title: 'Restaurant Menu Design',
    client: '',
    category: 'Brochure Design',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 3,
    title: 'Corporate Business Cards',
    client: '',
    category: 'Business Cards',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 4,
    title: 'Music Festival Poster',
    client: '',
    category: 'Poster Design',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 5,
    title: 'Premium Paper Printing',
    client: '',
    category: 'Custom Printing',
    image: '/premium-paper-printing.jpg'
  },
  {
    id: 6,
    title: 'Corporate Mug Design',
    client: '',
    category: 'Custom Printing',
    image: '/corporate-mug-design.jpg'
  }
] as const;

// Testimonials data
export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    text: 'Working with Inspire Graphics was an absolute pleasure. They took our vision and created a logo that perfectly represents our brand.',
    rating: 5
  },
  {
    name: 'Marco Rossi',
    company: 'Bella Vista Restaurant',
    text: 'The menu design completely transformed how our customers perceive our restaurant. Outstanding work!',
    rating: 5
  },
  {
    name: 'Jennifer Martinez',
    company: 'SoundWave Festival',
    text: 'The poster design captured the energy of our festival perfectly. We saw increased ticket sales thanks to the eye-catching design.',
    rating: 5
  }
] as const;

// Home page services data
export const HOME_SERVICES = [
  {
    icon: 'Palette',
    title: 'Logo Design',
    description: 'Professional logo design that captures your brand identity and makes a lasting impression.'
  },
  {
    icon: 'FileText',
    title: 'Brochures & Flyers',
    description: 'Eye-catching brochures and flyers that effectively communicate your message.'
  },
  {
    icon: 'CreditCard',
    title: 'Business Cards',
    description: 'Professional business cards that make networking memorable and reflect quality.'
  },
  {
    icon: 'Image',
    title: 'Posters & Banners',
    description: 'Impactful posters and banners for events, promotions, and advertising campaigns.'
  },
  {
    icon: 'Package',
    title: 'Packaging Design',
    description: 'Creative packaging solutions that protect your product and attract customers.'
  },
  {
    icon: 'GraduationCap',
    title: 'School Work Graphics',
    description: 'Educational materials, presentations, and academic project graphics for students and institutions.'
  },
  {
    icon: 'Package',
    title: 'Custom Printing Services',
    description: 'Professional printing on mugs, t-shirts, canvas, and various paper materials with premium quality.'
  }
] as const;

// Services
export const SERVICES = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Unique and memorable logos that represent your brand identity',
    icon: 'Palette',
    features: [
      'Multiple concept iterations',
      'Vector files for scalability',
      'Brand guidelines document',
      'Unlimited revisions'
    ],
    startingPrice: '$500'
  },
  {
    id: 'brochure-design',
    title: 'Brochure & Flyer Design',
    description: 'Eye-catching marketing materials that drive engagement',
    icon: 'FileText',
    features: [
      'Custom layouts',
      'Professional copywriting support',
      'Print-ready files',
      'Digital versions available'
    ],
    startingPrice: '$300'
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Professional business cards that make lasting impressions',
    icon: 'CreditCard',
    features: [
      'Premium paper options',
      'Double-sided design',
      'Special finishes available',
      'Quick turnaround'
    ],
    startingPrice: '$150'
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design',
    description: 'Product packaging that stands out on shelves',
    icon: 'Package',
    features: [
      'Structural design support',
      '3D mockups',
      'Material recommendations',
      'Production-ready files'
    ],
    startingPrice: '$800'
  },
  {
    id: 'web-graphics',
    title: 'Web Graphics',
    description: 'Digital graphics optimized for web and social media',
    icon: 'Monitor',
    features: [
      'Social media templates',
      'Web banner design',
      'Icon design',
      'Multiple format exports'
    ],
    startingPrice: '$250'
  },
  {
    id: 'consultation',
    title: 'Design Consultation',
    description: 'Expert guidance for your design and branding needs',
    icon: 'MessageCircle',
    features: [
      'Brand strategy development',
      'Design system creation',
      'Color palette selection',
      'Typography recommendations'
    ],
    startingPrice: '$100'
  }
] as const;

// Project Types
export const PROJECT_TYPES = [
  { value: 'logo', label: 'Logo Design' },
  { value: 'brochure', label: 'Brochure/Flyer' },
  { value: 'business_card', label: 'Business Cards' },
  { value: 'poster', label: 'Posters/Banners' },
  { value: 'packaging', label: 'Packaging Design' },
  { value: 'web_design', label: 'Web Graphics' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'other', label: 'Other' }
] as const;

// Budget Ranges
export const BUDGET_RANGES = [
  { value: 'under_500', label: 'Under $500' },
  { value: '500_1000', label: '$500 - $1,000' },
  { value: '1000_2500', label: '$1,000 - $2,500' },
  { value: '2500_5000', label: '$2,500 - $5,000' },
  { value: 'over_5000', label: 'Over $5,000' },
  { value: 'discuss', label: "Let's discuss" }
] as const;

// Timeline Options
export const TIMELINE_OPTIONS = [
  { value: 'rush', label: 'Rush (1-3 days)' },
  { value: '1-2-weeks', label: '1-2 weeks' },
  { value: '2-4-weeks', label: '2-4 weeks' },
  { value: '1-2-months', label: '1-2 months' },
  { value: 'flexible', label: 'Flexible' }
] as const;

// How did you hear about us options
export const SOURCE_OPTIONS = [
  { value: 'google-search', label: 'Google Search' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'referral', label: 'Referral from friend/colleague' },
  { value: 'previous-client', label: 'Previous client' },
  { value: 'online-ad', label: 'Online advertisement' },
  { value: 'portfolio-site', label: 'Portfolio website' },
  { value: 'other', label: 'Other' }
] as const;

// Testimonial Configuration
export const TESTIMONIALS_CONFIG = {
  ITEMS_PER_PAGE: 3,
  AUTO_ROTATION_INTERVAL: 5000, // 5 seconds
  SHOW_RATINGS: true,
  SHOW_COMPANY: true
} as const;

// Portfolio Configuration
export const PORTFOLIO_CONFIG = {
  FEATURED_ITEMS_LIMIT: 6,
  ITEMS_PER_PAGE: 12,
  IMAGE_QUALITY: 85,
  THUMBNAIL_SIZE: { width: 400, height: 300 },
  LIGHTBOX_ENABLED: true
} as const;

// Form Validation
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 100
  },
  email: {
    maxLength: 100,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  phone: {
    maxLength: 20,
    pattern: /^[\+]?[1-9][\d]{0,15}$/
  },
  message: {
    minLength: 10,
    maxLength: 2000
  },
  company: {
    maxLength: 100
  },
  subject: {
    maxLength: 200
  }
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  DURATION: {
    SHORT: 0.2,
    MEDIUM: 0.4,
    LONG: 0.6
  },
  EASING: {
    EASE_OUT: 'easeOut',
    EASE_IN: 'easeIn',
    EASE_IN_OUT: 'easeInOut'
  },
  STAGGER_DELAY: 0.1
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  COLORS: {
    PRIMARY: 'primary',
    CREATIVE: 'creative',
    NEUTRAL: 'neutral',
    SUCCESS: 'success',
    WARNING: 'warning'
  },
  FONTS: {
    DISPLAY: 'font-display',
    BODY: 'font-sans',
    MONO: 'font-mono'
  },
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px'
  }
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  DEFAULT_TITLE: 'Inspire Graphics - Professional Graphic Design Services',
  DEFAULT_DESCRIPTION: 'Professional graphic design services including logo design, branding, marketing materials, and more. Transform your vision into stunning visual designs.',
  DEFAULT_KEYWORDS: 'graphic design, logo design, branding, marketing materials, business cards, brochures, packaging design, web graphics',
  DEFAULT_IMAGE: '/images/og-image.jpg',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://inspiregraphics.com',
  TWITTER_HANDLE: '@inspiregraphics'
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  FORM_SUBMISSION_ERROR: 'Failed to submit form. Please try again.',
  PORTFOLIO_FETCH_ERROR: 'Failed to load portfolio items.',
  TESTIMONIALS_FETCH_ERROR: 'Failed to load testimonials.',
  GENERIC_ERROR: 'Something went wrong. Please try again.'
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Thank you for your message! We\'ll get back to you within 24 hours.',
  SUBSCRIPTION_SUCCESS: 'Successfully subscribed to our newsletter!',
  CONTACT_SUCCESS: 'Your message has been sent successfully!'
} as const;