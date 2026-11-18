import { Button } from '@/components/ui/button';
import { Toaster, ToastAction, toast } from '@/components/ui/toaster';

export default function ToastDemo() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: 'Added to Default',
            action: (
              <ToastAction altText="Undo adding to Default" onClick={() => toast({ title: 'Removed from Default' })}>
                Undo
              </ToastAction>
            ),
          })
        }
      >
        Save screenshot
      </Button>
      <Toaster />
    </>
  );
}
