'use client';

import * as React from 'react';
import { Bookmark } from 'lucide-react';

import { cn } from '../../lib/utils';

export interface ScreenshotCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  src: string;
  alt: string;
  brand: string;
  /** e.g. "Product page" — shown under the brand name. Ignored when meta is set. */
  pageType?: string;
  /** Items under the brand, dot-separated: categories, "3 states". Strings or your own links/buttons. */
  meta?: React.ReactNode[];
  /** Link for the image. Use onOpen instead when the image opens a viewer. */
  href?: string;
  /** Makes the image a button, e.g. to open the viewer dialog. Ignored when href is set. */
  onOpen?: () => void;
  /** Portrait for mobile captures, landscape for desktop */
  device?: 'desktop' | 'mobile';
  /** Overlay in the image's top-right corner, e.g. <Badge variant="overlay">New</Badge> */
  badge?: React.ReactNode;
  bookmarked?: boolean;
  /** Shows the built-in bookmark button beside the brand. */
  onBookmarkChange?: (bookmarked: boolean) => void;
  /** Replaces the built-in bookmark button, e.g. a dropdown for choosing collections. */
  actions?: React.ReactNode;
  /** Pass 'eager' for the first row so it isn't lazy-loaded. */
  loading?: 'lazy' | 'eager';
  imageClassName?: string;
}

/** Gallery tile: a cropped page screenshot with brand, meta and a bookmark underneath. */
const ScreenshotCard = React.forwardRef<HTMLElement, ScreenshotCardProps>(
  (
    {
      className,
      src,
      alt,
      brand,
      pageType,
      meta,
      href,
      onOpen,
      device = 'desktop',
      badge,
      bookmarked,
      onBookmarkChange,
      actions,
      loading = 'lazy',
      imageClassName,
      ...props
    },
    ref
  ) => {
    const image = (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn(
          'size-full object-cover object-top transition-transform duration-slow ease-out-quart group-hover:scale-[1.02] motion-reduce:transition-none',
          imageClassName
        )}
      />
    );
    const focusRing = 'block size-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring';
    const metaItems = meta ?? (pageType ? [pageType] : []);
    const trailing =
      actions ??
      (onBookmarkChange && (
        <button
          type="button"
          aria-pressed={bookmarked}
          aria-label={bookmarked ? `Remove ${brand} from bookmarks` : `Bookmark ${brand}`}
          onClick={() => onBookmarkChange(!bookmarked)}
          className="-mr-1.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-ring transition-[background-color,transform] duration-fast hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-90"
        >
          <Bookmark className={cn('size-5', bookmarked && 'fill-current')} aria-hidden />
        </button>
      ));

    return (
      <article ref={ref} className={cn('group flex flex-col gap-3.5', className)} {...props}>
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl border border-border bg-secondary',
            device === 'desktop' ? 'aspect-[4/3]' : 'aspect-[9/16]'
          )}
        >
          {href ? (
            <a href={href} className={focusRing}>
              {image}
            </a>
          ) : onOpen ? (
            <button type="button" onClick={onOpen} aria-label={`View ${alt}`} className={cn(focusRing, 'cursor-zoom-in')}>
              {image}
            </button>
          ) : (
            image
          )}
          {badge && <div className="pointer-events-none absolute right-2 top-2 z-10">{badge}</div>}
        </div>
        <div className="flex flex-col gap-0.5 px-0.5">
          <div className="flex min-h-8 items-center justify-between gap-2">
            <h3 className="min-w-0 truncate text-base font-medium leading-tight text-foreground">{brand}</h3>
            {trailing}
          </div>
          {metaItems.length > 0 && (
            <div className="-mt-1.5 flex flex-wrap items-center gap-1.5 text-meta font-medium text-muted-foreground">
              {metaItems.map((item, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span aria-hidden className="block size-[3px] shrink-0 rounded-full bg-muted-foreground/60" />}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }
);
ScreenshotCard.displayName = 'ScreenshotCard';

export { ScreenshotCard };
