import { ExternalLink } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import registry from '../../registry.json';
import { CodeBlock } from '../components/code-block';
import { ComponentPreview } from '../components/component-preview';
import { H2, H3, P, PageHeader } from '../components/prose';
import { PropsTable } from '../components/props-table';
import { DOCS } from '../content/components';
import { getComponentSource } from '../lib/examples';
import { registryUrl } from '../lib/route';

export function ComponentPage({ slug }: { slug: string }) {
  const item = registry.items.find((i) => i.name === slug && i.type === 'registry:ui');
  const doc = DOCS[slug];
  if (!item || !doc) return <PageHeader title="Not found" description="There's no component with that name." />;
  const [primary, ...more] = doc.examples;
  const deps = item.dependencies ?? [];

  return (
    <>
      <PageHeader eyebrow="Components" title={item.title} description={item.description}>
        <div className="flex flex-wrap gap-2">
          {doc.radix && (
            <a href={doc.radix} target="_blank" rel="noreferrer" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Badge variant="secondary">
                Radix primitive <ExternalLink />
              </Badge>
            </a>
          )}
          {doc.goodcart && <Badge variant="brand">GoodCart</Badge>}
        </div>
      </PageHeader>

      {primary && <ComponentPreview name={primary.name} />}

      <H2>Installation</H2>
      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent value="cli">
          <CodeBlock code={`npx shadcn@latest add ${registryUrl(slug)}`} />
        </TabsContent>
        <TabsContent value="manual" className="flex flex-col gap-4">
          {deps.length > 0 && (
            <>
              <P className="mb-0">Install the dependencies:</P>
              <CodeBlock code={`npm install ${deps.join(' ')}`} />
            </>
          )}
          <P className="mb-0">
            Copy into <code>components/ui/{slug}.tsx</code>:
          </P>
          <CodeBlock code={getComponentSource(slug)} />
        </TabsContent>
      </Tabs>

      <H2>Usage</H2>
      <CodeBlock code={doc.usage} />

      {more.length > 0 && (
        <>
          <H2>Examples</H2>
          {more.map((example) => (
            <section key={example.name}>
              <H3>{example.title}</H3>
              {example.description && <P>{example.description}</P>}
              <ComponentPreview name={example.name} />
            </section>
          ))}
        </>
      )}

      {doc.props && (
        <>
          <H2>API</H2>
          {doc.props.map((group) => (
            <section key={group.name}>
              <H3 className="font-mono text-base">{group.name}</H3>
              <PropsTable props={group.props} />
            </section>
          ))}
        </>
      )}

      {doc.guidelines && (
        <>
          <H2>Guidelines</H2>
          <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 leading-7">
            {doc.guidelines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
