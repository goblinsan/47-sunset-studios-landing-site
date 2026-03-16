import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, CalloutCard, Typography } from '@/components/ui';

const services = [
  {
    eyebrow: 'Strategy',
    title: 'Systems thinking first',
    body: 'We map your operating context before touching a single line of code. Every engagement starts with clarity.',
  },
  {
    eyebrow: 'Engineering',
    title: 'Built to last in the dark',
    body: 'Performant, maintainable, and deployed to edge infrastructure. No shortcuts, no vendor lock-in.',
    glow: true,
  },
  {
    eyebrow: 'Growth',
    title: 'Measured, then scaled',
    body: 'We instrument what matters and scale what works. Data as a first-class citizen from day one.',
  },
];

export default function Home() {
  return (
    <PageContainer>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section className="py-section-lg flex min-h-screen flex-col items-center justify-center text-center">
        <ContentArea size="md" className="animate-fade-up">
          <Typography variant="eyebrow" className="mb-6 block">
            Digital solutions studio
          </Typography>

          <Typography variant="display" as="h1" className="mb-6">
            47 Sunset Studios
          </Typography>

          <Typography variant="body-lg" className="mx-auto mb-10 max-w-prose">
            We forge digital solutions in the dark — quietly, deliberately, and without the noise.
          </Typography>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="lg">
              Start a project
            </Button>
            <Button variant="secondary" size="lg">
              Learn more
            </Button>
          </div>
        </ContentArea>

        {/* Ambient glow accent */}
        <div
          aria-hidden="true"
          className="animate-glow-pulse pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="bg-accent/5 h-[600px] w-[600px] rounded-full blur-3xl" />
        </div>
      </Section>

      {/* Divider */}
      <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />

      {/* ── Services ──────────────────────────────────────────────────── */}
      <Section id="services" animate className="py-section-lg">
        <ContentArea>
          <div className="mb-12 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              What we do
            </Typography>
            <Typography variant="heading" as="h2">
              Built for the complex
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ eyebrow, title, body, glow }) => (
              <CalloutCard key={title} glow={glow}>
                <Typography variant="eyebrow" className="mb-3 block">
                  {eyebrow}
                </Typography>
                <Typography variant="heading-sm" as="h3" className="mb-3">
                  {title}
                </Typography>
                <Typography variant="body-sm">{body}</Typography>
              </CalloutCard>
            ))}
          </div>
        </ContentArea>
      </Section>

      {/* Divider */}
      <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <Section animate className="py-section-lg text-center">
        <ContentArea size="md">
          <Typography variant="eyebrow" className="mb-4 block">
            Ready?
          </Typography>
          <Typography variant="heading-lg" as="h2" className="mb-4">
            Let&apos;s build something worth having
          </Typography>
          <Typography variant="body" className="mb-10">
            No pitch decks, no retainers. Just a conversation about what you&apos;re trying to do.
          </Typography>
          <Button variant="primary" size="lg">
            Get in touch
          </Button>
        </ContentArea>
      </Section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-border-subtle border-t px-6 py-8 text-center">
        <Typography variant="caption">
          © {new Date().getFullYear()} 47 Sunset Studios. All rights reserved.
        </Typography>
      </footer>
    </PageContainer>
  );
}
