import { useEffect, useState } from 'react';

/** Hash routing (#/components/button) so the site works from any static host, GitHub Pages included. */
export function useRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, '') || 'introduction';
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

/** Where this site serves the shadcn registry from (docs/public/r → <site>/r/). */
export function registryUrl(name: string) {
  const base = window.location.href.split('#')[0]!.replace(/[^/]*$/, '');
  return `${base}r/${name}.json`;
}
