import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { BASE, GUIDE, GUIDES, type GuideSlug } from '../_content/shared';

/** The frame every guide page shares: way back, the guide list, the page, and the next guide. */
export function GuideShell({
  slug,
  title,
  intro,
  children,
}: {
  slug: GuideSlug;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  const i = GUIDES.findIndex((g) => g.slug === slug);
  const next = GUIDES[i + 1];
  return (
    <PageContainer>
      <Section className="pb-8 sm:pb-10">
        <ContentArea size="lg">
          <div className="mb-8">
            <Button variant="ghost" size="sm" href={`${BASE}/`}>
              ← Bedrock Workers
            </Button>
          </div>
          <Typography variant="eyebrow" className="mb-4 block">
            Bedrock Workers guide
          </Typography>
          <Typography variant="heading-xl" as="h1" className="mb-5">
            {title}
          </Typography>
          <Typography variant="body-lg" className="max-w-prose">
            {intro}
          </Typography>
          <nav aria-label="Guides" className="mt-8 flex flex-wrap gap-2">
            {GUIDES.map((g) => (
              <a
                key={g.slug}
                href={`${GUIDE}/${g.slug}/`}
                aria-current={g.slug === slug ? 'page' : undefined}
                className={cn(
                  'text-body-sm rounded-full border px-3.5 py-1.5 transition-colors',
                  g.slug === slug
                    ? 'border-accent/60 bg-accent/10 text-accent-bright'
                    : 'border-border-default text-text-secondary hover:text-text-primary hover:border-border-strong',
                )}
              >
                {g.title}
              </a>
            ))}
          </nav>
        </ContentArea>
      </Section>
      <div className="via-border-default mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
      <Section className="pt-10 sm:pt-12">
        <ContentArea size="lg">
          <div className="space-y-12">{children}</div>
          {next && (
            <a
              href={`${GUIDE}/${next.slug}/`}
              className="border-border-subtle bg-surface-1 hover:border-accent/50 mt-16 block rounded-xl border p-6 transition-colors"
            >
              <Typography variant="caption" className="mb-1 block">
                Next guide
              </Typography>
              <Typography variant="heading-sm" as="span" className="mb-1 block">
                {next.title} →
              </Typography>
              <Typography variant="body-sm">{next.blurb}</Typography>
            </a>
          )}
        </ContentArea>
      </Section>
      <footer className="border-border-subtle border-t px-4 py-10 sm:px-6">
        <ContentArea>
          <Typography variant="caption" className="mx-auto block max-w-prose text-center">
            Bedrock Workers is made by 47 Sunset Studios LLC. Not an official Minecraft product. Not
            approved by or associated with Mojang or Microsoft.
          </Typography>
        </ContentArea>
      </footer>
    </PageContainer>
  );
}

/** A guide section: a heading with an anchor, and its body. */
export function Part({
  id,
  title,
  wide = false,
  children,
}: {
  id: string;
  title: string;
  /** Let tables use the page's full width. */
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <Typography variant="heading" as="h2" className="mb-4">
        <a href={`#${id}`} className="hover:text-accent-bright">
          {title}
        </a>
      </Typography>
      <div
        className={cn(
          'text-body text-text-secondary [&_strong]:text-text-primary space-y-4 [&_strong]:font-semibold',
          !wide && 'max-w-prose',
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <ol className="marker:text-accent list-decimal space-y-2 pl-6">{children}</ol>;
}

export function Bullets({ children }: { children: React.ReactNode }) {
  return <ul className="marker:text-text-subtle list-disc space-y-2 pl-6">{children}</ul>;
}

/** A sign's words, as you'd write them on the sign. */
export function Sign({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-surface-2 text-accent-bright border-border-subtle rounded border px-1.5 py-0.5 font-mono text-[0.85em] whitespace-nowrap">
      {children}
    </code>
  );
}

/** A tip set apart from the text. */
export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-accent/40 bg-accent/5 text-body-sm rounded-lg border-l-2 px-4 py-3">
      {children}
    </div>
  );
}

/** A simple table that scrolls sideways inside itself on a phone instead of widening the page. */
export function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="border-border-subtle -mx-1 overflow-x-auto rounded-xl border">
      <table className="text-body-sm w-full min-w-[36rem] border-collapse text-left">
        <thead className="bg-surface-2 text-text-primary">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-border-subtle border-t align-top">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={cn('px-4 py-2.5', j === 0 && 'text-text-primary font-medium')}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
