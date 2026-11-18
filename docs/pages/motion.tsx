import { useState } from 'react';
import { Play } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { CodeBlock } from '../components/code-block';
import { H2, P, PageHeader } from '../components/prose';
import { durations, easings, spring } from '../lib/tokens';

function Curve({ points }: { points: number[] }) {
  const [x1, y1, x2, y2] = points;
  return (
    <svg viewBox="-4 -4 108 108" className="size-24 shrink-0 overflow-visible text-foreground" aria-hidden>
      <rect x="0" y="0" width="100" height="100" className="fill-none stroke-border" />
      <path d={`M0 100 C${x1! * 100} ${100 - y1! * 100} ${x2! * 100} ${100 - y2! * 100} 100 0`} className="fill-none stroke-current" strokeWidth="2.5" />
    </svg>
  );
}

export function Motion() {
  const [run, setRun] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Foundations"
        title="Motion"
        description="Natural deceleration, with a small spring reserved for menus and pop-ins. Motion confirms an action or shows where something came from; it never decorates."
      />

      <H2>Easing</H2>
      <div className="mb-4 flex justify-end">
        <Button variant="outline" size="sm" onClick={() => setRun((r) => !r)}>
          <Play /> Play
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {easings.map(([name, token]) => (
          <div key={name} className="flex items-center gap-5 rounded-xl border border-border p-4">
            <Curve points={token.$value} />
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div>
                <p className="font-mono text-sm">ease-{name}</p>
                <p className="font-mono text-xs text-muted-foreground">cubic-bezier({token.$value.join(', ')})</p>
                {token.$description && <p className="text-xs text-muted-foreground">{token.$description}</p>}
              </div>
              <div className="h-2 rounded-full bg-track">
                <div
                  className="size-2 rounded-full bg-primary"
                  style={{
                    marginLeft: run ? 'calc(100% - 0.5rem)' : 0,
                    transition: `margin-left 900ms cubic-bezier(${token.$value.join(',')})`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <H2>Spring</H2>
      <P>
        <code className="font-mono text-sm">ease-[var(--ease-spring)]</code> — {spring.$description}
      </P>

      <H2>Duration</H2>
      <div className="grid gap-4 sm:grid-cols-3">
        {durations.map(([name, token]) => (
          <div key={name} className="rounded-xl border border-border p-4">
            <p className="font-mono text-sm">duration-{name}</p>
            <p className="font-mono text-xs text-muted-foreground">{token.$value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{token.$description}</p>
          </div>
        ))}
      </div>

      <H2>Usage</H2>
      <P>The preset makes ease-out-quart and 200ms the defaults, so a bare <code>transition-colors</code> already feels right. Reduced-motion users get no animation.</P>
      <CodeBlock code={`<div className="transition-transform duration-slow ease-out-expo" />`} />
    </>
  );
}
