import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Root page wrapper that enforces the dark brand background
 * and global text colour. Wrap every page inside this.
 */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('bg-surface-0 text-text-primary min-h-screen', className)}>{children}</div>
  );
}
