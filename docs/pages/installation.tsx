import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CodeBlock } from '../components/code-block';
import { Code, H2, P, PageHeader, Step, Steps } from '../components/prose';
import { registryUrl } from '../lib/route';

export function Installation() {
  return (
    <>
      <PageHeader eyebrow="Getting started" title="Installation" description="Add the GoodCart tokens to a React + Tailwind app, then pull in components as you need them." />

      <Tabs defaultValue="cli">
        <TabsList>
          <TabsTrigger value="cli">shadcn CLI</TabsTrigger>
          <TabsTrigger value="git">Git package</TabsTrigger>
        </TabsList>

        <TabsContent value="cli" className="mt-8">
          <Steps>
            <Step title="Set up shadcn in your app">
              <P>If your project doesn't have a <Code>components.json</Code> yet:</P>
              <CodeBlock code="npx shadcn@latest init" />
            </Step>
            <Step title="Install the GoodCart theme">
              <P>Writes the colour roles and radius into your global CSS.</P>
              <CodeBlock code={`npx shadcn@latest add ${registryUrl('goodcart-theme')}`} />
            </Step>
            <Step title="Add components">
              <P>Each component page has its own command. Dependencies install automatically.</P>
              <CodeBlock code={`npx shadcn@latest add ${registryUrl('button')} ${registryUrl('input')}`} />
            </Step>
            <Step title="Load the font">
              <P>Copy <Code>assets/fonts/OverusedGroteskRoman-VF.woff2</Code> into your public folder and declare it once:</P>
              <CodeBlock
                code={`@font-face {
  font-family: 'Overused Grotesk';
  src: url('/fonts/OverusedGroteskRoman-VF.woff2') format('woff2-variations');
  font-weight: 300 900;
  font-display: swap;
}`}
              />
            </Step>
          </Steps>
        </TabsContent>

        <TabsContent value="git" className="mt-8">
          <Steps>
            <Step title="Install from Git">
              <P>Once the design system lives in its own repository, reference it like any package:</P>
              <CodeBlock code="npm install github:m-falzon/goodcart-ui" />
            </Step>
            <Step title="Import the tokens and font">
              <CodeBlock title="app/globals.css" code={`@import '@goodcart/ui/fonts.css';
@import '@goodcart/ui/tokens.css';

@tailwind base;
@tailwind components;
@tailwind utilities;`} />
            </Step>
            <Step title="Add the Tailwind preset">
              <CodeBlock
                title="tailwind.config.ts"
                code={`export default {
  presets: [require('@goodcart/ui/tailwind-preset')],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@goodcart/ui/src/**/*.tsx',
  ],
};`}
              />
            </Step>
            <Step title="Use components">
              <P>Components import <Code>@/lib/utils</Code>, so map that alias (or install them with the CLI instead).</P>
              <CodeBlock code={`import { Button } from '@goodcart/ui/components/button';`} />
            </Step>
          </Steps>
        </TabsContent>
      </Tabs>

      <H2>Working on the design system</H2>
      <CodeBlock
        code={`cd design-system
npm install
npm run dev       # docs at http://localhost:9010
npm run tokens    # rebuild tokens.css after editing tokens.json
npm run build     # tokens + registry (docs/public/r) + static site (dist/)`}
      />
    </>
  );
}
