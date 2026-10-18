import { useState, type ReactNode } from 'react';
import { Check, Copy } from 'lucide-react';

import { cn } from '@/lib/utils';

// Tiny highlighter: enough for TSX, CSS and shell snippets without a dependency.
const TOKEN = /(\/\/.*|\/\*[\s\S]*?\*\/|'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`[^`]*`)|(<\/?[A-Za-z][\w.]*)|\b(import|from|export|default|const|let|function|return|type|interface|extends|if|else|true|false|null|undefined)\b|(--[\w-]+)/g;

function highlight(code: string) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of code.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) out.push(code.slice(last, index));
    const [text, literal, tag, keyword, cssVar] = match;
    const color = literal
      ? text.startsWith('/') ? 'text-[#8C857A]' : 'text-[#C9E4CB]'
      : tag ? 'text-[#F2C6BF]' : keyword ? 'text-[#F6DFAF]' : cssVar ? 'text-[#D9C9F2]' : '';
    out.push(<span key={index} className={color}>{text}</span>);
    last = index + text.length;
  }
  out.push(code.slice(last));
  return out;
}

export function CodeBlock({ code, className, title }: { code: string; className?: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked in iframes; the code is still selectable
    }
  };
  return (
    <div className={cn('relative overflow-hidden rounded-xl border border-[#332D24] bg-[#1F1B14] text-[#F7F4F2]', className)}>
      {title && <div className="border-b border-[#332D24] px-4 py-2 font-mono text-xs text-[#A8A196]">{title}</div>}
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy code'}
        className="absolute right-2.5 top-2.5 inline-flex size-8 items-center justify-center rounded-lg text-[#A8A196] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8A196]"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
      <pre className="max-h-[480px] overflow-auto p-4 pr-12 font-mono text-[13px] leading-relaxed">
        <code>{highlight(code)}</code>
      </pre>
    </div>
  );
}
