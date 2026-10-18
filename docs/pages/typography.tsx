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
  { label: 'Caption', className: 'text-xs text-muted-foreground', spec: 'text-xs · 400 · muted', sample: 'Captured 18 Oct 2026' },
];

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
          <div key={row.label} className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{row.label}</span>
              <span className="font-mono text-xs text-muted-foreground">{row.spec}</span>
            </div>
            <p className={`${row.className} min-w-0 break-words`}>{row.sample}</p>
          </div>
        ))}
      </div>

      <H2>Size scale</H2>
      <div className="flex flex-col divide-y divide-border">
        {fontSizes.map(([name, token]) => (
          <div key={name} className="flex items-baseline gap-6 py-3">
            <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">text-{name}</span>
            <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground">{token.$description?.split(' — ')[0]}</span>
            <span className="truncate" style={{ fontSize: token.$value }}>GoodCart</span>
          </div>
        ))}
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
