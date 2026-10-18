import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import { cn } from '@/lib/utils';

/**
 * A single-choice pill switcher, e.g. the gallery's Desktop / Mobile toggle.
 * Always has a value — clicking the active item does not clear it.
 */
const SegmentedControl = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  Omit<ToggleGroupPrimitive.ToggleGroupSingleProps, 'type'>
>(({ className, onValueChange, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    type="single"
    onValueChange={(value) => value && onValueChange?.(value)}
    className={cn('inline-flex items-center gap-1 rounded-full bg-track p-1', className)}
    {...props}
  />
));
SegmentedControl.displayName = 'SegmentedControl';

const SegmentedControlItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      'inline-flex h-8 min-w-[60px] items-center justify-center gap-1.5 rounded-full px-3 text-sm font-medium text-muted-foreground transition-colors duration-slow ease-out-quart hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-xs [&_svg]:size-5',
      className
    )}
    {...props}
  />
));
SegmentedControlItem.displayName = 'SegmentedControlItem';

export { SegmentedControl, SegmentedControlItem };
