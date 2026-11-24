'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BASE, CURSEFORGE_URL, GUIDE } from '../_content/shared';
import { pixel } from '../_content/font';

const LINKS = [
  { href: `${BASE}/`, label: 'Overview', match: (p: string) => p === BASE || p === `${BASE}/` },
  {
    href: `${BASE}/workers/`,
    label: 'Workers',
    match: (p: string) => p.startsWith(`${BASE}/workers`),
  },
  {
    href: `${GUIDE}/`,
    label: 'Guides',
    match: (p: string) => p.startsWith(GUIDE) && !p.startsWith(`${GUIDE}/reference`),
  },
  {
    href: `${GUIDE}/reference/`,
    label: 'Reference',
    match: (p: string) => p.startsWith(`${GUIDE}/reference`),
  },
];

/** The add-on's own bar, on every page under it: home, the four places to go, and the download. */
export function AddonNav() {
  const path = usePathname() ?? '';
  return (
    <header className="border-border-subtle bg-surface-0/85 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-2 sm:h-14 sm:flex-nowrap sm:px-6 sm:py-0">
        <a
          href={`${BASE}/`}
          className={cn(
            pixel.className,
            'text-accent-bright shrink-0 text-[0.7rem] leading-none sm:text-sm',
          )}
        >
          Bedrock Workers
        </a>
        <nav
          aria-label="Bedrock Workers"
          className="order-last -mx-2 flex w-full min-w-0 gap-0.5 sm:order-none sm:mx-0 sm:w-auto sm:flex-1 sm:gap-1"
        >
          {LINKS.map((l) => {
            const on = Boolean(l.match(path));
            return (
              <a
                key={l.label}
                href={l.href}
                aria-current={on ? 'page' : undefined}
                className={cn(
                  'text-body-sm shrink-0 rounded-md px-2 py-1.5 transition-colors sm:px-2.5',
                  on
                    ? 'bg-surface-2 text-text-primary'
                    : 'text-text-secondary hover:text-text-primary',
                )}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
        {CURSEFORGE_URL ? (
          <a
            href={CURSEFORGE_URL}
            className="bg-accent text-text-inverse hover:bg-accent-bright text-body-sm ml-auto shrink-0 rounded-md px-3 py-1.5 font-semibold sm:ml-0"
          >
            Download
          </a>
        ) : (
          <span className="border-accent/40 text-accent-bright text-caption ml-auto shrink-0 rounded-md border px-2.5 py-1 sm:ml-0">
            Coming soon
          </span>
        )}
      </div>
    </header>
  );
}
