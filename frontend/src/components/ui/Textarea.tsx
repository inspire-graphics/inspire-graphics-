'use client';

import React from 'react';
import { cn } from '../../utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    label,
    error,
    fullWidth = true,
    resize = 'vertical',
    className,
    id,
    rows = 4,
    ...props
  }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className={cn('space-y-2', { 'w-full': fullWidth })}>
        {/* Label */}
        {label && (
          <label htmlFor={textareaId} className="form-label">
            {label}
          </label>
        )}
        
        {/* Textarea field */}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            'form-input min-h-[100px]',
            {
              'resize-none': resize === 'none',
              'resize-y': resize === 'vertical',
              'resize-x': resize === 'horizontal',
              'resize': resize === 'both',
              'form-input-error': error,
            },
            className
          )}
          {...props}
        />
        
        {/* Error message */}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;