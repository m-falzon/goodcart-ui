import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium tracking-[0.01em] transition-[color,background-color,border-color,transform] duration-fast ease-out active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        secondary: 'bg-control text-foreground hover:bg-control-hover',
        outline: 'border border-border-strong bg-transparent text-foreground hover:border-input hover:bg-accent',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        // Filled pill for controls sitting on canvas: sort, filters, icon buttons in the header
        control: 'bg-control text-foreground hover:bg-control-hover active:scale-[0.97] [&_svg]:text-ring aria-pressed:bg-selected aria-pressed:text-selected-foreground aria-pressed:hover:bg-selected-hover aria-pressed:[&_svg]:text-selected-foreground',
        /** Dark selected state for applying filters, etc. */
        selected: 'bg-selected text-selected-foreground hover:bg-selected-hover',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        link: 'text-foreground underline underline-offset-4 decoration-border-strong hover:decoration-foreground',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        default: 'h-10 px-5 sm:px-6',
        lg: 'h-12 px-7',
        icon: 'size-10 [&_svg]:size-5',
        'icon-sm': 'size-9 [&_svg]:size-[18px]',
      },
      shape: {
        pill: 'rounded-full',
        square: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'pill',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, shape, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
