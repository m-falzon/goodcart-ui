import * as React from 'react';

import { cn } from '../../lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-28 w-full rounded-2xl border border-input bg-canvas px-5 py-3 text-base text-foreground transition-colors duration-fast placeholder:text-muted-foreground focus-visible:border-input-focus focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input-focus disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive md:text-sm',
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export { Textarea };
