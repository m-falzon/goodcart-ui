import { Info } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertDemo() {
  return (
    <Alert className="max-w-lg">
      <Info />
      <AlertTitle>Screenshots refresh weekly</AlertTitle>
      <AlertDescription>Captures older than 90 days are flagged for a re-shoot.</AlertDescription>
    </Alert>
  );
}
