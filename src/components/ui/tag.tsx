'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '../../lib/utils';

const tagVariants = cva(
  'inline-flex min-h-10 items-center gap-1.5 rounded-full border px-4 text-md transition-[background-color,border-color,color,transform] duration-fast ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 motion-reduce:active:scale-100 [&_svg]:size-4',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-control text-foreground hover:bg-control-hover aria-pressed:bg-selected aria-pressed:font-medium aria-pressed:text-selected-foreground',
        soft: 'border-transparent bg-secondary text-foreground hover:bg-track aria-pressed:bg-track',
        outline: 'border-border bg-background text-foreground hover:border-border-strong aria-pressed:border-selected aria-pressed:bg-selected aria-pressed:text-selected-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof tagVariants> {
  /** Filter chips: pass `selected` to make the tag a toggle (sets aria-pressed). */
  selected?: boolean;
  /** Shows a remove button; the tag itself stays clickable. */
  onRemove?: () => void;
}

/** Filter chip for gallery filters and tag pickers. */
const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  ({ className, variant, selected, onRemove, children, ...props }, ref) => {
    const button = (
      <button
        ref={ref}
        type="button"
        aria-pressed={selected}
        className={cn(tagVariants({ variant }), onRemove && 'pr-8', className)}
        {...props}
      >
        {children}
      </button>
    );
    if (!onRemove) return button;
    return (
      <span className="relative inline-flex">
        {button}
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${typeof children === 'string' ? children : 'tag'}`}
          className="absolute right-1.5 top-1/2 inline-flex size-5 -translate-y-1/2 items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-3.5"
        >
          <X aria-hidden />
        </button>
      </span>
    );
  }
);
Tag.displayName = 'Tag';

export { Tag, tagVariants };
