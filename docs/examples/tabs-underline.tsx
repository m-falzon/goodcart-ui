import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PAGES = ['Home', 'Collection', 'Product', 'Search', 'Menu', 'Cart', 'Checkout'];

export default function TabsUnderline() {
  return (
    <Tabs defaultValue="Home" className="w-full overflow-x-auto">
      <TabsList variant="underline">
        {PAGES.map((p) => (
          <TabsTrigger key={p} value={p}>
            {p}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
