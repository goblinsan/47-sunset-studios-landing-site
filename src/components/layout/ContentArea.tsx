import { cn } from '@/lib/utils';

type ContentAreaSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContentAreaProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Controls the max-width constraint of the content block.
   * - sm  → max-w-lg   (512 px)
   * - md  → max-w-2xl  (672 px)
   * - lg  → max-w-4xl  (896 px)
   * - xl  → max-w-6xl  (1152 px) — default
   * - full → unconstrained
   */
  size?: ContentAreaSize;
}

const sizeMap: Record<ContentAreaSize, string> = {
  sm: 'max-w-lg',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  full: 'max-w-full',
};

/**
 * Centred max-width container for section content.
 * Keeps all sections aligned to the same horizontal grid.
 */
export function ContentArea({ children, className, size = 'xl' }: ContentAreaProps) {
  return <div className={cn('mx-auto w-full', sizeMap[size], className)}>{children}</div>;
}
