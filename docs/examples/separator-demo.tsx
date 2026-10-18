import { Separator } from '@/components/ui/separator';

export default function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-medium">GoodCart</h4>
        <p className="text-sm text-muted-foreground">Ecommerce design inspiration.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <a href="#/">Gallery</a>
        <Separator orientation="vertical" />
        <a href="#/">Blog</a>
        <Separator orientation="vertical" />
        <a href="#/">Bookmarks</a>
      </div>
    </div>
  );
}
