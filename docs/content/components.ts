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
      { name: 'button-control', title: 'Control', description: 'Filled pills for toolbars on the canvas: sort, filters, header icons. aria-pressed turns it dark.' },
      { name: 'button-shape', title: 'Square', description: 'For dense admin layouts and button groups.' },
      { name: 'button-as-child', title: 'As link', description: 'asChild hands the styles to its child, so links stay links.' },
    ],
    usage: `import { Button } from '@/components/ui/button';

<Button variant="outline" size="sm">Save</Button>`,
    props: [
      {
        name: 'Button',
        props: [
          { name: 'variant', type: "'default' | 'secondary' | 'outline' | 'ghost' | 'control' | 'selected' | 'destructive' | 'link'", default: "'default'", description: 'Visual weight. selected is the dark brown used for applied filters.' },
          { name: 'size', type: "'sm' | 'default' | 'lg' | 'icon' | 'icon-sm'", default: "'default'", description: '36, 40 or 48px tall at 16px text (sm is 14px); icon is a 40px square with a 20px glyph, icon-sm 36px.' },
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
      { name: 'badge-overlay', title: 'Overlay', description: 'Translucent dark chip for labels on top of imagery, like "New" on a screenshot.' },
    ],
    usage: `import { Badge } from '@/components/ui/badge';

<Badge variant="success">On site</Badge>`,
    props: [
      {
        name: 'Badge',
        props: [
          { name: 'variant', type: "'default' | 'secondary' | 'neutral' | 'outline' | 'success' | 'warning' | 'danger' | 'destructive' | 'brand' | 'overlay'", default: "'default'", description: 'Colour and meaning.' },
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
      { name: 'input-icon', title: 'With icon', description: 'As in sign-in: the icon darkens and grows slightly while the field has focus.' },
      { name: 'input-control', title: 'Search', description: 'variant="control" drops the border for a filled pill; leadingIcon places an icon inside.' },
    ],
    usage: `import { Input } from '@/components/ui/input';

<Input type="email" placeholder="you@example.com" />`,
    props: [
      {
        name: 'Input',
        props: [
          { name: 'variant', type: "'field' | 'control'", default: "'field'", description: '48px bordered field (hover darkens the border, focus adds a soft halo) or 44px filled search pill.' },
          { name: 'leadingIcon', type: 'ReactNode', description: 'Decorative icon inside the left edge.' },
          { name: 'wrapperClassName', type: 'string', description: 'Classes for the wrapper; only rendered with leadingIcon.' },
          className,
        ],
      },
    ],
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
    examples: [
      { name: 'select-demo' },
      { name: 'select-control', title: 'Filter pill', description: 'variant="control" for gallery filters. Pass active once a value is chosen.' },
    ],
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
    props: [
      {
        name: 'SelectTrigger',
        props: [
          { name: 'variant', type: "'field' | 'control'", default: "'field'", description: 'Full-width form field or auto-width filter pill.' },
          { name: 'active', type: 'boolean', default: 'false', description: 'control only: dark selected state.' },
          className,
        ],
      },
    ],
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
    props: [{ name: 'Alert', props: [{ name: 'variant', type: "'default' | 'success' | 'warning' | 'danger' | 'destructive'", default: "'default'", description: 'Tone. destructive is the same as danger.' }, className] }],
  },
  tabs: {
    examples: [
      { name: 'tabs-demo' },
      { name: 'tabs-underline', title: 'Underline', description: 'Page-type navigation. For route links, apply tabsTriggerVariants({ variant: "underline" }) to the link and set data-state="active" on the current one.' },
    ],
    radix: radix('tabs'),
    usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

<Tabs defaultValue="home">
  <TabsList>
    <TabsTrigger value="home">Home</TabsTrigger>
  </TabsList>
  <TabsContent value="home">…</TabsContent>
</Tabs>`,
    props: [
      {
        name: 'TabsList',
        props: [
          { name: 'variant', type: "'pill' | 'underline'", default: "'pill'", description: 'Triggers inherit it.' },
          className,
        ],
      },
    ],
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
          { name: 'variant', type: "'default' | 'soft' | 'outline'", default: "'default'", description: 'Filled filter chip (as in the filter sheet), lighter tag, or outlined chip.' },
          { name: 'selected', type: 'boolean', description: 'Makes the tag a toggle button (aria-pressed).' },
          { name: 'onRemove', type: '() => void', description: 'Adds an × button.' },
          className,
        ],
      },
    ],
  },
  dialog: {
    examples: [
      { name: 'dialog-demo' },
      { name: 'dialog-viewer', title: 'Viewer', description: 'size="viewer" fills the screen with an 8–16px margin, for the screenshot viewer. Bring your own top bar and close button.' },
    ],
    radix: radix('dialog'),
    usage: `import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>
  </DialogContent>
</Dialog>`,
    props: [
      {
        name: 'DialogContent',
        props: [
          { name: 'size', type: "'default' | 'lg' | 'viewer'", default: "'default'", description: '512px, 768px or near full-screen.' },
          { name: 'showClose', type: 'boolean', default: 'true', description: 'Corner close button.' },
          className,
        ],
      },
    ],
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
  'thumbs-up-loader': {
    goodcart: true,
    examples: [
      { name: 'thumbs-up-loader-demo' },
      { name: 'thumbs-up-loader-label', title: 'Custom label', description: 'The label is also what screen readers announce.' },
    ],
    usage: `import { ThumbsUpLoader } from '@/components/ui/thumbs-up-loader';

<div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#F9F6F4]">
  <ThumbsUpLoader />
</div>`,
    props: [
      {
        name: 'ThumbsUpLoader',
        props: [
          { name: 'label', type: 'string', default: "'Signing you in'", description: 'Text under the mark, announced via role="status".' },
          className,
        ],
      },
    ],
    guidelines: [
      'For full-page waits such as sign-in redirects, not inline or button loading; use a spinning Loader2 there.',
      'Centre it in the whole viewport, header included, so it sits at true centre.',
      'Under reduced motion it shows the still mark and label.',
    ],
  },
  'dropdown-menu': {
    examples: [
      { name: 'dropdown-menu-demo' },
      { name: 'dropdown-menu-sort', title: 'Sort', description: 'A radio group behind a control button, like the gallery’s Latest menu.' },
    ],
    radix: radix('dropdown-menu'),
    usage: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="control">Account</Button></DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>Bookmarks</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    props: [
      {
        name: 'DropdownMenuItem',
        props: [
          { name: 'inset', type: 'boolean', description: 'Indent to line up with items that have icons.' },
          { name: 'destructive', type: 'boolean', description: 'Red text for delete actions.' },
          className,
        ],
      },
    ],
    guidelines: ['For picking a value in a form, use Select. Dropdown Menu is for actions and view options.'],
  },
  popover: {
    examples: [{ name: 'popover-demo' }],
    radix: radix('popover'),
    usage: `import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

<Popover>
  <PopoverTrigger asChild><Button variant="control">Fonts</Button></PopoverTrigger>
  <PopoverContent>…</PopoverContent>
</Popover>`,
    guidelines: ['Same surface as menus: frosted white, 20px corners, shadow-menu.', 'Use Sheet instead on phones when the content is long.'],
  },
  sheet: {
    examples: [{ name: 'sheet-demo' }],
    radix: radix('dialog'),
    usage: `import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

<Sheet>
  <SheetTrigger asChild><Button>Filters</Button></SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>`,
    props: [
      {
        name: 'SheetContent',
        props: [
          { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'right'", description: 'Edge it slides from. Bottom adds safe-area padding.' },
          { name: 'handle', type: 'boolean', default: 'false', description: 'Grab handle at the top of a bottom sheet.' },
          { name: 'showClose', type: 'boolean', default: 'true', description: 'Corner close button.' },
          className,
        ],
      },
    ],
  },
  toast: {
    examples: [{ name: 'toast-demo', description: 'Mount <Toaster /> once near the root, then call toast() from anywhere.' }],
    radix: radix('toast'),
    usage: `import { Toaster, ToastAction, toast } from '@/components/ui/toaster';

toast({
  title: 'Added to Default',
  action: <ToastAction altText="Undo" onClick={undo}>Undo</ToastAction>,
});`,
    props: [
      {
        name: 'toast()',
        props: [
          { name: 'title', type: 'ReactNode', description: 'One short line.' },
          { name: 'description', type: 'ReactNode', description: 'Optional second part, dimmed.' },
          { name: 'action', type: 'ToastActionElement', description: 'A ToastAction, e.g. Undo. Needs altText.' },
          { name: 'variant', type: "'default' | 'success' | 'destructive'", default: "'default'", description: 'Destructive turns it red.' },
          { name: 'duration', type: 'number', default: '4000', description: 'Milliseconds before it hides.' },
        ],
      },
    ],
    guidelines: ['Confirm what happened in past tense: "Added to Default".', 'Offer Undo instead of a confirm dialog for reversible actions.'],
  },
  progress: {
    examples: [{ name: 'progress-demo' }],
    radix: radix('progress'),
    usage: `import { Progress } from '@/components/ui/progress';

<Progress value={60} aria-label="Upload progress" />`,
  },
  'screenshot-card': {
    goodcart: true,
    examples: [
      { name: 'screenshot-card-demo' },
      { name: 'screenshot-card-gallery', title: 'Gallery', description: 'As on the home page: a "New" badge, dot-separated meta and onOpen to launch the viewer.' },
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
          { name: 'pageType', type: 'string', description: 'Secondary line. Ignored when meta is set.' },
          { name: 'meta', type: 'ReactNode[]', description: 'Dot-separated items under the brand: categories, "3 states", or your own filter links.' },
          { name: 'href', type: 'string', description: 'Makes the image a link.' },
          { name: 'onOpen', type: '() => void', description: 'Makes the image a button, e.g. to open the viewer. Ignored with href.' },
          { name: 'badge', type: 'ReactNode', description: 'Top-right overlay, e.g. <Badge variant="overlay">New</Badge>.' },
          { name: 'device', type: "'desktop' | 'mobile'", default: "'desktop'", description: '4:3 or 9:16 frame.' },
          { name: 'bookmarked', type: 'boolean', description: 'Bookmark state.' },
          { name: 'onBookmarkChange', type: '(bookmarked: boolean) => void', description: 'Shows the bookmark button beside the brand.' },
          { name: 'actions', type: 'ReactNode', description: 'Replaces the bookmark button, e.g. a collections dropdown.' },
          { name: 'loading', type: "'lazy' | 'eager'", default: "'lazy'", description: 'Use eager for the first row.' },
          { name: 'imageClassName', type: 'string', description: 'Classes for the <img>, e.g. a different object-position.' },
        ],
      },
    ],
  },
};
