import { ArrowUpRight, Bookmark, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="outline">
        <Bookmark /> Save
      </Button>
      <Button variant="ghost">
        Visit site <ArrowUpRight />
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" /> Saving
      </Button>
    </div>
  );
}
