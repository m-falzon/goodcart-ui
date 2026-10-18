import type { PropDef } from '../components/props-table';

export interface ComponentDoc {
  examples: { name: string; title?: string; description?: string }[];
  usage: string;
  radix?: string;
  goodcart?: boolean;
  props?: { name: string; props: PropDef[] }[];
  guidelines?: string[];
}

const radix = (name: string) => `https://www.radix-ui.com/primitives/docs/components/${name}`;
const className: PropDef = { name: 'className', type: 'string', description: 'Merged last, so it overrides any variant class.' };

export const DOCS: Record<string, ComponentDoc> = {
  button: {
    examples: [
      { name: 'button-demo' },
      { name: 'button-variants', title: 'Variants', description: 'One primary per view. Secondary and outline for supporting actions, ghost for toolbars.' },
      { name: 'button-sizes', title: 'Sizes' },
      { name: 'button-icon', title: 'With icon', description: 'Icons are sized automatically. Use a spinning Loader2 and disable the button while it works.' },
      { name: 'button-shape', title: 'Square', description: 'For dense admin layouts and button groups.' },
      { name: 'button-as-child', title: 'As link', description: 'asChild hands the styles to its child, so links stay links.' },
    ],
    usage: `import { Button } from '@/components/ui/button';

<Button variant="outline" size="sm">Save</Button>`,
    props: [
      {
        name: 'Button',
        props: [
          { name: 'variant', type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'", default: "'default'", description: 'Visual weight.' },
          { name: 'size', type: "'sm' | 'default' | 'lg' | 'icon'", default: "'default'", description: '36, 40 or 48px tall; icon is a 40px square.' },
          { name: 'shape', type: "'pill' | 'square'", default: "'pill'", description: 'Fully rounded or 8px corners.' },
          { name: 'asChild', type: 'boolean', default: 'false', description: 'Render the child element (e.g. <a>) with button styles.' },
          className,
        ],
      },
    ],
    guidelines: [
      'Start labels with a verb: "Add website", not "Website".',
      'Icon-only buttons need an aria-label.',
      'Use destructive only for the action that deletes; pair it with an Alert Dialog.',
    ],
  },
  badge: {
    examples: [
      { name: 'badge-demo' },
      { name: 'badge-status', title: 'Status', description: 'Muted tones for pipeline and review states. Text meets AA on each fill.' },
    ],
    usage: `import { Badge } from '@/components/ui/badge';

<Badge variant="success">On site</Badge>`,
    props: [
      {
        name: 'Badge',
        props: [
          { name: 'variant', type: "'default' | 'secondary' | 'neutral' | 'outline' | 'success' | 'warning' | 'danger' | 'brand'", default: "'default'", description: 'Colour and meaning.' },
          className,
        ],
      },
    ],
    guidelines: ['Badges are labels, not buttons. For clickable chips use Tag.', 'Reserve brand (red) for "New".'],
  },
  input: {
    examples: [
      { name: 'input-demo' },
      { name: 'input-label', title: 'With label and hint' },
      { name: 'input-invalid', title: 'Invalid', description: 'Set aria-invalid and point aria-describedby at the error message.' },
      { name: 'input-disabled', title: 'Disabled' },
    ],
    usage: `import { Input } from '@/components/ui/input';

<Input type="email" placeholder="you@example.com" />`,
    guidelines: ['Always pair with a visible Label; placeholders are hints, not labels.', 'Inputs are 16px on phones so iOS doesn’t zoom on focus.'],
  },
  textarea: {
    examples: [{ name: 'textarea-demo' }],
    usage: `import { Textarea } from '@/components/ui/textarea';

<Textarea placeholder="Your message" />`,
  },
  label: {
    examples: [{ name: 'label-demo' }],
    radix: radix('label'),
    usage: `import { Label } from '@/components/ui/label';

<Label htmlFor="email">Email</Label>`,
  },
  checkbox: {
    examples: [{ name: 'checkbox-demo' }, { name: 'checkbox-description', title: 'With description' }],
    radix: radix('checkbox'),
    usage: `import { Checkbox } from '@/components/ui/checkbox';

<Checkbox id="terms" />`,
  },
  switch: {
    examples: [{ name: 'switch-demo' }],
    radix: radix('switch'),
    usage: `import { Switch } from '@/components/ui/switch';

<Switch id="insights" />`,
    guidelines: ['Switches apply immediately. If the change waits for a Save button, use a Checkbox.'],
  },
  select: {
    examples: [{ name: 'select-demo' }],
    radix: radix('select'),
    usage: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Industry" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apparel">Apparel</SelectItem>
  </SelectContent>
</Select>`,
  },
  card: {
    examples: [{ name: 'card-demo' }],
    usage: `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter>…</CardFooter>
</Card>`,
  },
  alert: {
    examples: [{ name: 'alert-demo' }, { name: 'alert-tones', title: 'Tones' }],
    usage: `import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

<Alert variant="warning">
  <AlertTriangle />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>…</AlertDescription>
</Alert>`,
    props: [{ name: 'Alert', props: [{ name: 'variant', type: "'default' | 'success' | 'warning' | 'danger'", default: "'default'", description: 'Tone.' }, className] }],
  },
  tabs: {
    examples: [{ name: 'tabs-demo' }],
    radix: radix('tabs'),
    usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

<Tabs defaultValue="home">
  <TabsList>
    <TabsTrigger value="home">Home</TabsTrigger>
  </TabsList>
  <TabsContent value="home">…</TabsContent>
</Tabs>`,
    guidelines: ['Tabs swap panels on the same page. To switch a filter or view mode, use Segmented Control.'],
  },
  'segmented-control': {
    goodcart: true,
    examples: [{ name: 'segmented-control-demo' }, { name: 'segmented-control-text', title: 'Text labels' }],
    radix: radix('toggle-group'),
    usage: `import { SegmentedControl, SegmentedControlItem } from '@/components/ui/segmented-control';

<SegmentedControl value={device} onValueChange={setDevice} aria-label="Device">
  <SegmentedControlItem value="desktop">Desktop</SegmentedControlItem>
  <SegmentedControlItem value="mobile">Mobile</SegmentedControlItem>
</SegmentedControl>`,
    props: [
      {
        name: 'SegmentedControl',
        props: [
          { name: 'value', type: 'string', description: 'Controlled value.' },
          { name: 'defaultValue', type: 'string', description: 'Uncontrolled starting value.' },
          { name: 'onValueChange', type: '(value: string) => void', description: 'Never called with an empty value; one item is always on.' },
          className,
        ],
      },
    ],
  },
  tag: {
    goodcart: true,
    examples: [
      { name: 'tag-demo', },
      { name: 'tag-removable', title: 'Removable', description: 'For tag pickers in the admin. The remove button gets its own label.' },
    ],
    usage: `import { Tag } from '@/components/ui/tag';

<Tag selected={on} onClick={() => setOn(!on)}>Beauty</Tag>`,
    props: [
      {
        name: 'Tag',
        props: [
          { name: 'variant', type: "'default' | 'soft'", default: "'default'", description: 'Outlined filter chip or filled tag.' },
          { name: 'selected', type: 'boolean', description: 'Makes the tag a toggle button (aria-pressed).' },
          { name: 'onRemove', type: '() => void', description: 'Adds an × button.' },
          className,
        ],
      },
    ],
  },
  dialog: {
    examples: [{ name: 'dialog-demo' }],
    radix: radix('dialog'),
    usage: `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>
  </DialogContent>
</Dialog>`,
  },
  'alert-dialog': {
    examples: [{ name: 'alert-dialog-demo' }],
    radix: radix('alert-dialog'),
    usage: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent } from '@/components/ui/alert-dialog';`,
    guidelines: [
      'Name the thing in the title: "Delete Allbirds?", not "Are you sure?".',
      'Say what happens and whether it can be undone.',
      'Repeat the verb on the confirm button. Never "OK".',
      'Needs Button installed too (it uses buttonVariants).',
    ],
  },
  tooltip: {
    examples: [{ name: 'tooltip-demo' }],
    radix: radix('tooltip'),
    usage: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button size="icon" aria-label="Bookmark" /></TooltipTrigger>
    <TooltipContent>Save to bookmarks</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    guidelines: ['Tooltips don’t show on touch. Never put essential information only in a tooltip.'],
  },
  table: {
    examples: [{ name: 'table-demo' }],
    usage: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';`,
  },
  avatar: {
    examples: [{ name: 'avatar-demo' }],
    radix: radix('avatar'),
    usage: `import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage src={user.photoURL} alt={user.name} />
  <AvatarFallback>MF</AvatarFallback>
</Avatar>`,
  },
  separator: {
    examples: [{ name: 'separator-demo' }],
    radix: radix('separator'),
    usage: `import { Separator } from '@/components/ui/separator';

<Separator />`,
  },
  skeleton: {
    examples: [{ name: 'skeleton-demo' }],
    usage: `import { Skeleton } from '@/components/ui/skeleton';

<Skeleton className="aspect-[4/3] rounded-2xl" />`,
    guidelines: ['Match the shape of what’s loading so the layout doesn’t jump.', 'Mark the container aria-busy.'],
  },
  'screenshot-card': {
    goodcart: true,
    examples: [
      { name: 'screenshot-card-demo' },
      { name: 'screenshot-card-mobile', title: 'Mobile capture', description: 'device="mobile" switches to a 9:16 frame.' },
    ],
    usage: `import { ScreenshotCard } from '@/components/ui/screenshot-card';

<ScreenshotCard
  src={shot.url}
  alt="Allbirds product page"
  brand="Allbirds"
  pageType="Product page"
  href={\`/websites/\${slug}\`}
/>`,
    props: [
      {
        name: 'ScreenshotCard',
        props: [
          { name: 'src', type: 'string', description: 'Screenshot URL. Cropped from the top.' },
          { name: 'alt', type: 'string', description: 'Brand and page type, e.g. "Allbirds product page".' },
          { name: 'brand', type: 'string', description: 'Shown under the image.' },
          { name: 'pageType', type: 'string', description: 'Secondary line.' },
          { name: 'href', type: 'string', description: 'Makes the image a link.' },
          { name: 'device', type: "'desktop' | 'mobile'", default: "'desktop'", description: '4:3 or 9:16 frame.' },
          { name: 'bookmarked', type: 'boolean', description: 'Bookmark state.' },
          { name: 'onBookmarkChange', type: '(bookmarked: boolean) => void', description: 'Shows the bookmark button when set.' },
        ],
      },
    ],
  },
};
