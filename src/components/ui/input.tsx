import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const inputVariants = cva(
  'peer flex w-full rounded-full text-base text-foreground caret-brand placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none',
  {
    variants: {
      variant: {
        /** Form field, as in sign-in: 1px border that darkens on focus and grows a soft halo (no 2px jump). */
        field:
          'h-12 border border-input bg-transparent px-5 transition-[border-color,box-shadow] duration-base ease-out hover:border-input-hover focus:border-input-focus focus:shadow-focus aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:shadow-focus-danger',
        /** Borderless filled pill for search and toolbars */
        control:
          'h-11 border border-transparent bg-control px-5 font-medium transition-[background-color,box-shadow] duration-base ease-out hover:bg-control-hover focus:bg-canvas focus:shadow-overlay focus:ring-1 focus:ring-border',
      },
    },
    defaultVariants: { variant: 'field' },
  }
);

export interface InputProps extends React.ComponentProps<'input'>, VariantProps<typeof inputVariants> {
  /** Icon inside the left edge, e.g. <Mail />. Darkens and grows slightly while the field has focus. Decorative; label the input itself. */
  leadingIcon?: React.ReactNode;
  /** Classes for the wrapper that holds the icon and input. Only used with leadingIcon. */
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, leadingIcon, wrapperClassName, ...props }, ref) => {
    const input = (
      <input type={type} ref={ref} className={cn(inputVariants({ variant }), leadingIcon && 'pl-12', className)} {...props} />
    );
    if (!leadingIcon) return input;
    return (
      <div className={cn('group relative w-full', wrapperClassName)} data-invalid={props['aria-invalid'] ? true : undefined}>
        <span
          aria-hidden
          className="pointer-events-none absolute left-5 top-1/2 z-10 flex -translate-y-1/2 text-input-hover transition-[color,transform] duration-base ease-out group-focus-within:scale-110 group-focus-within:text-foreground group-hover:text-muted-foreground group-data-[invalid=true]:!text-destructive motion-reduce:transition-none [&_svg]:size-[18px]"
        >
          {leadingIcon}
        </span>
        {input}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
