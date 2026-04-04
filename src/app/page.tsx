import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, CalloutCard, ContactForm, Typography } from '@/components/ui';

const capabilities = [
  {
    eyebrow: 'Software Engineering',
    title: 'Systems that scale',
    body: 'Full-stack development, API design, and cloud-native infrastructure built for longevity and performance.',
  },
  {
    eyebrow: 'Product Design',
    title: 'Interfaces worth using',
    body: 'UI/UX design, design systems, and interaction design rooted in clarity, intent, and human behaviour.',
    glow: true,
  },
  {
    eyebrow: 'Digital Products',
    title: 'From concept to launch',
    body: 'End-to-end product development — strategy, prototyping, engineering, and continuous iteration.',
  },
  {
    eyebrow: 'Creative Technology',
    title: 'Ideas made tangible',
    body: 'Experimental and immersive digital experiences that push the boundaries of what the medium can do.',
  },
];

const workItems = [
  {
    eyebrow: 'Case study · Coming soon',
    title: 'Platform modernisation',
    body: 'Migrating a legacy monolith to a distributed, event-driven architecture — without stopping the business.',
  },
  {
    eyebrow: 'Case study · Coming soon',
    title: 'Consumer design system',
    body: 'Building a component library and design language used consistently across three product lines.',
    glow: true,
  },
  {
    eyebrow: 'Case study · Coming soon',
    title: 'Zero to launch in 60 days',
    body: 'Taking a validated concept from nothing to a production-grade product in under two months.',
  },
];

export default function Home() {
  return (
    <PageContainer>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section className="py-section-lg relative flex min-h-screen flex-col items-center justify-center text-center">
        <ContentArea size="md" className="animate-fade-up">
          <Typography variant="eyebrow" className="mb-6 block">
            Digital solutions studio
          </Typography>

          <Typography variant="display" as="h1" className="mb-6">
            47 Sunset Studios
          </Typography>

          <Typography variant="body-lg" className="mx-auto mb-10 max-w-prose">
            We build software, design products, and ship digital experiences for businesses and
            founders who need things done right — precisely, considerately, and built to last.
          </Typography>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="lg" href="#contact">
              Start a project
            </Button>
            <Button variant="secondary" size="lg" href="#work">
              See our work
            </Button>
          </div>
        </ContentArea>

        {/* Ambient glow accent */}
        <div
          aria-hidden="true"
          className="animate-glow-pulse pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="bg-accent/5 h-[300px] w-[300px] rounded-full blur-3xl sm:h-[600px] sm:w-[600px]" />
        </div>
      </Section>

      {/* Divider */}
      <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />

      {/* ── Overview ──────────────────────────────────────────────────── */}
      <Section id="about" animate className="py-section-lg">
        <ContentArea size="md" className="text-center">
          <Typography variant="eyebrow" className="mb-4 block">
            Who we are
          </Typography>
          <Typography variant="heading-lg" as="h2" className="mb-6">
            A studio built for the hard problems
          </Typography>
          <Typography variant="body-lg" className="mb-4">
            47 Sunset Studios is an independent digital solutions studio working at the intersection
            of software engineering, product design, and creative technology. We take on work that
            requires genuine craft — products built from the ground up, systems that need
            rethinking, and experiences that need to earn attention.
          </Typography>
          <Typography variant="body">
            We keep our engagements tight and our communication direct. No sprawling account teams
            or inflated timelines — just experienced people solving real problems.
          </Typography>
        </ContentArea>
      </Section>

      {/* Divider */}
      <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />

      {/* ── Capabilities ──────────────────────────────────────────────── */}
      <Section id="capabilities" animate className="py-section-lg">
        <ContentArea>
          <div className="mb-12 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              What we do
            </Typography>
            <Typography variant="heading" as="h2">
              Built for the complex
            </Typography>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ eyebrow, title, body, glow }) => (
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

          <div className="mt-10 text-center">
            <Button variant="secondary" size="md" href="#contact">
              Work with us
            </Button>
          </div>
        </ContentArea>
      </Section>

      {/* Divider */}
      <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />

      {/* ── Work ──────────────────────────────────────────────────────── */}
      <Section id="work" animate className="py-section-lg">
        <ContentArea>
          <div className="mb-12 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              Selected work
            </Typography>
            <Typography variant="heading" as="h2">
              Proof in the build
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {workItems.map(({ eyebrow, title, body, glow }) => (
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

          <div className="mt-10 text-center">
            <Button variant="secondary" size="md" href="#contact">
              Discuss your project
            </Button>
          </div>
        </ContentArea>
      </Section>

      {/* Divider */}
      <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <Section id="contact" animate aria-labelledby="contact-heading">
        <ContentArea size="md">
          <div className="mb-10 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              Get in touch
            </Typography>
            <Typography variant="heading-lg" as="h2" id="contact-heading" className="mb-4">
              Let&apos;s build something worth having
            </Typography>
            <Typography variant="body-lg" className="mb-4">
              If you have a product idea, a technical challenge, or an engagement that doesn&apos;t
              fit the usual brief — we&apos;d like to hear about it.
            </Typography>
            <Typography variant="body">
              No pitch decks, no retainers. Just a direct conversation about what you&apos;re trying
              to build.
            </Typography>
          </div>

          <ContactForm />

          <p className="text-body-sm text-text-subtle mt-6 text-center">
            Prefer email?{' '}
            <a
              href="mailto:hello@47sunsetstudios.com"
              className="text-accent hover:text-accent-bright duration-base transition-colors outline-none"
            >
              hello@47sunsetstudios.com
            </a>
          </p>
        </ContentArea>
      </Section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-border-subtle border-t px-4 py-12 sm:px-6">
        <ContentArea>
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Brand */}
            <div>
              <Typography variant="heading-sm" as="p" className="mb-1">
                47 Sunset Studios
              </Typography>
              <Typography variant="caption">Digital solutions forged in the dark.</Typography>
            </div>

            {/* Social links — hrefs are placeholders until real profiles exist */}
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-6">
                {[
                  { label: 'X', ariaLabel: 'X (formerly Twitter)', href: '#' },
                  { label: 'GitHub', ariaLabel: 'GitHub', href: '#' },
                  { label: 'LinkedIn', ariaLabel: 'LinkedIn', href: '#' },
                ].map(({ label, ariaLabel, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={ariaLabel}
                      className="text-text-subtle text-body-sm duration-base hover:text-text-primary focus-visible:ring-accent focus-visible:text-text-primary rounded-sm transition-colors outline-none focus-visible:ring-2"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal links */}
            <nav aria-label="Legal links">
              <ul className="flex items-center gap-4">
                {[
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms', href: '/terms' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-text-subtle text-caption duration-base hover:text-text-primary focus-visible:ring-accent focus-visible:text-text-primary rounded-sm transition-colors outline-none focus-visible:ring-2"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <div className="border-border-subtle mt-8 border-t pt-8 text-center">
            <Typography variant="caption">
              © {new Date().getFullYear()} 47 Sunset Studios. All rights reserved.
            </Typography>
          </div>
        </ContentArea>
      </footer>
    </PageContainer>
  );
}
