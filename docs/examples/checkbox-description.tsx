import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckboxWithDescription() {
  return (
    <div className="flex max-w-sm items-start gap-3">
      <Checkbox id="newsletter" className="mt-0.5" />
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="newsletter">Weekly inspiration</Label>
        <p className="text-sm text-muted-foreground">Ten new stores in your inbox every Friday. Unsubscribe any time.</p>
      </div>
    </div>
  );
}
