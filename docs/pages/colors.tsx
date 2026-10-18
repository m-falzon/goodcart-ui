import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Code, H2, P, PageHeader } from '../components/prose';
import { contrast, palette, resolveHex, roles } from '../lib/tokens';

const light = Object.fromEntries(roles('light'));
const dark = Object.fromEntries(roles('dark'));

function Swatch({ hex, className }: { hex: string; className?: string }) {
  return <span className={`inline-block size-7 shrink-0 rounded-lg border border-black/10 ${className ?? ''}`} style={{ background: hex }} />;
}

function ContrastBadge({ ratio }: { ratio: number }) {
  const variant = ratio >= 4.5 ? 'success' : ratio >= 3 ? 'warning' : 'danger';
  const label = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3 ? 'AA large' : 'Fail';
  return (
    <Badge variant={variant} className="font-mono">
      {ratio.toFixed(1)} · {label}
    </Badge>
  );
}

const PAIRS = ['primary', 'secondary', 'muted', 'accent', 'brand', 'destructive', 'success', 'warning', 'danger', 'card', 'popover'];

export function Colors() {
  return (
    <>
      <PageHeader
        eyebrow="Foundations"
        title="Colours"
        description="A warm palette of off-whites and brown-blacks, with one brand red and three muted status tones."
      />

      <H2>Palette</H2>
      <P>Raw colours, available as <Code>var(--gc-name)</Code>. Reach for these only when no semantic role fits.</P>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {palette.map(([name, token]) => (
          <div key={name} className="overflow-hidden rounded-xl border border-border">
            <div className="h-20 border-b border-border" style={{ background: token.$value }} />
            <div className="flex flex-col gap-0.5 p-3">
              <span className="text-sm font-medium">{name}</span>
              <span className="font-mono text-xs text-muted-foreground">{token.$value}</span>
              {token.$description && <span className="mt-1 text-xs leading-snug text-muted-foreground">{token.$description}</span>}
            </div>
          </div>
        ))}
      </div>

      <H2>Semantic roles</H2>
      <P>
        What components use. Each maps to a Tailwind colour, so <Code>primary</Code> gives <Code>bg-primary</Code>, <Code>text-primary</Code>,{' '}
        <Code>border-primary</Code> and so on.
      </P>
      <div className="rounded-xl border border-border">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Role</TableHead>
              <TableHead>Light</TableHead>
              <TableHead>Dark (draft)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles('light').map(([name, ref]) => (
              <TableRow key={name} className="hover:bg-transparent">
                <TableCell className="font-mono text-[13px]">{name}</TableCell>
                <TableCell>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Swatch hex={resolveHex(ref)} /> {resolveHex(ref)}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Swatch hex={resolveHex(dark[name]!)} /> {resolveHex(dark[name]!)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <H2>Pairs and contrast</H2>
      <P>Foreground text on its fill, light theme. Body text needs 4.5:1 (AA).</P>
      <div className="grid gap-3 sm:grid-cols-2">
        {PAIRS.map((name) => {
          const bg = resolveHex(light[name]!);
          const fg = resolveHex(light[`${name}-foreground`]!);
          return (
            <div key={name} className="flex items-center justify-between gap-3 rounded-xl border border-border p-4" style={{ background: bg, color: fg }}>
              <span className="text-sm font-medium">{name}</span>
              <ContrastBadge ratio={contrast(bg, fg)} />
            </div>
          );
        })}
        <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white p-4" style={{ color: resolveHex(light['muted-foreground']!) }}>
          <span className="text-sm font-medium">muted-foreground on white</span>
          <ContrastBadge ratio={contrast('#FFFFFF', resolveHex(light['muted-foreground']!))} />
        </div>
      </div>
    </>
  );
}
