// Runs after `shadcn build`. Components use relative imports so they work when installed
// from Git; the shadcn CLI expects @/ aliases (which it rewrites to the consumer's paths).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../docs/public/r/', import.meta.url));

for (const file of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
  const item = JSON.parse(readFileSync(dir + file, 'utf8'));
  for (const f of item.files ?? []) {
    f.content = f.content
      ?.replace(/from '\.\.\/\.\.\/lib\/([\w-]+)'/g, "from '@/lib/$1'")
      .replace(/from '\.\/([\w-]+)'/g, "from '@/components/ui/$1'");
  }
  writeFileSync(dir + file, `${JSON.stringify(item, null, 2)}\n`);
}
