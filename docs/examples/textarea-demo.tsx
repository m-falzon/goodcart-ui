import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function TextareaDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="feedback">Feedback</Label>
      <Textarea id="feedback" placeholder="What should GoodCart do better?" />
    </div>
  );
}
