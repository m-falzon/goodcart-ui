import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function InputInvalid() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="brand-name">Brand name</Label>
      <Input id="brand-name" aria-invalid="true" aria-describedby="brand-name-error" defaultValue="" />
      <p id="brand-name-error" className="text-xs text-destructive">
        Enter the brand's name.
      </p>
    </div>
  );
}
