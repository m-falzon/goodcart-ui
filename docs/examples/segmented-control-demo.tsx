import { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

import { SegmentedControl, SegmentedControlItem } from '@/components/ui/segmented-control';

export default function SegmentedControlDemo() {
  const [device, setDevice] = useState('desktop');
  return (
    <SegmentedControl value={device} onValueChange={setDevice} aria-label="Screenshot device">
      <SegmentedControlItem value="desktop" aria-label="Desktop">
        <Monitor />
      </SegmentedControlItem>
      <SegmentedControlItem value="mobile" aria-label="Mobile">
        <Smartphone />
      </SegmentedControlItem>
    </SegmentedControl>
  );
}
