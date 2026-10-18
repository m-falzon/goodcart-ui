import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import pkg from '../package.json';
import { useRoute } from './lib/route';
import { FLAT_NAV, NAV } from './nav';
import { ComponentPage } from './pages/component-page';
import { Colors } from './pages/colors';
import { Installation } from './pages/installation';
import { Introduction } from './pages/introduction';
import { Motion } from './pages/motion';
import { Radius } from './pages/radius';
import { Shadows } from './pages/shadows';
import { Spacing } from './pages/spacing';
import { Theming } from './pages/theming';
import { Typography } from './pages/typography';

const PAGES: Record<string, () => JSX.Element> = {
  introduction: Introduction,
  installation: Installation,
  theming: Theming,
  'foundations/colors': Colors,
  'foundations/typography': Typography,
  'foundations/spacing': Spacing,
  'foundations/radius': Radius,
  'foundations/shadows': Shadows,
  'foundations/motion': Motion,
};

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('gc-theme', dark ? 'dark' : 'light');
    } catch {
      // Storage blocked: theme still applies for this visit
    }
  }, [dark]);
  return [dark, setDark] as const;
}

function Sidebar({ route, onNavigate }: { route: string; onNavigate?: () => void }) {
  return (
    <nav aria-label="Docs" className="flex flex-col gap-8 pb-10">
      {NAV.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <h4 className="mb-1 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{group.title}</h4>
          {group.items.map((item) => (
            <a
              key={item.slug}
              href={`#/${item.slug}`}
              onClick={onNavigate}
              aria-current={route === item.slug ? 'page' : undefined}
              className={cn(
                'rounded-full px-3 py-1.5 text-sm transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                route === item.slug ? 'bg-track font-medium text-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              {item.title}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}

function Pager({ route }: { route: string }) {
  const index = FLAT_NAV.findIndex((item) => item.slug === route);
  const prev = FLAT_NAV[index - 1];
  const next = FLAT_NAV[index + 1];
  return (
    <div className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-6">
      {prev ? (
        <Button asChild variant="outline">
          <a href={`#/${prev.slug}`}>
            <ArrowLeft /> {prev.title}
          </a>
        </Button>
      ) : (
        <span />
      )}
      {next && (
        <Button asChild variant="outline">
          <a href={`#/${next.slug}`}>
            {next.title} <ArrowRight />
          </a>
        </Button>
      )}
    </div>
  );
}

export function App() {
  const route = useRoute();
  const [dark, setDark] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const Page = PAGES[route];
  const componentSlug = route.startsWith('components/') ? route.slice('components/'.length) : null;
  const title = FLAT_NAV.find((item) => item.slug === route)?.title;

  useEffect(() => {
    document.title = title ? `${title} · GoodCart Design System` : 'GoodCart Design System';
  }, [title]);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow-md">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="-ml-2 lg:hidden" aria-label="Open navigation" onClick={() => setMenuOpen(true)}>
            <Menu />
          </Button>
          <a href="#/introduction" className="flex items-center gap-2.5" aria-label="GoodCart Design System home">
            <img src="./goodcart-logo.svg" alt="" className="h-6 w-auto dark:invert" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:inline">Design System</span>
          </a>
          <Badge variant="neutral" className="font-mono">v{pkg.version}</Badge>
          <div className="ml-auto flex items-center gap-1">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="#/installation">Install</a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="#/components/button">Components</a>
            </Button>
            <Button variant="ghost" size="icon" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setDark(!dark)}>
              {dark ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="absolute inset-0 bg-overlay/60" onClick={() => setMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85vw] overflow-y-auto bg-background p-4 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <img src="./goodcart-logo.svg" alt="GoodCart" className="h-6 w-auto dark:invert" />
              <Button variant="ghost" size="icon" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
                <X />
              </Button>
            </div>
            <Sidebar route={route} onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-[1440px] gap-10 px-4 sm:px-6 lg:px-8">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto pt-8 lg:block">
          <Sidebar route={route} />
        </aside>
        <main id="main" tabIndex={-1} className="min-w-0 flex-1 pb-20 pt-10 focus:outline-none lg:pt-12">
          <div className="mx-auto max-w-4xl">
            {Page ? <Page /> : componentSlug ? <ComponentPage key={componentSlug} slug={componentSlug} /> : <Introduction />}
            <Pager route={route} />
          </div>
        </main>
      </div>
    </div>
  );
}
