import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const baseStyles = 'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
const variantStyles: Record<string, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
  secondary: 'bg-white text-primary-600 border border-primary-100 hover:bg-primary-50 focus-visible:ring-primary-100',
  ghost: 'bg-transparent text-dark hover:bg-slate-100 focus-visible:ring-primary-100'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild = false, className, variant = 'primary', ...props },
  ref
) {
  const Component = asChild ? Slot : 'button';
  return (
    <Component
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
});
