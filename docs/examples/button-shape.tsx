import { Button } from '@/components/ui/button';

export default function ButtonShape() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button shape="square">Square</Button>
      <Button shape="square" variant="outline">
        Square outline
      </Button>
    </div>
  );
}
