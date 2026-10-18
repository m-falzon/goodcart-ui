import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import { getExample } from '../lib/examples';
import { CodeBlock } from './code-block';

export function ComponentPreview({ name, className, align = 'center' }: { name: string; className?: string; align?: 'center' | 'start' }) {
  const { Component, code } = getExample(name);
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div
          className={cn(
            'flex min-h-[320px] w-full flex-wrap gap-4 overflow-x-auto rounded-xl border border-border bg-background p-6 sm:p-10',
            align === 'center' ? 'items-center justify-center' : 'items-start',
            className
          )}
        >
          <TooltipProvider delayDuration={200}>
            <Component />
          </TooltipProvider>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} />
      </TabsContent>
    </Tabs>
  );
}
