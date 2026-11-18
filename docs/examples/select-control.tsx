import { useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const INDUSTRIES = ['Fashion & Apparel', 'Home & Furniture', 'Beauty', 'Outdoor & Travel'];

export default function SelectControl() {
  const [industry, setIndustry] = useState<string>();
  return (
    <div>
      <Select value={industry} onValueChange={setIndustry}>
        <SelectTrigger variant="control" active={!!industry} aria-label="Industry filter">
          <SelectValue placeholder="Industries" />
        </SelectTrigger>
        <SelectContent className="w-auto">
          {INDUSTRIES.map((i) => (
            <SelectItem key={i} value={i}>
              {i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
