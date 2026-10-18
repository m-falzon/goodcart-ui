import { CodeBlock } from '../components/code-block';
import { Code, H2, P, PageHeader } from '../components/prose';

export function Theming() {
  return (
    <>
      <PageHeader eyebrow="Getting started" title="Theming" description="Components never use raw colours. They use semantic roles, so changing a role re-colours everything that uses it." />

      <H2>Roles, not colours</H2>
      <P>
        Each role is a CSS variable holding bare HSL channels. Tailwind wraps it in <Code>hsl()</Code>, which keeps opacity modifiers like{' '}
        <Code>bg-primary/90</Code> working. Roles come in pairs: <Code>primary</Code> is the fill, <Code>primary-foreground</Code> is the text on it.
      </P>
      <CodeBlock
        code={`:root {
  --primary: 38.2 21.6% 10%;          /* #1F1B14 */
  --primary-foreground: 0 0% 100%;
}

<button className="bg-primary text-primary-foreground hover:bg-primary/90" />`}
      />

      <H2>Editing tokens</H2>
      <P>
        <Code>tokens/tokens.json</Code> is the source of truth. Palette colours live under <Code>color</Code>; roles under <Code>semantic.light</Code> and{' '}
        <Code>semantic.dark</Code> reference them. Run <Code>npm run tokens</Code> to regenerate <Code>tokens.css</Code> and the registry theme.
      </P>
      <CodeBlock
        title="tokens/tokens.json"
        code={`"semantic": {
  "light": {
    "primary": "{color.dark}",
    "primary-foreground": "{color.white}"
  }
}`}
      />

      <H2>Dark theme</H2>
      <P>
        A warm dark theme is drafted under <Code>.dark</Code>. Add the class to <Code>&lt;html&gt;</Code> to switch, as the toggle in this site's header does.
        It's not used on goodcart.co yet, so treat it as a proposal.
      </P>

      <H2>Scoping a theme</H2>
      <P>Roles are plain CSS variables, so you can re-point them for part of a page. GoodCart's admin area does this with an <Code>.admin-theme</Code> class.</P>
      <CodeBlock
        code={`.campaign {
  --primary: 5.1 80.5% 53.7%;   /* brand red for one landing page */
}`}
      />
    </>
  );
}
