# GoodCart Design System

Tokens, a Tailwind preset and React components for GoodCart, with a docs site in the style of shadcn/ui.

It lives inside the GoodCart app repo for now but is self-contained (its own `package.json`, `node_modules` and build), so it can be moved to its own repository as is.

## Structure

```
tokens/tokens.json      Source of truth (W3C design tokens format)
tokens/tokens.css       Generated CSS variables. Don't edit; run `npm run tokens`
tailwind-preset.cjs     Maps the tokens to Tailwind (bg-primary, rounded-2xl, ease-out-quart…)
assets/                 Overused Grotesk + fonts.css
src/components/ui/      Components (Radix + Tailwind + cva), shadcn-style source files
src/lib/utils.ts        cn()
registry.json           shadcn registry manifest; built to docs/public/r/*.json
docs/                   The docs site (Vite + React, hash routing)
```

## Develop

```bash
npm install
npm run dev        # http://localhost:9010
npm run tokens     # after editing tokens/tokens.json
npm run build      # tokens → registry → static site in dist/
```

## Use it in an app

**shadcn CLI** (copies source into your app, like shadcn/ui). Host `dist/` anywhere static (GitHub Pages, Vercel), then:

```bash
npx shadcn@latest add https://<docs-host>/r/goodcart-theme.json
npx shadcn@latest add https://<docs-host>/r/button.json
```

**Git package** — no hosting needed. Pin a release tag so updates are deliberate:

```bash
npm install github:m-falzon/goodcart-ui#v0.1.0
```

Components ship as `.tsx` source, so Next.js needs `transpilePackages: ['@goodcart/ui']` in `next.config`, and Tailwind's `content` must include `./node_modules/@goodcart/ui/src/**/*.tsx`.

```tsx
import { Button } from '@goodcart/ui/components/button';
```

```css
@import '@goodcart/ui/fonts.css';
@import '@goodcart/ui/tokens.css';
```

```js
// tailwind.config
presets: [require('@goodcart/ui/tailwind-preset')]
```

## Adding a component

1. Add `src/components/ui/<name>.tsx`. Use relative imports (`../../lib/utils`, `./button`) so Git installs work; the registry build rewrites them to `@/` for the shadcn CLI. Add `'use client'` if it uses Radix, state or event handlers.
2. Add an item to `registry.json` with its npm `dependencies`.
3. Add `docs/examples/<name>-demo.tsx` and an entry in `docs/content/components.ts`.

## Releasing

```bash
npm version minor        # bumps package.json and creates the tag
git push --follow-tags
```

## Known gaps

- The dark theme is a draft; goodcart.co doesn't use it yet.
- The GoodCart app still has its own copies in `src/components/ui/` and its own tokens in `globals.css`. Moving it onto this package is a separate step.
