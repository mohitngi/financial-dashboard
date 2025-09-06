import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Toast Provider
export const ToastProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return <div {...props}>{children}</div>;
};

// Toast Viewport
export const ToastViewport = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
);

// Toast Component
export const Toast = ({
  className,
  variant = 'default',
  children,
  action,
  open = true,
  onOpenChange,
  ...props
}: {
  className?: string;
  variant?: 'default' | 'destructive';
  children: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    destructive: 'bg-red-600 text-white',
  };

  return (
    <div
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all',
        variants[variant],
        !open && 'opacity-0 scale-95',
        className
      )}
      style={{
        display: open ? 'flex' : 'none',
      }}
      {...props}
    >
      <div className="grid gap-1">
        {children}
      </div>
      <div className="absolute right-2 top-2">
        <button
          type="button"
          onClick={() => onOpenChange?.(false)}
          className="rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      {action}
    </div>
  );
};

// Toast Action
export const ToastAction = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
);

// Toast Close
export const ToastClose = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100',
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
  </button>
);

// Toast Title
export const ToastTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
);

// Toast Description
export const ToastDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
);

export type ToastProps = {
  className?: string;
  variant?: 'default' | 'destructive';
  children: React.ReactNode;
  action?: React.ReactNode;
};

export type ToastActionElement = React.ReactElement<typeof ToastAction>;
