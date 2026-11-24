import type { Metadata } from 'next';
import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';
import { BASE, GUIDE, GUIDES } from '../_content/shared';

export const metadata: Metadata = {
  title: 'Bedrock Workers guides',
  description:
    'How to install Bedrock Workers, hire your first worker, grow a settlement, take workers along, and a reference to every job and sign.',
};

export default function GuidesIndex() {
  return (
    <PageContainer>
      <Section>
        <ContentArea size="lg">
          <div className="mb-8">
            <Button variant="ghost" size="sm" href={`${BASE}/`}>
              ← Bedrock Workers
            </Button>
          </div>
          <Typography variant="eyebrow" className="mb-4 block">
            Bedrock Workers
          </Typography>
          <Typography variant="heading-xl" as="h1" className="mb-5">
            Guides
          </Typography>
          <Typography variant="body-lg" className="mb-10 max-w-prose">
            New here? Install it, then read Getting started. Come back for the rest once your
            fisherman has brought home a catch.
          </Typography>
          <ol className="space-y-3">
            {GUIDES.map((g, i) => (
              <li key={g.slug}>
                <a
                  href={`${GUIDE}/${g.slug}/`}
                  className="border-border-subtle bg-surface-1 hover:border-accent/50 hover:bg-surface-2 flex gap-5 rounded-xl border p-5 transition-colors"
                >
                  <span className="text-accent font-mono text-sm">{i + 1}</span>
                  <span>
                    <Typography variant="subheading" as="span" className="text-text-primary block">
                      {g.title} →
                    </Typography>
                    <Typography variant="body-sm" as="span" className="block">
                      {g.blurb}
                    </Typography>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </ContentArea>
      </Section>
    </PageContainer>
  );
}
