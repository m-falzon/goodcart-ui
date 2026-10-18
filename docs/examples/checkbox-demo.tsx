import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="desktop" defaultChecked />
        <Label htmlFor="desktop">Desktop screenshot</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="mobile" />
        <Label htmlFor="mobile">Mobile screenshot</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="archived" disabled />
        <Label htmlFor="archived">Archived</Label>
      </div>
    </div>
  );
}
