'use client';

import { CircleAlert } from 'lucide-react';

import { Toast, ToastAction, ToastDescription, ToastProvider, ToastTitle, ToastViewport, toast, useToast } from './toast';

/** Mount once near the root. Renders whatever toast() queues as a one-line dark pill. */
export function Toaster({ duration = 4000 }: { duration?: number }) {
  const { toasts } = useToast();
  return (
    <ToastProvider duration={duration} swipeDirection="down">
      {toasts.map(({ id, title, description, action, variant, ...props }) => (
        <Toast key={id} variant={variant} {...props}>
          {variant === 'destructive' && <CircleAlert aria-hidden className="size-4 shrink-0 text-[#F28B82]" strokeWidth={1.75} />}
          <div className="min-w-0 py-0.5">
            {title && <ToastTitle>{title}</ToastTitle>}
            {title && description && ' '}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}

// Re-exported so `toast()` can be imported from either file.
export { toast, ToastAction };
