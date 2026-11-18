import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { ScreenshotCard } from '@/components/ui/screenshot-card';

const SHOTS = [
  { brand: 'Northwind', meta: ['Fashion & Apparel', 'Outdoor & Travel'], src: './examples/shot-product.svg', isNew: true },
  { brand: 'Fieldnote', meta: ['Home & Furniture', '3 states'], src: './examples/shot-home.svg', isNew: false },
];

export default function ScreenshotCardGallery() {
  const [saved, setSaved] = useState<string[]>([]);
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
      {SHOTS.map((shot) => (
        <ScreenshotCard
          key={shot.brand}
          src={shot.src}
          alt={`${shot.brand} home page`}
          brand={shot.brand}
          meta={shot.meta}
          badge={shot.isNew && <Badge variant="overlay">New</Badge>}
          onOpen={() => {}}
          bookmarked={saved.includes(shot.brand)}
          onBookmarkChange={(on) => setSaved(on ? [...saved, shot.brand] : saved.filter((b) => b !== shot.brand))}
        />
      ))}
    </div>
  );
}
