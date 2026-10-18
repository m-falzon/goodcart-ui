import { Code, P, PageHeader } from '../components/prose';
import { shadows } from '../lib/tokens';

export function Shadows() {
  return (
    <>
      <PageHeader eyebrow="Foundations" title="Shadows" description="Warm-tinted and sparing. Borders do most of the separating; shadows are for things that float." />
      <div className="grid gap-6 rounded-2xl bg-canvas p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
        {shadows.map(([name, token]) => (
          <div key={name} className="flex h-32 flex-col justify-end rounded-2xl bg-background p-4" style={{ boxShadow: token.$value }}>
            <p className="font-mono text-sm">shadow-{name}</p>
          </div>
        ))}
      </div>
      <P className="mt-6">
        <Code>shadow-xs</Code> lifts the active tab or segment. <Code>shadow-sm</Code> for floating buttons over images. <Code>shadow-md</Code> for menus
        and popovers. <Code>shadow-lg</Code> for dialogs and sheets.
      </P>
    </>
  );
}
