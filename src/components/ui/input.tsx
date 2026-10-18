import * as React from 'react';

import { cn } from '../../lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-full border border-input bg-canvas px-5 text-base text-foreground transition-colors duration-fast placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-input-focus focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive md:text-sm',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export { Input };
