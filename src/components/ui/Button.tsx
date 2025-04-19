import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'sauce' | 'meat' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ease-in-out';

  const variants = {
    default: 'bg-burger-dark text-white hover:bg-burger-meat',
    sauce: 'bg-burger-sauce text-white hover:bg-burger-meat',
    meat: 'bg-burger-meat text-white hover:bg-burger-dark',
    outline: 'border border-burger-dark text-burger-dark hover:bg-burger-dark hover:text-white',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
