import { useState } from 'react';

import { Tag } from '@/components/ui/tag';

export default function TagRemovable() {
  const [tags, setTags] = useState(['Sticky add to cart', 'Size guide', 'Reviews']);
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => (
        <Tag key={tag} variant="soft" onRemove={() => setTags(tags.filter((t) => t !== tag))}>
          {tag}
        </Tag>
      ))}
      {tags.length === 0 && <p className="text-sm text-muted-foreground">No patterns tagged.</p>}
    </div>
  );
}
