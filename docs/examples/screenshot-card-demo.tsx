import { useState } from 'react';

import { ScreenshotCard } from '@/components/ui/screenshot-card';

const SHOTS = [
  { brand: 'Northwind', pageType: 'Product page', src: './examples/shot-product.svg' },
  { brand: 'Fieldnote', pageType: 'Home page', src: './examples/shot-home.svg' },
  { brand: 'Oakwell', pageType: 'Collection page', src: './examples/shot-collection.svg' },
];

export default function ScreenshotCardDemo() {
  const [saved, setSaved] = useState<string[]>(['Fieldnote']);
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
      {SHOTS.map((shot) => (
        <ScreenshotCard
          key={shot.brand}
          {...shot}
          alt={`${shot.brand} ${shot.pageType.toLowerCase()}`}
          href="#/components/screenshot-card"
          bookmarked={saved.includes(shot.brand)}
          onBookmarkChange={(on) => setSaved(on ? [...saved, shot.brand] : saved.filter((b) => b !== shot.brand))}
        />
      ))}
    </div>
  );
}
