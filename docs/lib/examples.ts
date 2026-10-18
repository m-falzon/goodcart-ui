import type { ComponentType } from 'react';

const modules = import.meta.glob<{ default: ComponentType }>('../examples/*.tsx', { eager: true });
const sources = import.meta.glob<string>('../examples/*.tsx', { eager: true, query: '?raw', import: 'default' });
const componentSources = import.meta.glob<string>('../../src/components/ui/*.tsx', { eager: true, query: '?raw', import: 'default' });

export function getExample(name: string) {
  const key = `../examples/${name}.tsx`;
  const mod = modules[key];
  if (!mod) throw new Error(`Missing example: ${name}`);
  return { Component: mod.default, code: sources[key]!.trim() };
}

export function getComponentSource(name: string) {
  return componentSources[`../../src/components/ui/${name}.tsx`]?.trim() ?? '';
}
