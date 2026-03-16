import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-accent text-text-inverse font-semibold',
    'shadow-[0_0_20px_0_rgba(249,115,22,0.3)]',
    'hover:bg-accent-bright hover:shadow-[0_0_28px_0_rgba(251,146,60,0.4)]',
    'transition-all duration-base',
  ].join(' '),
  secondary: [
    'border border-border-default bg-surface-2 text-text-primary',
    'hover:bg-surface-3 hover:border-border-strong',
    'transition-all duration-base',
  ].join(' '),
  ghost: [
    'text-text-secondary',
    'hover:text-text-primary hover:bg-surface-2',
    'transition-all duration-base',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-body-sm rounded-md',
  md: 'h-10 px-5 text-body rounded-lg',
  lg: 'h-12 px-7 text-body-lg rounded-lg',
};

/**
 * Reusable button with three style variants and three sizes.
 *
 * @example
 * <Button variant="primary" size="lg">Get started</Button>
 * <Button variant="secondary">Learn more</Button>
 * <Button variant="ghost" size="sm">Dismiss</Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center outline-none',
        'focus-visible:ring-accent focus-visible:ring-offset-surface-0 focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-40',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
