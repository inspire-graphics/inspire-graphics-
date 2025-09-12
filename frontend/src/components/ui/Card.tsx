'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'creative' | 'glass';
  animate?: boolean;
  onClick?: () => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    children,
    className,
    hover = false,
    padding = 'md',
    variant = 'default',
    animate = true,
    onClick,
    ...props
  }, ref) => {
    const baseClasses = cn(
      // Base styles
      'rounded-2xl border overflow-hidden transition-all duration-300',
      
      // Padding variants
      {
        'p-0': padding === 'none',
        'p-4': padding === 'sm',
        'p-6': padding === 'md',
        'p-8': padding === 'lg',
      },
      
      // Variant styles
      {
        'bg-white border-neutral-100 shadow-soft': variant === 'default',
        'bg-gradient-to-br from-white to-neutral-50 border border-neutral-200': variant === 'creative',
        'bg-white/80 backdrop-blur-md border-white/20': variant === 'glass',
      },
      
      // Hover effects
      {
        'hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer': hover && !animate,
      },
      
      // Interactive cursor
      {
        'cursor-pointer': onClick,
      },
      
      className
    );
    
    const CardComponent = animate ? motion.div : 'div';
    const motionProps = animate ? {
      whileHover: hover ? { y: -4, boxShadow: '0 8px 60px -8px rgba(0, 0, 0, 0.15)' } : {},
      whileTap: onClick ? { scale: 0.98 } : {},
      transition: { duration: 0.2, ease: 'easeOut' }
    } : {};
    
    return (
      <CardComponent
        ref={ref}
        className={baseClasses}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        {...(animate ? motionProps : {})}
        {...props}
      >
        {children}
      </CardComponent>
    );
  }
);

Card.displayName = 'Card';

export default Card;