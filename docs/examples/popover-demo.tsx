import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tag } from '@/components/ui/tag';

const FONTS = ['Serif', 'Sans', 'Mono', 'Display', 'Script'];

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="control">
          Fonts <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-wrap gap-2">
        {FONTS.map((f) => (
          <Tag key={f}>{f}</Tag>
        ))}
      </PopoverContent>
    </Popover>
  );
}
