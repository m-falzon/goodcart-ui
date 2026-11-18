import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThumbsUpLoader } from '@/components/ui/thumbs-up-loader';

export default function ThumbsUpLoaderDemo() {
  const [run, setRun] = useState(0);
  return (
    <div className="flex flex-col items-center gap-10 py-6">
      {/* key remounts the loader so the entrance plays again */}
      <ThumbsUpLoader key={run} />
      <Button variant="outline" size="sm" onClick={() => setRun((n) => n + 1)}>
        <RotateCcw />
        Replay
      </Button>
    </div>
  );
}
