import { Check, Clock, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

export default function BadgeStatus() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="success">
        <Check /> On site
      </Badge>
      <Badge variant="warning">
        <Clock /> Pending review
      </Badge>
      <Badge variant="danger">
        <X /> Blocked
      </Badge>
    </div>
  );
}
