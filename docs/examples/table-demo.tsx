import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ROWS = [
  { brand: 'Allbirds', page: 'Product', status: 'On site', date: '12 Oct 2026' },
  { brand: 'Glossier', page: 'Home', status: 'Pending', date: '15 Oct 2026' },
  { brand: 'Rapha', page: 'Collection', status: 'Blocked', date: '16 Oct 2026' },
  { brand: 'Aesop', page: 'Product', status: 'On site', date: '17 Oct 2026' },
] as const;

const TONE = { 'On site': 'success', Pending: 'warning', Blocked: 'danger' } as const;

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>Screenshot queue</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Brand</TableHead>
          <TableHead>Page</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Added</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ROWS.map((row) => (
          <TableRow key={row.brand}>
            <TableCell className="font-medium">{row.brand}</TableCell>
            <TableCell>{row.page}</TableCell>
            <TableCell>
              <Badge variant={TONE[row.status]}>{row.status}</Badge>
            </TableCell>
            <TableCell className="text-right text-muted-foreground">{row.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
