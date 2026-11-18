import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function DialogViewer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open viewer</Button>
      </DialogTrigger>
      <DialogContent size="viewer" showClose={false}>
        <header className="flex items-center gap-3 border-b border-border px-5 py-3">
          <div className="min-w-0 flex-1">
            <DialogTitle className="text-base">Northwind</DialogTitle>
            <DialogDescription className="text-meta">Product page</DialogDescription>
          </div>
          <DialogClose asChild>
            <Button variant="control" size="icon-sm" aria-label="Close">
              <X />
            </Button>
          </DialogClose>
        </header>
        <div className="flex-1 overflow-y-auto bg-canvas p-5">
          <img src="./examples/shot-product.svg" alt="Northwind product page" className="mx-auto w-full max-w-4xl rounded-2xl border border-border" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
