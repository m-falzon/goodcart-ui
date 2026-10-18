import { SegmentedControl, SegmentedControlItem } from '@/components/ui/segmented-control';

export default function SegmentedControlText() {
  return (
    <SegmentedControl defaultValue="newest" aria-label="Sort">
      <SegmentedControlItem value="newest">Newest</SegmentedControlItem>
      <SegmentedControlItem value="popular">Popular</SegmentedControlItem>
      <SegmentedControlItem value="a-z">A–Z</SegmentedControlItem>
    </SegmentedControl>
  );
}
