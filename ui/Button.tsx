'use client';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  ripple?: boolean;
}

const baseStyles = 'relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden';
const variantStyles: Record<string, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500 shadow-sm hover:shadow-md',
  secondary: 'bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-100 shadow-sm hover:shadow-md',
  ghost: 'bg-transparent text-dark hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-slate-100',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500 shadow-sm hover:shadow-md',
  success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:ring-green-500 shadow-sm hover:shadow-md'
};

const sizeStyles: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild = false, className, variant = 'primary', size = 'md', loading = false, ripple = true, children, onClick, ...props },
  ref
) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const Component = asChild ? Slot : 'button';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && !asChild) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: Date.now(),
        x,
        y,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }
    
    onClick?.(e);
  };

  const buttonContent = (
    <>
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </motion.div>
      )}
      <span className={cn("transition-opacity", loading && "opacity-0")}>
        {children}
      </span>
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute h-4 w-4 rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x - 8,
            top: ripple.y - 8,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </>
  );

  return (
    <Component
      ref={ref}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={handleClick}
      disabled={loading || props.disabled}
      {...props}
    >
      {buttonContent}
    </Component>
  );
});
