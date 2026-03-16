import { cn } from '@/lib/utils';

interface CalloutCardProps {
  children: React.ReactNode;
  className?: string;
  /**
   * When true, a faint orange ambient glow is shown around the card
   * and intensifies on hover — use sparingly for featured items.
   */
  glow?: boolean;
}

/**
 * Dark surface card for callouts, service listings, or featured content.
 * Transitions on hover to signal interactivity without being flashy.
 */
export function CalloutCard({ children, className, glow = false }: CalloutCardProps) {
  return (
    <div
      className={cn(
        'border-border-subtle bg-surface-1 rounded-xl border p-6',
        'duration-slow transition-all',
        'hover:border-border-default hover:bg-surface-2',
        glow &&
          'shadow-[0_0_40px_0_rgba(249,115,22,0.06)] hover:shadow-[0_0_48px_0_rgba(249,115,22,0.14)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
