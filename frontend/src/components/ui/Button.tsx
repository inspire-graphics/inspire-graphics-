'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'creative';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  animate?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    animate = true,
    className,
    disabled,
    children,
    ...props
  }, ref) => {
    const baseClasses = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      'select-none whitespace-nowrap',
      
      // Size variants
      {
        'px-3 py-2 text-xs rounded-lg': size === 'sm',
        'px-4 py-3 text-sm rounded-xl': size === 'md',
        'px-6 py-4 text-base rounded-xl': size === 'lg',
      },
      
      // Variant styles
      {
        // Primary
        'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-glow': 
          variant === 'primary',
        
        // Secondary
        'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500 border border-neutral-200 hover:border-neutral-300': 
          variant === 'secondary',
        
        // Outline
        'bg-transparent text-primary-600 border-2 border-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500': 
          variant === 'outline',
        
        // Ghost
        'bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500': 
          variant === 'ghost',
        
        // Creative gradient
        'bg-gradient-to-r from-creative-500 to-primary-500 text-white hover:from-creative-600 hover:to-primary-600 focus:ring-creative-500 shadow-lg hover:shadow-creative': 
          variant === 'creative',
      },
      
      // Full width
      {
        'w-full': fullWidth,
      },
      
      className
    );
    
    const buttonContent = (
      <>
        {/* Loading spinner */}
        {isLoading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )}
        
        {/* Left icon */}
        {!isLoading && leftIcon && (
          <span className="flex-shrink-0">{leftIcon}</span>
        )}
        
        {/* Button text */}
        {!isLoading && (
          <span className={cn({ 'sr-only': isLoading })}>
            {children}
          </span>
        )}
        
        {/* Right icon */}
        {!isLoading && rightIcon && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </>
    );
    
    if (animate) {
      // Filter out props that conflict with framer-motion
      const { 
        onDrag, 
        onDragEnd, 
        onDragStart,
        onAnimationStart,
        onAnimationEnd,
        onAnimationIteration,
        onTransitionEnd,
        ...motionProps 
      } = props;
      
      return (
        <motion.button
          ref={ref}
          className={baseClasses}
          disabled={disabled || isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
          {...motionProps}
        >
          {buttonContent}
        </motion.button>
      );
    }
    
    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;