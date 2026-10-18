import { ArrowRight, Blocks, Palette, Package } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { CodeBlock } from '../components/code-block';
import { H2, P, PageHeader } from '../components/prose';

const PILLARS = [
  { icon: Palette, title: 'Tokens', href: '#/foundations/colors', body: 'Colour, type, radius, shadow and motion in one tokens.json, compiled to CSS variables.' },
  { icon: Blocks, title: 'Components', href: '#/components/button', body: 'Accessible React components on Radix, styled with Tailwind and the tokens.' },
  { icon: Package, title: 'Registry', href: '#/installation', body: 'Install any component with the shadcn CLI, or copy the source. You own the code.' },
];

export function Introduction() {
  return (
    <>
      <PageHeader
        eyebrow="Getting started"
        title="GoodCart Design System"
        description="The warm, quiet interface language behind GoodCart. Tokens, a Tailwind preset and a set of components you copy into your app."
      >
        <div className="mt-2 flex flex-wrap gap-2">
          <Button asChild>
            <a href="#/installation">
              Get started <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#/components/button">Browse components</a>
          </Button>
        </div>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-3">
        {PILLARS.map(({ icon: Icon, title, href, body }) => (
          <a key={title} href={href} className="group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Card className="h-full transition-colors duration-fast group-hover:border-border-strong group-hover:bg-canvas">
              <CardHeader>
                <Icon className="mb-2 size-5" aria-hidden />
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription>{body}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>

      <H2>Principles</H2>
      <ul className="mb-6 flex max-w-2xl flex-col gap-3 leading-7">
        <li><strong className="font-medium">The work is the hero.</strong> GoodCart shows other people's design. Chrome stays neutral and warm so screenshots carry the colour.</li>
        <li><strong className="font-medium">Warm, never grey.</strong> Every neutral leans brown. Use the palette's tints instead of Tailwind's slate or gray.</li>
        <li><strong className="font-medium">Soft geometry.</strong> Pills for controls you press or type in, 16px corners for containers.</li>
        <li><strong className="font-medium">Red is rare.</strong> The brand red marks the logo and genuinely new things. Status uses the muted success, warning and danger tones.</li>
        <li><strong className="font-medium">Accessible by default.</strong> AA text contrast, visible focus rings, labelled icon buttons and reduced-motion support.</li>
      </ul>

      <H2>How it's organised</H2>
      <P>Like shadcn/ui, this isn't a black-box package. The registry ships source files that land in your <code>components/ui</code> folder, so you can change them.</P>
      <CodeBlock
        code={`design-system/
├── tokens/
│   ├── tokens.json        # source of truth (W3C design tokens)
│   └── tokens.css         # generated CSS variables — npm run tokens
├── tailwind-preset.cjs    # maps tokens to Tailwind classes
├── assets/                # Overused Grotesk + fonts.css
├── src/
│   ├── lib/utils.ts       # cn()
│   └── components/ui/     # the components
├── registry.json          # shadcn registry manifest
└── docs/                  # this site (Vite)`}
      />
    </>
  );
}
