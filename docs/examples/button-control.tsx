import { useState } from 'react';
import { ArrowDownUp, Bookmark } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ButtonControl() {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="control">
        <ArrowDownUp /> Latest
      </Button>
      <Button variant="control" aria-pressed={pressed} onClick={() => setPressed(!pressed)}>
        Free shipping
      </Button>
      <Button variant="control" size="icon-sm" aria-label="Bookmarks">
        <Bookmark />
      </Button>
    </div>
  );
}
