import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TabsDemo() {
  return (
    <Tabs defaultValue="home" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="collection">Collection</TabsTrigger>
        <TabsTrigger value="product">Product</TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="text-sm text-muted-foreground">
        Hero sections, navigation and first impressions.
      </TabsContent>
      <TabsContent value="collection" className="text-sm text-muted-foreground">
        Filters, grids and merchandising.
      </TabsContent>
      <TabsContent value="product" className="text-sm text-muted-foreground">
        Galleries, buy boxes and reviews.
      </TabsContent>
    </Tabs>
  );
}
