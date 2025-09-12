'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
  fullWidth?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
    label,
    error,
    placeholder,
    options,
    fullWidth = true,
    className,
    id,
    ...props
  }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className={cn('space-y-2', { 'w-full': fullWidth })}>
        {/* Label */}
        {label && (
          <label htmlFor={selectId} className="form-label">
            {label}
          </label>
        )}
        
        {/* Select wrapper */}
        <div className="relative">
          {/* Select field */}
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'form-input appearance-none cursor-pointer pr-10',
              {
                'form-input-error': error,
              },
              className
            )}
            {...props}
          >
            {/* Placeholder option */}
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            
            {/* Options */}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Chevron icon */}
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none"
            aria-hidden="true"
          />
        </div>
        
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

Select.displayName = 'Select';

export default Select;