import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Primary button with new blue color
        primary: "bg-[#1851fc] hover:bg-[#1444d9] text-white shadow-lg hover:shadow-xl hover:scale-105",
        
        // Modern glassmorphism button
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg hover:shadow-xl",
        
        // Neon glow button with new blue
        neon: "bg-transparent border-2 border-[#1851fc] text-[#1851fc] hover:bg-[#1851fc] hover:text-white shadow-[0_0_20px_rgba(24,81,252,0.3)] hover:shadow-[0_0_30px_rgba(24,81,252,0.6)]",
        
        // Gradient border button
        gradientBorder: "bg-white text-[#1851fc] border-2 border-[#1851fc] hover:bg-[#1851fc] hover:text-white",
        
        // Floating button
        floating: "bg-white text-[#1851fc] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1",
        
        // Outline button
        outline: "border-2 border-[#1851fc] text-[#1851fc] hover:bg-[#1851fc] hover:text-white",
        
        // Ghost button
        ghost: "text-[#1851fc] hover:bg-blue-50 hover:text-[#1444d9]",
        
        // Destructive button
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8 py-3 text-lg",
        xl: "h-14 px-10 py-4 text-xl",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, loading, icon, iconPosition = 'right', children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && !loading && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Specialized button components
export const WaitlistButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'size' | 'rounded'>>(
  ({ className, children = "Join The Waitlist →", ...props }, ref) => {
    return (
      <Link to="/waitlist">
        <Button
          ref={ref}
          variant="primary"
          size="lg"
          rounded="full"
          className={cn("min-w-[200px] font-semibold", className)}
          {...props}
        >
          {children}
        </Button>
      </Link>
    );
  }
);

WaitlistButton.displayName = 'WaitlistButton';

export const CTAButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'size' | 'rounded'>>(
  ({ className, children = "Get Access Early", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="floating"
        size="lg"
        rounded="full"
        className={cn("min-w-[220px] font-semibold", className)}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CTAButton.displayName = 'CTAButton';

export const ContactButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'size' | 'rounded'>>(
  ({ className, children = "Talk to our team", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="glass"
        size="lg"
        rounded="full"
        className={cn("min-w-[200px] font-semibold", className)}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ContactButton.displayName = 'ContactButton';

export { buttonVariants };
export default Button; 