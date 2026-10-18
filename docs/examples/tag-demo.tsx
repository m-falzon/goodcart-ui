import { useState } from 'react';

import { Tag } from '@/components/ui/tag';

const FILTERS = ['Apparel', 'Beauty', 'Food and drink', 'Home', 'Outdoor', 'Pets'];

export default function TagDemo() {
  const [selected, setSelected] = useState<string[]>(['Beauty']);
  const toggle = (tag: string) =>
    setSelected((current) => (current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]));
  return (
    <div className="flex max-w-md flex-wrap justify-center gap-2" role="group" aria-label="Industry filters">
      {FILTERS.map((tag) => (
        <Tag key={tag} selected={selected.includes(tag)} onClick={() => toggle(tag)}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}
