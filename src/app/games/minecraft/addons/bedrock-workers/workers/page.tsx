import type { Metadata } from 'next';
import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { pixel } from '../_content/font';
import { ART, GUIDE } from '../_content/shared';
import { MERCHANTS, WORKERS } from '../_content/workers';

export const metadata: Metadata = {
  title: 'Bedrock Workers: every worker',
  description:
    'All 16 Bedrock Workers jobs and 9 merchants: what each one does, the kit that hires them, their pay, house, signs and talk options.',
};

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-caption text-text-subtle tracking-wide uppercase">{label}</dt>
      <dd className="text-body-sm text-text-primary">{children}</dd>
    </div>
  );
}

export default function WorkersPage() {
  return (
    <PageContainer>
      <Section className="pt-10 pb-10 sm:pt-12 sm:pb-12">
        <ContentArea>
          <Typography variant="eyebrow" className="mb-4 block">
            Bedrock Workers
          </Typography>
          <Typography variant="heading-xl" as="h1" className="mb-5">
            Every worker
          </Typography>
          <Typography variant="body-lg" className="mb-10 max-w-prose">
            Sixteen jobs you hire with a kit in a Worker’s Chest, and nine merchants who come once
            your workers are happy. Pick one to jump to it.
          </Typography>

          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {WORKERS.map((w) => (
              <li key={w.slug}>
                <a
                  href={`#${w.slug}`}
                  className="border-border-subtle bg-surface-1 hover:border-accent/50 hover:bg-surface-2 flex h-full flex-col items-center gap-2 rounded-xl border p-3 text-center transition-colors"
                >
                  {w.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`${ART}/${w.img}.webp`}
                      alt=""
                      className="h-14 w-auto object-contain"
                    />
                  )}
                  <span className="text-body-sm text-text-primary leading-tight font-medium">
                    {w.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#merchants"
            className="text-accent-bright text-body-sm mt-4 inline-block font-medium hover:underline"
          >
            Merchants ↓
          </a>
        </ContentArea>
      </Section>

      <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />

      <Section className="pt-10 sm:pt-12">
        <ContentArea>
          <div className="space-y-6">
            {WORKERS.map((w, i) => (
              <article
                key={w.slug}
                id={w.slug}
                className="border-border-subtle bg-surface-1 grid scroll-mt-24 gap-6 rounded-2xl border p-5 sm:p-8 md:grid-cols-[1fr_15rem]"
              >
                <div>
                  <div className="mb-4 flex items-baseline gap-3">
                    <span className={cn(pixel.className, 'text-accent text-lg')}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Typography variant="heading" as="h2">
                      <a href={`#${w.slug}`} className="hover:text-accent-bright">
                        {w.title}
                      </a>
                    </Typography>
                  </div>
                  <div className="text-body text-text-secondary max-w-prose space-y-3">
                    {w.about.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  {w.signs && (
                    <div className="mt-5">
                      <Typography variant="caption" className="mb-2 block tracking-wide uppercase">
                        Signs
                      </Typography>
                      <ul className="text-body-sm space-y-1.5">
                        {w.signs.map((s) => {
                          const at = s.indexOf(': ');
                          const word = s.slice(0, at);
                          const rest = s.slice(at + 2);
                          return (
                            <li key={s}>
                              <code className="bg-surface-2 text-accent-bright border-border-subtle rounded border px-1.5 py-0.5 font-mono text-[0.85em]">
                                {word}
                              </code>{' '}
                              <span className="text-text-secondary">{rest}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {w.talk && (
                    <div className="mt-5">
                      <Typography variant="caption" className="mb-2 block tracking-wide uppercase">
                        Talk to them
                      </Typography>
                      <ul className="flex flex-wrap gap-2">
                        {w.talk.map((t) => (
                          <li
                            key={t}
                            className="border-border-default text-text-primary text-body-sm rounded-full border px-3 py-1"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <aside className="flex flex-col gap-5">
                  {w.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`${ART}/${w.img}.webp`}
                      alt={`The ${w.house}`}
                      loading="lazy"
                      className="mx-auto w-full max-w-[15rem]"
                    />
                  )}
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
                    <Fact label="Hire with">{w.kit}</Fact>
                    <Fact label="Pay, Novice → Master">
                      {w.pay}
                      {w.paid && <span className="text-text-secondary"> {w.paid}</span>}
                    </Fact>
                    <Fact label="House">{w.house}</Fact>
                    <Fact label="Workstation">{w.workstation}</Fact>
                    {w.addition && <Fact label="Asks to add">{w.addition}</Fact>}
                  </dl>
                </aside>
              </article>
            ))}
          </div>
        </ContentArea>
      </Section>

      <Section id="merchants" className="scroll-mt-24 pt-6">
        <ContentArea>
          <Typography variant="eyebrow" className="mb-4 block">
            Merchants
          </Typography>
          <Typography variant="heading-lg" as="h2" className="mb-4">
            Who comes to market
          </Typography>
          <Typography variant="body" className="mb-8 max-w-prose">
            Merchants aren’t hired or paid. Once enough workers are happy, put up a sign with the
            trade where the stall should go. They trade for what your settlement makes or for
            emeralds, restock each morning, and each has a story and two requests: fill them and the
            stock gets better. Sneak and use one to hear their story, or leave what they asked for
            in their stall chest.{' '}
            <a
              className="text-accent-bright hover:underline"
              href={`${GUIDE}/growing-your-settlement/#merchants`}
            >
              More on merchants
            </a>
          </Typography>
          <div className="mb-8 grid items-center gap-6 md:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ART}/market.webp`}
              alt="Three market stalls with striped awnings"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ART}/merchant-cottage.webp`}
              alt="A merchant’s cottage"
              loading="lazy"
              className="mx-auto w-full max-w-xs"
            />
          </div>
          <div className="space-y-4">
            {MERCHANTS.map((m) => (
              <article
                key={m.slug}
                id={m.slug}
                className="border-border-subtle bg-surface-1 grid scroll-mt-24 gap-5 rounded-2xl border p-5 sm:p-7 md:grid-cols-[1fr_17rem]"
              >
                <div>
                  <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <Typography variant="heading-sm" as="h3">
                      <a href={`#${m.slug}`} className="hover:text-accent-bright">
                        {m.title}
                      </a>
                    </Typography>
                    <code className="bg-surface-2 text-accent-bright border-border-subtle rounded border px-1.5 py-0.5 font-mono text-[0.8em]">
                      {m.sign}
                    </code>
                    <span className="text-text-subtle text-caption">comes with {m.unlock}</span>
                  </div>
                  <blockquote className="border-accent/40 text-text-secondary text-body mb-3 border-l-2 pl-3 italic">
                    “{m.story}”
                  </blockquote>
                  <Typography variant="body-sm">
                    <span className="text-text-primary font-medium">Sells: </span>
                    {m.sells}
                  </Typography>
                </div>
                <div>
                  <Typography variant="caption" className="mb-2 block tracking-wide uppercase">
                    Their requests
                  </Typography>
                  <ol className="text-body-sm space-y-2">
                    {m.requests.map((r, k) => (
                      <li key={r.bring} className="flex gap-2">
                        <span className={cn(pixel.className, 'text-accent text-xs leading-6')}>
                          {k + 1}
                        </span>
                        <span>
                          <span className="text-text-primary">Bring {r.bring}</span>
                          <span className="text-text-secondary"> to unlock {r.unlocks}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                  <Typography variant="body-sm" className="mt-3">
                    <span className="text-text-primary font-medium">Gift for both: </span>
                    {m.gift}
                  </Typography>
                </div>
              </article>
            ))}
          </div>
        </ContentArea>
      </Section>
    </PageContainer>
  );
}
