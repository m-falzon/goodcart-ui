import { Bookmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Bookmark">
            <Bookmark />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Save to bookmarks</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
