import { Code, H2, P, PageHeader } from '../components/prose';
import { radii } from '../lib/tokens';

export function Radius() {
  return (
    <>
      <PageHeader eyebrow="Foundations" title="Radius" description="Pills for controls, generous 16px corners for containers." />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {radii.map(([name, token]) => (
          <div key={name} className="flex flex-col gap-3">
            <div className="h-24 border border-border-strong bg-secondary" style={{ borderRadius: token.$value }} />
            <div>
              <p className="font-mono text-sm">rounded-{name}</p>
              <p className="font-mono text-xs text-muted-foreground">{token.$value}</p>
              {token.$description && <p className="text-xs text-muted-foreground">{token.$description}</p>}
            </div>
          </div>
        ))}
      </div>
      <H2>Where each one goes</H2>
      <P>
        <Code>rounded-full</Code>: buttons, inputs, selects, tags, tabs, segmented controls, badges. <Code>rounded-5xl</Code>: dialogs, sheets, the account
        menu and the viewer. <Code>rounded-4xl</Code>: textareas and context menus. <Code>rounded-3xl</Code>: filter and sort menus, popovers. <Code>rounded-2xl</Code>: cards, dialogs, screenshot tiles, textareas.{' '}
        <Code>rounded-xl</Code>: alerts, menu rows, code blocks. <Code>rounded-lg</Code>: tooltips, square buttons, skeletons.
      </P>
    </>
  );
}
