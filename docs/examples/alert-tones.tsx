import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertTones() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Alert variant="success">
        <CheckCircle2 />
        <AlertTitle>Website published</AlertTitle>
        <AlertDescription>Allbirds is live in the gallery.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTriangle />
        <AlertTitle>Cookie banner in shot</AlertTitle>
        <AlertDescription>Re-capture with Consent-O-Matic enabled.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <XCircle />
        <AlertTitle>Crawl failed</AlertTitle>
        <AlertDescription>The site blocked our crawler. Try the find-urls agent.</AlertDescription>
      </Alert>
    </div>
  );
}
