import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

export default function InputControl() {
  return (
    <div className="w-full max-w-xs">
      <Input variant="control" type="search" placeholder="Search" aria-label="Search websites" leadingIcon={<Search />} />
    </div>
  );
}
