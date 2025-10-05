'use client';

import { cn } from '@/utils/cn';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

const textSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base'
};

export function Loading({ 
  size = 'md', 
  variant = 'spinner', 
  className,
  text 
}: LoadingProps) {
  const renderSpinner = () => (
    <div className={cn(
      'animate-spin rounded-full border-2 border-current border-t-transparent',
      sizeClasses[size],
      className
    )} />
  );

  const renderDots = () => (
    <div className={cn('flex space-x-1 space-x-reverse', className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'rounded-full bg-current animate-pulse',
            size === 'sm' && 'w-2 h-2',
            size === 'md' && 'w-3 h-3',
            size === 'lg' && 'w-4 h-4'
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={cn(
      'rounded-full bg-current animate-pulse',
      sizeClasses[size],
      className
    )} />
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {renderVariant()}
      {text && (
        <p className={cn(
          'text-muted font-body',
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );
}

// Full page loading component
export function PageLoading({ message = 'در حال بارگذاری...' }: { message?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="text-center space-y-6">
        <Loading size="lg" variant="spinner" className="text-primary-600" />
        <div className="space-y-2">
          <h2 className="text-display-md text-dark font-display">نئومسکن</h2>
          <p className="text-body-md text-muted font-body">{message}</p>
        </div>
      </div>
    </div>
  );
}

// Inline loading for buttons and small components
export function InlineLoading({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Loading size="sm" variant="spinner" />
      <span className="text-body-sm text-muted font-body">در حال بارگذاری...</span>
    </div>
  );
}
