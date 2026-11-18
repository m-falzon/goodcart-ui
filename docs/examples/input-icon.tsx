import { Mail } from 'lucide-react';

import { Input } from '@/components/ui/input';

export default function InputIcon() {
  return (
    <div className="w-full max-w-sm">
      <Input type="email" placeholder="Email address" aria-label="Email address" autoComplete="email" leadingIcon={<Mail />} />
    </div>
  );
}
