import { useLayoutEffect, useRef, useState } from 'react';

import { CodeBlock } from '../components/code-block';
import { Code, H2, P, PageHeader } from '../components/prose';
import { fontSizes, fontWeights } from '../lib/tokens';

const HIERARCHY = [
  { label: 'Display', className: 'text-5xl font-medium tracking-tight', spec: 'text-5xl · 500 · tracking-tight', sample: 'Ecommerce design inspiration' },
  { label: 'H1', className: 'text-4xl font-medium tracking-tight', spec: 'text-4xl · 500 · tracking-tight', sample: 'Product page designs' },
  { label: 'H2', className: 'text-3xl font-medium tracking-tight', spec: 'text-3xl · 500', sample: 'Best collection pages of 2026' },
  { label: 'H3', className: 'text-2xl font-medium', spec: 'text-2xl · 500', sample: 'Sticky add to cart' },
  { label: 'Title', className: 'text-xl font-medium', spec: 'text-xl · 500', sample: 'Card and dialog titles' },
  { label: 'Lead', className: 'text-lg text-muted-foreground', spec: 'text-lg · 400 · muted', sample: 'A curated gallery of the best DTC store designs.' },
  { label: 'Body', className: 'text-base leading-7', spec: 'text-base · 400 · leading-7', sample: 'Browse real screenshots from hundreds of independent brands, filtered by page type and pattern.' },
  { label: 'UI', className: 'text-sm font-medium', spec: 'text-sm · 500', sample: 'Buttons, tabs and navigation' },
  { label: 'Meta', className: 'text-meta font-medium text-muted-foreground', spec: 'text-meta (13px) · 500 · muted', sample: 'Fashion & Apparel · Outdoor & Travel' },
  { label: 'Caption', className: 'text-xs text-muted-foreground', spec: 'text-xs · 400 · muted', sample: 'Captured 18 Oct 2026' },
  { label: 'Overline', className: 'text-2xs font-medium uppercase tracking-wider text-muted-foreground', spec: 'text-2xs (11px) · 500 · uppercase', sample: 'Report 2026' },
];

// Line heights the preset pairs with each size: Tailwind's defaults plus the preset's 2xs, meta and md
const LINE_HEIGHTS: Record<string, string> = {
  '2xs': '1rem',
  xs: '1rem',
  meta: '1.125rem',
  sm: '1.25rem',
  md: '1.375rem',
  base: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  '2xl': '2rem',
  '3xl': '2.25rem',
  '4xl': '2.5rem',
  '5xl': '1',
};

const px = (rem: string, base = 16) => (rem.endsWith('rem') ? `${parseFloat(rem) * base}px` : rem);
const lineHeightPx = (lh: string, sizeRem: string) => (lh.endsWith('rem') ? px(lh) : `${parseFloat(lh) * parseFloat(px(sizeRem))}px`);

/** Reads the rendered size and line height so the spec can't drift from the classes. */
function HierarchyRow({ row }: { row: (typeof HIERARCHY)[number] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [metrics, setMetrics] = useState('');
  useLayoutEffect(() => {
    if (!ref.current) return;
    const { fontSize, lineHeight } = getComputedStyle(ref.current);
    const round = (v: string) => `${Math.round(parseFloat(v) * 100) / 100}px`;
    setMetrics(`${round(fontSize)} / ${lineHeight === 'normal' ? 'normal' : round(lineHeight)}`);
  }, []);
  return (
    <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">{row.label}</span>
        <span className="font-mono text-xs text-foreground">{metrics}</span>
        <span className="font-mono text-xs text-muted-foreground">{row.spec}</span>
      </div>
      <p ref={ref} className={`${row.className} min-w-0 break-words`}>
        {row.sample}
      </p>
    </div>
  );
}

export function Typography() {
  return (
    <>
      <PageHeader
        eyebrow="Foundations"
        title="Typography"
        description="Overused Grotesk, a variable grotesque. Headings sit at medium weight with tight tracking; nothing heavier than semibold."
      />

      <div className="mb-4 rounded-2xl bg-canvas p-8 sm:p-12">
        <p className="text-7xl font-medium tracking-tight sm:text-8xl">Aa</p>
        <p className="mt-4 text-lg">Overused Grotesk</p>
        <p className="mt-1 break-words font-mono text-sm text-muted-foreground">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
      </div>

      <H2>Hierarchy</H2>
      <div className="flex flex-col divide-y divide-border">
        {HIERARCHY.map((row) => (
          <HierarchyRow key={row.label} row={row} />
        ))}
      </div>

      <H2>Size scale</H2>
      <P>Size / line height in px, at the default 16px root.</P>
      <div className="flex flex-col divide-y divide-border">
        <div className="flex gap-6 pb-2 font-mono text-2xs uppercase tracking-wider text-muted-foreground">
          <span className="w-20 shrink-0">Class</span>
          <span className="w-28 shrink-0">Size / line</span>
          <span className="w-28 shrink-0 max-sm:hidden">rem</span>
        </div>
        {fontSizes.map(([name, token]) => {
          const lh = LINE_HEIGHTS[name] ?? '1.5';
          return (
            <div key={name} className="flex items-baseline gap-6 py-3">
              <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">text-{name}</span>
              <span className="w-28 shrink-0 font-mono text-xs text-foreground">
                {px(token.$value)} / {lineHeightPx(lh, token.$value)}
              </span>
              <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground max-sm:hidden">
                {token.$value} / {lh}
              </span>
              <span className="truncate" style={{ fontSize: token.$value, lineHeight: lh }}>
                GoodCart
              </span>
            </div>
          );
        })}
      </div>

      <H2>Weights</H2>
      <div className="grid gap-4 sm:grid-cols-3">
        {fontWeights.map(([name, token]) => (
          <div key={name} className="rounded-xl border border-border p-5">
            <p className="text-3xl" style={{ fontWeight: token.$value }}>Aa</p>
            <p className="mt-2 text-sm">{name}</p>
            <p className="font-mono text-xs text-muted-foreground">{token.$value}</p>
          </div>
        ))}
      </div>

      <H2>Usage</H2>
      <P>Font family is set by the preset; use Tailwind's size utilities. Long-form content (blog) uses <Code>prose prose-lg</Code> from @tailwindcss/typography.</P>
      <CodeBlock code={`<h1 className="text-4xl font-medium tracking-tight">Product page designs</h1>
<p className="text-lg text-muted-foreground">A curated gallery…</p>`} />
    </>
  );
}
