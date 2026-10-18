import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Suggest a website</CardTitle>
        <CardDescription>Know a store with great design? We'll take a look.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="suggest-name">Brand name</Label>
          <Input id="suggest-name" placeholder="Allbirds" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="suggest-url">URL</Label>
          <Input id="suggest-url" type="url" placeholder="https://" />
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="ghost">Cancel</Button>
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}
