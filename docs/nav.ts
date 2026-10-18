import registry from '../registry.json';

export interface NavItem {
  slug: string;
  title: string;
}

const components = registry.items
  .filter((item) => item.type === 'registry:ui')
  .map((item) => ({ slug: `components/${item.name}`, title: item.title }));

export const NAV: { title: string; items: NavItem[] }[] = [
  {
    title: 'Getting started',
    items: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'installation', title: 'Installation' },
      { slug: 'theming', title: 'Theming' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { slug: 'foundations/colors', title: 'Colours' },
      { slug: 'foundations/typography', title: 'Typography' },
      { slug: 'foundations/spacing', title: 'Spacing' },
      { slug: 'foundations/radius', title: 'Radius' },
      { slug: 'foundations/shadows', title: 'Shadows' },
      { slug: 'foundations/motion', title: 'Motion' },
    ],
  },
  { title: 'Components', items: components },
];

export const FLAT_NAV = NAV.flatMap((group) => group.items);
