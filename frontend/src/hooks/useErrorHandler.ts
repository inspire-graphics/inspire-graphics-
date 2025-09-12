'use client';

import { useState, useCallback } from 'react';

interface UseErrorHandlerReturn {
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
  handleError: (error: Error | string) => void;
}

export function useErrorHandler(): UseErrorHandlerReturn {
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const handleError = useCallback((error: Error | string) => {
    const message = error instanceof Error ? error.message : error;
    setError(message);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error handled:', error);
    }
  }, []);

  return {
    error,
    setError,
    clearError,
    handleError,
  };
}