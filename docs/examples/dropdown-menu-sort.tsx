import { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const SORTS = ['Latest', 'Oldest', 'A–Z'];

export default function DropdownMenuSort() {
  const [sort, setSort] = useState('Latest');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="control">
          <ArrowDownUp /> {sort}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          {SORTS.map((s) => (
            <DropdownMenuRadioItem key={s} value={s}>
              {s}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
