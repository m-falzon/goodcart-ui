import * as React from 'react';

import { cn } from '../../lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[140px] w-full resize-none rounded-4xl border border-input bg-transparent px-5 py-4 text-base text-foreground caret-brand transition-[border-color,box-shadow] duration-base ease-out placeholder:text-muted-foreground hover:border-input-hover focus:border-input-focus focus:shadow-focus focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:shadow-focus-danger motion-reduce:transition-none',
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export { Textarea };
