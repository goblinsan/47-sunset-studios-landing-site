import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Root page wrapper that enforces the dark brand background
 * and global text colour. Includes a skip-to-content link for
 * keyboard and screen-reader accessibility. Wrap every page inside this.
 */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('bg-surface-0 text-text-primary min-h-screen', className)}>
      {/* Skip-to-content link — only visible on focus */}
      <a
        href="#main-content"
        className="focus:bg-accent focus:text-text-inverse sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:outline-none"
      >
        Skip to main content
      </a>
      {/*
       * tabIndex={-1} allows the skip link to programmatically move focus here
       * via href="#main-content" without making <main> reachable via Tab key
       * navigation — which is the correct pattern for skip links.
       */}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
