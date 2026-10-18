import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-64" aria-label="Industry">
        <SelectValue placeholder="Choose an industry" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Industry</SelectLabel>
          <SelectItem value="apparel">Apparel</SelectItem>
          <SelectItem value="beauty">Beauty</SelectItem>
          <SelectItem value="food">Food and drink</SelectItem>
          <SelectItem value="home">Home</SelectItem>
          <SelectItem value="outdoor">Outdoor</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
