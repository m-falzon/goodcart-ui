'use client';

import * as React from 'react';
import { Bookmark } from 'lucide-react';

import { cn } from '../../lib/utils';

export interface ScreenshotCardProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt: string;
  brand: string;
  /** e.g. "Product page" — shown under the brand name */
  pageType?: string;
  href?: string;
  /** Portrait for mobile captures, landscape for desktop */
  device?: 'desktop' | 'mobile';
  bookmarked?: boolean;
  onBookmarkChange?: (bookmarked: boolean) => void;
}

/** Gallery tile: a cropped page screenshot with brand and page type underneath. */
const ScreenshotCard = React.forwardRef<HTMLElement, ScreenshotCardProps>(
  ({ className, src, alt, brand, pageType, href, device = 'desktop', bookmarked, onBookmarkChange, ...props }, ref) => {
    const image = (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="size-full object-cover object-top transition-transform duration-slow ease-out-quart group-hover:scale-[1.02]"
      />
    );
    return (
      <article ref={ref} className={cn('group flex flex-col gap-3', className)} {...props}>
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl border border-border bg-secondary',
            device === 'desktop' ? 'aspect-[4/3]' : 'aspect-[9/16]'
          )}
        >
          {href ? (
            <a href={href} className="block size-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring">
              {image}
            </a>
          ) : (
            image
          )}
          {onBookmarkChange && (
            <button
              type="button"
              aria-pressed={bookmarked}
              aria-label={bookmarked ? `Remove ${brand} from bookmarks` : `Bookmark ${brand}`}
              onClick={() => onBookmarkChange(!bookmarked)}
              className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur transition-opacity duration-fast hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-pressed:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
            >
              <Bookmark className={cn('size-4', bookmarked && 'fill-current')} aria-hidden />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-0.5 px-1">
          <h3 className="text-sm font-medium leading-tight text-foreground">{brand}</h3>
          {pageType && <p className="text-xs text-muted-foreground">{pageType}</p>}
        </div>
      </article>
    );
  }
);
ScreenshotCard.displayName = 'ScreenshotCard';

export { ScreenshotCard };
