import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type InlineTag = 'p' | 'span' | 'div';
type TypographyTag = HeadingTag | InlineTag;

export type TypographyVariant =
  | 'display-lg'
  | 'display'
  | 'heading-xl'
  | 'heading-lg'
  | 'heading'
  | 'heading-sm'
  | 'subheading'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'eyebrow';

interface TypographyProps {
  /** HTML element to render. Defaults to a sensible tag per variant. */
  as?: TypographyTag;
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  /** Optional id for aria-labelledby associations. */
  id?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  'display-lg':
    'text-heading-lg sm:text-heading-xl md:text-display-lg font-bold tracking-tight text-text-primary',
  display:
    'text-heading sm:text-heading-lg md:text-display font-bold tracking-tight text-text-primary',
  'heading-xl': 'text-heading sm:text-heading-xl font-bold tracking-tight text-text-primary',
  'heading-lg': 'text-heading sm:text-heading-lg font-semibold tracking-tight text-text-primary',
  heading: 'text-heading font-semibold tracking-tight text-text-primary',
  'heading-sm': 'text-heading-sm font-semibold tracking-tight text-text-primary',
  subheading: 'text-subheading font-medium text-text-secondary',
  'body-lg': 'text-body-lg text-text-secondary',
  body: 'text-body text-text-secondary',
  'body-sm': 'text-body-sm text-text-secondary',
  caption: 'text-caption text-text-subtle',
  eyebrow: 'text-eyebrow font-semibold tracking-widest uppercase text-accent',
};

const defaultTag: Record<TypographyVariant, TypographyTag> = {
  'display-lg': 'h1',
  display: 'h1',
  'heading-xl': 'h1',
  'heading-lg': 'h2',
  heading: 'h2',
  'heading-sm': 'h3',
  subheading: 'h3',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  eyebrow: 'span',
};

/**
 * Unified typography component that maps semantic variants to
 * the brand typography scale defined in globals.css.
 *
 * @example
 * <Typography variant="eyebrow">Services</Typography>
 * <Typography variant="heading" as="h2">What we do</Typography>
 * <Typography variant="body">We craft digital solutions…</Typography>
 */
export function Typography({ as, variant, children, className, id }: TypographyProps) {
  const Tag = (as ?? defaultTag[variant]) as TypographyTag;
  return (
    <Tag id={id} className={cn(variantStyles[variant], className)}>
      {children}
    </Tag>
  );
}
