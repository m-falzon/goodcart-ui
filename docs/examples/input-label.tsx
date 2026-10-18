import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function InputWithLabel() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="website-url">Website URL</Label>
      <Input id="website-url" type="url" placeholder="https://" />
      <p className="text-xs text-muted-foreground">The homepage, without tracking parameters.</p>
    </div>
  );
}
