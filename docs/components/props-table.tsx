import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="rounded-xl border border-border">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[22%]">Prop</TableHead>
            <TableHead className="w-[30%]">Type</TableHead>
            <TableHead className="w-[14%]">Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name} className="hover:bg-transparent">
              <TableCell className="font-mono text-[13px] font-medium">{prop.name}</TableCell>
              <TableCell className="font-mono text-[13px] text-muted-foreground">{prop.type}</TableCell>
              <TableCell className="font-mono text-[13px] text-muted-foreground">{prop.default ?? '—'}</TableCell>
              <TableCell className="text-muted-foreground">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
