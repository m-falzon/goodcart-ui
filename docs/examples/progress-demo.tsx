import { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';

export default function ProgressDemo() {
  const [value, setValue] = useState(20);
  useEffect(() => {
    const id = setInterval(() => setValue((v) => (v >= 100 ? 10 : v + 15)), 900);
    return () => clearInterval(id);
  }, []);
  return <Progress value={value} aria-label="Upload progress" className="w-full max-w-xs" />;
}
