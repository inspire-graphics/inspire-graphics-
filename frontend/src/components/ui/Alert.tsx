'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  dismissible = true,
  onDismiss,
  className,
  icon
}) => {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info
  };

  const colors = {
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: 'text-green-500',
      title: 'text-green-800',
      button: 'text-green-600 hover:bg-green-100'
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: 'text-red-500',
      title: 'text-red-800',
      button: 'text-red-600 hover:bg-red-100'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: 'text-yellow-500',
      title: 'text-yellow-800',
      button: 'text-yellow-600 hover:bg-yellow-100'
    },
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: 'text-blue-500',
      title: 'text-blue-800',
      button: 'text-blue-600 hover:bg-blue-100'
    }
  };

  const IconComponent = icons[type];
  const colorScheme = colors[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'flex items-start gap-3 p-4 border rounded-xl shadow-sm',
        colorScheme.container,
        className
      )}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">
        {icon ? (
          React.isValidElement(icon) ? icon : <span>{icon}</span>
        ) : (
          <IconComponent className={cn('w-5 h-5', colorScheme.icon)} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className={cn('font-semibold text-sm mb-1', colorScheme.title)}>
            {title}
          </h4>
        )}
        <p className="text-sm leading-relaxed">
          {message}
        </p>
      </div>

      {/* Dismiss Button */}
      {dismissible && (
        <button
          onClick={onDismiss}
          className={cn(
            'flex-shrink-0 p-1.5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1',
            colorScheme.button
          )}
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
};

export default Alert;