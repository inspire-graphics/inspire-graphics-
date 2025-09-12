# Inspire Graphics Portfolio Website

A modern, full-stack portfolio website for Inspire Graphics - showcasing professional graphic design services from logos to brochures.

## Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation

### Backend
- **Node.js + Express** API server
- **TypeScript** throughout
- **MongoDB** with Mongoose
- **Nodemailer** for contact forms
- **Cloudinary** for image management

## Quick Start

1. **Install dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` in both frontend and backend folders
   - Fill in your configuration values

3. **Start development servers:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
inspire-graphics/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Next.js pages
│   │   ├── styles/       # Global styles
│   │   ├── utils/        # Helper functions
│   │   └── assets/       # Images, fonts
├── backend/           # Express API server
│   ├── src/
│   │   ├── controllers/  # Route handlers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   └── services/     # Business logic
└── shared/           # Shared types and constants
```

## Features

- 📱 Responsive design optimized for all devices
- 🎨 Portfolio showcase with image galleries
- 📧 Contact forms with email notifications
- ⚡ Fast loading with Next.js optimization
- 🔒 Secure API with rate limiting
- 📈 SEO optimized for search engines

## Development Commands

```bash
# Install all dependencies
npm run install:all

# Start development servers
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Type checking
npm run type-check
```

## Deployment

The application is ready for deployment on platforms like Vercel (frontend) and Railway/Heroku (backend).

## License

Private - All rights reserved to Inspire Graphics