# Layout primitives

Every page in this project is composed from three layout primitives:
`PageContainer`, `Section`, and `ContentArea`. They are re-exported together
from `src/components/layout/index.ts`.

## Nesting order

The intended nesting order is:

1. **`PageContainer`** — outermost. Supplies the page chrome (skip-to-content
   link, dark background, main element).
2. **`Section`** — one per band of the page. Supplies vertical spacing and
   optional entrance animation.
3. **`ContentArea`** — inside each section. Supplies horizontal constraint so
   all sections stay aligned to one grid.

None of the three duplicates another's job; together they enforce the design
system's spacing and alignment rules.

## PageContainer

```tsx
interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}
```

Renders a `div` with `bg-surface-0 text-text-primary min-h-screen`, then a
skip-to-content anchor (`#main-content`) styled `sr-only` so it is invisible
until focused, then a `<main id="main-content" tabIndex={-1}>` wrapping the
children.

The `tabIndex={-1}` on `main` is the correct skip-link pattern: it lets the
skip link move focus into `main` programmatically without putting `main` itself
into the tab order. Every page is wrapped in this component.

## Section

```tsx
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
  animate?: boolean; // defaults to false
}
```

Renders a `<section>` with `py-section sm:py-section-lg px-4 sm:px-6`, which
gives every section the same vertical rhythm. When `animate` is true it adds
the `animate-fade-up` token (defined in `globals.css`) so the section fades
and rises on mount.

Remaining props are spread onto the element. Pass `aria-labelledby` the id of
the section's heading so screen readers announce the section by name.

## ContentArea

```tsx
type ContentAreaSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContentAreaProps {
  children: React.ReactNode;
  className?: string;
  size?: ContentAreaSize; // defaults to 'xl'
}
```

Renders a `div` with `mx-auto w-full` plus a max-width class chosen from the
following map:

| Size | Max-width class | Width |
|------|-----------------|-------|
| `sm`  | `max-w-lg`   | 512 px   |
| `md`  | `max-w-2xl`  | 672 px   |
| `lg`  | `max-w-4xl`  | 896 px   |
| `xl`  | `max-w-6xl`  | 1152 px (default) |
| `full`| `max-w-full` | unconstrained |

Because every section's content passes through the same map, all sections stay
aligned to one horizontal grid. Use the smallest size that fits your content.
