import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Associates a heading with this section for screen readers. */
  'aria-labelledby'?: string;
  /**
   * When true the section fades and rises in on mount.
   * Relies on the `animate-fade-up` token defined in globals.css.
   */
  animate?: boolean;
}

/**
 * Standard page section with consistent vertical rhythm.
 * Pass `animate` to add an entrance motion.
 */
export function Section({ children, className, id, animate = false, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-section sm:py-section-lg px-4 sm:px-6',
        animate && 'animate-fade-up',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
