'use client';

import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { AppProvider } from '../contexts/AppContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Inspire Graphics - Professional Graphic Design Services</title>
        <meta name="description" content="Professional graphic design services that inspire and elevate your brand. From logos to complete brand identities, we create designs that make an impact." />
        <meta name="keywords" content="graphic design, logo design, branding, marketing materials, business cards, brochures, packaging design, web graphics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Inspire Graphics" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Inspire Graphics - Professional Graphic Design Services" />
        <meta property="og:description" content="Professional graphic design services that inspire and elevate your brand. From logos to complete brand identities, we create designs that make an impact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://inspiregraphics.com'} />
        <meta property="og:image" content="/images/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inspire Graphics - Professional Graphic Design Services" />
        <meta name="twitter:description" content="Professional graphic design services that inspire and elevate your brand." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        
        {/* Custom Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-800 overflow-x-hidden">
        <ErrorBoundary>
          <AppProvider>
            {/* Skip to main content for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-50"
            >
              Skip to main content
            </a>
            
            <div className="flex flex-col min-h-screen">
              <Header />
              <main id="main-content" className="flex-grow pt-16 lg:pt-20">
                {children}
              </main>
              <Footer />
            </div>
          </AppProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}