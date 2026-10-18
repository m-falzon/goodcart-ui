import { Button } from '@/components/ui/button';

export default function ButtonAsChild() {
  return (
    <Button asChild variant="outline">
      <a href="#/components/button">I'm a link</a>
    </Button>
  );
}
