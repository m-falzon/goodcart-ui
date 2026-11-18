'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '../../lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex max-h-dvh flex-col-reverse items-center gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+1.75rem)] outline-none sm:pb-10',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

// Dark pill that rises from the bottom; swipe down to dismiss.
const toastVariants = cva(
  'group pointer-events-auto relative flex min-h-9 max-w-full origin-bottom items-center gap-2.5 rounded-[18px] bg-foreground py-1.5 pl-4 pr-4 text-meta leading-5 text-background shadow-toast has-[[data-toast-action]]:pr-1.5 data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out data-[swipe=end]:animate-menu-out motion-reduce:data-[state=open]:animate-fade-in data-[swipe=cancel]:translate-y-0 data-[swipe=end]:translate-y-[var(--radix-toast-swipe-end-y)] data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)] data-[swipe=move]:transition-none motion-reduce:animate-none',
  {
    variants: {
      variant: {
        default: '',
        success: '',
        // Same dark pill; the Toaster adds a light-red alert icon
        destructive: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
));
Toast.displayName = ToastPrimitives.Root.displayName;

/** Inline text button, e.g. "Undo". */
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    data-toast-action=""
    className={cn(
      'inline-flex h-7 shrink-0 items-center justify-center rounded-full bg-background/[0.12] px-3 text-meta font-medium text-background transition-colors duration-fast hover:bg-background/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/60 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    toast-close=""
    className={cn(
      'inline-flex size-6 shrink-0 items-center justify-center rounded-full opacity-70 transition-opacity duration-fast hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/60',
      className
    )}
    {...props}
  >
    <X className="size-3.5" />
    <span className="sr-only">Dismiss</span>
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => <ToastPrimitives.Title ref={ref} className={cn('inline font-medium', className)} {...props} />);
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn('inline text-background/65', className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

/* ─── toast() store ─────────────────────────────────────────────────────────
   Call toast({ title, action }) from anywhere; <Toaster /> renders the queue. */

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

type State = { toasts: ToasterToast[] };
type Action =
  | { type: 'ADD'; toast: ToasterToast }
  | { type: 'UPDATE'; toast: Partial<ToasterToast> & { id: string } }
  | { type: 'DISMISS'; id?: string }
  | { type: 'REMOVE'; id?: string };

let count = 0;
const genId = () => (count = (count + 1) % Number.MAX_SAFE_INTEGER).toString();

const removeTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
const queueRemove = (id: string) => {
  if (removeTimeouts.has(id)) return;
  removeTimeouts.set(
    id,
    setTimeout(() => {
      removeTimeouts.delete(id);
      dispatch({ type: 'REMOVE', id });
    }, TOAST_REMOVE_DELAY)
  );
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return { toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) };
    case 'UPDATE':
      return { toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)) };
    case 'DISMISS': {
      state.toasts.forEach((t) => (action.id === undefined || t.id === action.id) && queueRemove(t.id));
      return {
        toasts: state.toasts.map((t) => (action.id === undefined || t.id === action.id ? { ...t, open: false } : t)),
      };
    }
    case 'REMOVE':
      return { toasts: action.id === undefined ? [] : state.toasts.filter((t) => t.id !== action.id) };
  }
}

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

function toast(props: Omit<ToasterToast, 'id'>) {
  const id = genId();
  const dismiss = () => dispatch({ type: 'DISMISS', id });
  const update = (next: Partial<ToasterToast>) => dispatch({ type: 'UPDATE', toast: { ...next, id } });
  dispatch({
    type: 'ADD',
    toast: { ...props, id, open: true, onOpenChange: (open) => !open && dismiss() },
  });
  return { id, dismiss, update };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const i = listeners.indexOf(setState);
      if (i > -1) listeners.splice(i, 1);
    };
  }, []);
  return { ...state, toast, dismiss: (id?: string) => dispatch({ type: 'DISMISS', id }) };
}

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  toast,
  useToast,
};
