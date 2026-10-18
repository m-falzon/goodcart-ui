import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="./examples/avatar.svg" alt="Profile photo" />
        <AvatarFallback>MF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>GC</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarFallback className="text-xs">AB</AvatarFallback>
      </Avatar>
    </div>
  );
}
