import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function PageHeader({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: ReactNode; children?: ReactNode }) {
  return (
    <header className="mb-10 flex flex-col gap-3">
      {eyebrow && <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>}
      <h1 className="text-4xl font-medium tracking-tight text-foreground">{title}</h1>
      {description && <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>}
      {children}
    </header>
  );
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn('mb-4 mt-14 border-b border-border pb-2 text-2xl font-medium tracking-tight first:mt-0', className)}>{children}</h2>;
}

export function H3({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('mb-3 mt-10 text-lg font-medium tracking-tight', className)}>{children}</h3>;
}

export function P({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('mb-4 max-w-2xl leading-7 text-foreground/90', className)}>{children}</p>;
}

export function Code({ children }: { children: ReactNode }) {
  return <code className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">{children}</code>;
}

export function Steps({ children }: { children: ReactNode }) {
  return <ol className="mb-6 ml-4 flex list-none flex-col gap-8 border-l border-border pl-8 [counter-reset:step]">{children}</ol>;
}

export function Step({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="relative [counter-increment:step] before:absolute before:-left-[3.05rem] before:flex before:size-7 before:items-center before:justify-center before:rounded-full before:bg-track before:text-xs before:font-medium before:content-[counter(step)]">
      <h3 className="mb-3 font-medium">{title}</h3>
      {children}
    </li>
  );
}
