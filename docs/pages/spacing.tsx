import { Code, H2, P, PageHeader } from '../components/prose';

const SCALE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];

export function Spacing() {
  return (
    <>
      <PageHeader eyebrow="Foundations" title="Spacing" description="Tailwind's 4px scale. Stick to the steps below so layouts share a rhythm." />
      <div className="flex flex-col gap-3">
        {SCALE.map((step) => (
          <div key={step} className="flex items-center gap-4">
            <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">{step}</span>
            <span className="w-14 shrink-0 font-mono text-xs text-muted-foreground">{step * 4}px</span>
            <span className="h-4 rounded-sm bg-primary" style={{ width: step * 4 }} />
          </div>
        ))}
      </div>

      <H2>Conventions</H2>
      <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 leading-7">
        <li>Page gutters: <Code>px-4</Code> on phones, <Code>sm:px-6</Code>, <Code>lg:px-8</Code>. Max content width 1440px.</li>
        <li>Card padding <Code>p-6</Code>; dialog padding <Code>p-6</Code>.</li>
        <li>Gaps between related controls <Code>gap-2</Code>; between form fields <Code>gap-4</Code>–<Code>gap-6</Code>.</li>
        <li>Gallery grid <Code>gap-6</Code> on desktop, <Code>gap-4</Code> on phones.</li>
      </ul>
      <P className="mt-6">Touch targets are at least 40px (<Code>h-10</Code>); small buttons (36px) are for dense admin toolbars.</P>
    </>
  );
}
