import { Badge } from '@/components/ui/badge';

export default function BadgeOverlay() {
  return (
    <div className="relative w-56 overflow-hidden rounded-2xl border border-border">
      <img src="./examples/shot-home.svg" alt="" className="aspect-[4/3] w-full object-cover object-top" />
      <Badge variant="overlay" className="absolute right-2 top-2">
        New
      </Badge>
    </div>
  );
}
