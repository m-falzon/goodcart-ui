'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-overlay/30 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const dialogContentVariants = cva(
  'fixed z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:duration-[480ms] data-[state=closed]:duration-fast data-[state=open]:ease-drawer data-[state=closed]:ease-in-quart motion-reduce:animate-none',
  {
    variants: {
      size: {
        default:
          'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 data-[state=open]:![--tw-enter-translate-x:-50%] data-[state=open]:![--tw-enter-translate-y:calc(-50%_+_56px)] data-[state=closed]:![--tw-exit-translate-x:-50%] data-[state=closed]:![--tw-exit-translate-y:calc(-50%_+_8px)] data-[state=open]:zoom-in-[0.92] data-[state=closed]:zoom-out-100 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-5xl bg-canvas shadow-overlay ring-1 ring-border grid w-[calc(100%-2rem)] max-w-[26rem] gap-6 px-6 pb-10 pt-12 sm:px-10 sm:pb-12 sm:pt-14',
        lg: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 data-[state=open]:![--tw-enter-translate-x:-50%] data-[state=open]:![--tw-enter-translate-y:calc(-50%_+_56px)] data-[state=closed]:![--tw-exit-translate-x:-50%] data-[state=closed]:![--tw-exit-translate-y:calc(-50%_+_8px)] data-[state=open]:zoom-in-[0.92] data-[state=closed]:zoom-out-100 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-5xl bg-canvas shadow-overlay ring-1 ring-border grid w-[calc(100%-2rem)] max-w-3xl gap-6 px-6 pb-10 pt-12 sm:px-10 sm:pb-12 sm:pt-14',
        /** Near full-screen: a top bar (DialogHeader) over a scrolling body. Screenshot viewer. */
        viewer:
          'inset-2 flex flex-col overflow-hidden rounded-5xl bg-background shadow-overlay data-[state=closed]:zoom-out-[0.98] data-[state=open]:zoom-in-[0.96] sm:inset-4',
      },
    },
    defaultVariants: { size: 'default' },
  }
);

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  /** Hide the corner close button when the dialog has its own (the viewer usually does). */
  showClose?: boolean;
}

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ className, children, size, showClose = true, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref} className={cn(dialogContentVariants({ size }), className)} {...props}>
        {children}
        {showClose && (
          <DialogPrimitive.Close className="absolute right-5 top-5 inline-flex size-8 items-center justify-center rounded-full text-ring opacity-70 transition-opacity duration-fast hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6 sm:top-6">
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col items-center gap-3 text-center', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-[1.75rem] font-medium leading-[2.125rem] tracking-[-0.5px] text-foreground', className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-base text-muted-foreground', className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { dialogContentVariants, Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
