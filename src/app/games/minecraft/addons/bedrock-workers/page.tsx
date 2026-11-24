import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';
import { DownloadBlock, InstallStrip } from './_components/Download';
import { Trailer } from './_components/Trailer';
import { cn } from '@/lib/utils';
import { pixel } from './_content/font';
import { ART, BASE, FEEDBACK_EMAIL, GUIDE, GUIDES, PROMISE } from './_content/shared';
import { MERCHANTS, WORKERS } from './_content/workers';

const SUMMARY =
  'Hire villagers who build their own homes, turn fish and wheat into a village economy, and wind down with karaoke after work.';

export const metadata: Metadata = {
  title: 'Bedrock Workers — a Minecraft Bedrock add-on',
  description: `${PROMISE} ${SUMMARY}`,
  openGraph: {
    title: 'Bedrock Workers',
    description: SUMMARY,
    images: [{ url: `${ART}/og.png`, width: 1200, height: 630, alt: 'Bedrock Workers' }],
    videos: [{ url: `${ART}/trailer.mp4`, width: 1920, height: 1080, type: 'video/mp4' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedrock Workers',
    description: SUMMARY,
    images: [`${ART}/og.png`],
  },
};

const steps = [
  {
    n: '1',
    href: `${GUIDE}/getting-started/#chest`,
    title: 'Craft a Worker’s Chest',
    body: 'A chest and a piece of paper. Only you (and your worker) can open it.',
  },
  {
    n: '2',
    href: `${GUIDE}/getting-started/#first-hire`,
    title: 'Put a kit in it',
    body: 'A fishing rod and a loaf of bread makes a fisherman. An axe and bread, a woodcutter. Every job has a kit.',
  },
  {
    n: '3',
    href: `${GUIDE}/getting-started/#first-hire`,
    title: 'Someone shows up',
    body: 'A job seeker walks over, takes the kit, changes into the outfit and gets to work. The haul comes back to the chest.',
  },
  {
    n: '4',
    href: `${GUIDE}/getting-started/#farmer`,
    title: 'Hire a farmer next',
    body: 'When your fisherman brings back a catch, put a hoe and two raw fish in a second Worker’s Chest near water to hire a farmer. Their wheat is what the baker turns into everyone’s pay.',
  },
];

/**
 * In-game screenshots. A moment shows only once all its pictures are in public/, so the page never
 * has an empty frame. Capture in the game and save as .webp, 1600 wide.
 */
const moments: {
  title: string;
  body: string;
  shots: { file: string; alt: string; label?: string }[];
}[] = [
  {
    title: 'Stock a chest',
    body: 'A fishing rod and a loaf of bread in a Worker’s Chest. That is the whole hiring screen.',
    shots: [
      {
        file: 'moment-first-hire',
        alt: 'A Worker’s Chest holding a fishing rod and a loaf of bread',
      },
    ],
  },
  {
    title: 'Watch them build',
    body: 'Briar the cook asks for a serving counter. Put the materials in Briar’s chest and the kitchen grows one, block by block.',
    shots: [
      {
        file: 'moment-kitchen-before',
        alt: 'The cook’s kitchen before the serving counter',
        label: 'Before',
      },
      {
        file: 'moment-kitchen-after',
        alt: 'The kitchen with its new serving counter',
        label: 'After',
      },
    ],
  },
  {
    title: 'Know what they need',
    body: 'The Worker’s Ledger shows what the settlement holds against what it wants, what was made and used today, and who is working or resting.',
    shots: [{ file: 'moment-ledger', alt: 'The Worker’s Ledger Economy screen' }],
  },
];

const PUBLIC_ART = path.join(process.cwd(), 'public', ART);
const shownMoments = moments.filter((m) =>
  m.shots.every((s) => fs.existsSync(path.join(PUBLIC_ART, `${s.file}.webp`))),
);

const features = [
  {
    title: 'They build their own houses',
    more: { href: `${GUIDE}/growing-your-settlement/#houses`, label: 'How houses work' },
    body: 'Every job has a home: a fishing house by the water, a barn with a hayloft and stable, a bakery, a clinic, a guard tower. Houses grow additions as workers level up.',
    img: 'fishing-house',
    alt: 'A fishing house with a smokehouse',
  },
  {
    title: 'An economy that runs on bread',
    more: { href: `${GUIDE}/growing-your-settlement/#economy`, label: 'How the economy balances' },
    body: 'The fisher feeds the farmer, the farmer’s wheat goes to the baker, and bread pays everyone. Workers level up from Novice to Master, bring back more, and ask for more.',
    img: 'bakery',
    alt: 'The bakery with its shop front',
  },
  {
    title: 'An evening at the tavern',
    more: { href: `${BASE}/workers/#tavern-keeper`, label: 'The tavern keeper' },
    body: 'When work ends, workers head to the tavern to eat, chat and sing karaoke. Happy workers stay. Unhappy ones think about leaving.',
    img: 'tavern',
    alt: 'The tavern',
  },
  {
    title: 'Danger, guards and a doctor',
    more: { href: `${GUIDE}/growing-your-settlement/#safety`, label: 'Guards and the doctor' },
    body: 'Monsters and raiders hunt your workers like any villager. Hurt workers collapse and need care: feed them flowers or honey, or hire a doctor.',
    img: 'guard-tower',
    alt: 'A guard tower with a bell',
  },
  {
    title: 'A homestead and a town',
    more: { href: `${BASE}/workers/#builder`, label: 'The builder' },
    body: 'Put up a HOMESTEAD sign and your builder builds you a house, then a wing, a second floor and a basement. A TOWN CENTER brings a fountain, a bell and an advisor.',
    img: 'homestead',
    alt: 'The player’s homestead',
  },
];

const materials = [
  {
    who: 'Woodcutter',
    slug: 'woodcutter',
    sign: 'CLEAR',
    body: 'Put up a CLEAR sign and they fell every tree in a strip 16 blocks long and 9 wide, then haul the logs home. A WOOD sign keeps them to one forest, and they replant as they go.',
  },
  {
    who: 'Miner',
    slug: 'miner',
    sign: 'MINE',
    body: 'Put up a MINE sign and they dig a tunnel 3 wide and 5 tall, sloping down or dead level, lit with your torches. Stone, coal and ore all come back to their chest.',
  },
  {
    who: 'Quartermaster',
    slug: 'quartermaster',
    sign: 'STORES',
    body: 'They collect what nobody needs from every Worker’s Chest and sort it into labeled chests by the STORES sign: wood, food, building, stone and ore, treasure. More chests as they fill.',
  },
];

function SectionDivider() {
  return (
    <div className="via-border-default mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent to-transparent" />
  );
}

export default function BedrockWorkersPage() {
  return (
    <PageContainer>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section className="relative overflow-hidden pt-6 sm:pt-8">
        <ContentArea>
          <div className="animate-fade-up mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <Typography variant="eyebrow" className="mb-4 block">
                Bedrock Workers · a Minecraft Bedrock add-on
              </Typography>
              <Typography variant="heading-xl" as="h1" className="mb-4 max-w-3xl">
                {PROMISE}
              </Typography>
              <Typography variant="body-lg" className="max-w-prose">
                Hire villagers to fish, farm, bake, build and guard. They put up their own houses,
                get paid in bread, and head to the tavern for karaoke when the work is done.
              </Typography>
            </div>
            <DownloadBlock />
          </div>
          <Trailer />
          <InstallStrip />
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── In-game moments ───────────────────────────────────────────── */}
      {shownMoments.length > 0 && (
        <Section id="moments" animate>
          <ContentArea>
            <div className="mb-12 text-center">
              <Typography variant="eyebrow" className="mb-4 block">
                In the game
              </Typography>
              <Typography variant="heading-lg" as="h2">
                What you do, what they build, how you keep track
              </Typography>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {shownMoments.map((m) => (
                <figure key={m.title} className="flex flex-col gap-4">
                  <div className={m.shots.length > 1 ? 'grid grid-cols-2 gap-2' : ''}>
                    {m.shots.map((s) => (
                      <div key={s.file} className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${ART}/${s.file}.webp`}
                          alt={s.alt}
                          loading="lazy"
                          className="border-border-subtle aspect-video w-full rounded-xl border object-cover"
                        />
                        {s.label && (
                          <span className="text-caption absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 font-medium text-white">
                            {s.label}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <figcaption>
                    <Typography variant="heading-sm" as="h3" className="mb-2">
                      {m.title}
                    </Typography>
                    <Typography variant="body-sm">{m.body}</Typography>
                  </figcaption>
                </figure>
              ))}
            </div>
          </ContentArea>
        </Section>
      )}

      {/* ── How it works ──────────────────────────────────────────────── */}
      <Section id="how" animate>
        <ContentArea>
          <div className="mb-12 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              How it works
            </Typography>
            <Typography variant="heading-lg" as="h2">
              A chest, a kit, a worker
            </Typography>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n}>
                <a
                  href={s.href}
                  className="group border-border-subtle bg-surface-1 hover:border-accent/50 hover:bg-surface-2 flex h-full flex-col rounded-2xl border p-6 transition-colors"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      pixel.className,
                      'text-accent mb-5 block text-6xl leading-none [text-shadow:5px_5px_0_#7c2d12]',
                    )}
                  >
                    {s.n}
                  </span>
                  <Typography variant="heading-sm" as="h3" className="mb-2">
                    <span className="sr-only">Step {s.n}: </span>
                    {s.title}
                  </Typography>
                  <Typography variant="body-sm" className="mb-4">
                    {s.body}
                  </Typography>
                  <span className="text-accent-bright text-body-sm mt-auto font-medium group-hover:underline">
                    Show me how →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── Features ──────────────────────────────────────────────────── */}
      <Section id="features" animate>
        <ContentArea>
          <div className="mb-14 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              The settlement
            </Typography>
            <Typography variant="heading-lg" as="h2">
              More than a worker. A whole village life.
            </Typography>
          </div>
          <div className="space-y-16 md:space-y-20">
            {features.map((f, i) => (
              <div key={f.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div className={i % 2 ? 'md:order-2' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${ART}/${f.img}.webp`}
                    alt={f.alt}
                    loading="lazy"
                    className="mx-auto w-full max-w-md"
                  />
                </div>
                <div>
                  <Typography variant="heading" as="h3" className="mb-4">
                    {f.title}
                  </Typography>
                  <Typography variant="body-lg" className="mb-4">
                    {f.body}
                  </Typography>
                  <a
                    href={f.more.href}
                    className="text-accent-bright text-body font-medium hover:underline"
                  >
                    {f.more.label} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── Merchants ─────────────────────────────────────────────────── */}
      <Section id="merchants" animate>
        <ContentArea>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <Typography variant="eyebrow" className="mb-4 block">
                Merchants
              </Typography>
              <Typography variant="heading-lg" as="h2" className="mb-6">
                Happy workers bring a market
              </Typography>
              <Typography variant="body-lg" className="mb-4">
                Once five of your workers are happy, merchants start to arrive. You choose who
                comes: put up a sign with their trade where the stall should go. Each merchant
                builds a stall with a striped awning, sets out their goods, and builds a cottage
                nearby.
              </Typography>
              <Typography variant="body">
                They trade for what your settlement makes, or for emeralds. Every merchant has a
                story and a couple of favors to ask. With ten happy workers, rarer traders come too.
                Give them a MERCHANT QUARTER sign and their cottages go up on a lane of their own.
              </Typography>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ART}/market.webp`}
              alt="Three market stalls with striped awnings"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MERCHANTS.map((m) => (
              <li key={m.slug}>
                <a
                  href={`${BASE}/workers/#${m.slug}`}
                  className="border-border-subtle bg-surface-1 hover:border-accent/50 hover:bg-surface-2 block h-full rounded-xl border p-5 transition-colors"
                >
                  <div className="mb-1 flex items-baseline justify-between gap-3">
                    <Typography variant="subheading" as="h3" className="text-text-primary">
                      {m.title} →
                    </Typography>
                    {m.later && <span className="text-text-subtle text-caption">10 happy</span>}
                  </div>
                  <span className="text-accent-bright text-caption mb-3 block font-mono">
                    Sign: {m.sign}
                  </span>
                  <Typography variant="body-sm">{m.sells}</Typography>
                </a>
              </li>
            ))}
          </ul>
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── Underground ───────────────────────────────────────────────── */}
      <Section id="underground" animate>
        <ContentArea>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ART}/underground.webp`}
              alt="A miner’s lodge carved out of solid rock"
              loading="lazy"
              className="mx-auto w-full max-w-md md:order-first"
            />
            <div>
              <Typography variant="eyebrow" className="mb-4 block">
                Underground
              </Typography>
              <Typography variant="heading-lg" as="h2" className="mb-6">
                Build a town under the mountain
              </Typography>
              <Typography variant="body-lg" className="mb-4">
                Put a Worker’s Chest in a cave and the house gets carved out of the rock around it.
                The miner, builder, quartermaster, tavern keeper and every merchant are happy to
                live underground.
              </Typography>
              <Typography variant="body">
                Put a HOMESTEAD sign in a cave and your own home is dug out of the stone. Market
                stalls cut back into the cave wall, and the Cave Gardener sells glow berries, moss
                and dripleaf. Your whole settlement can live below ground.
              </Typography>
            </div>
          </div>
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── Materials ─────────────────────────────────────────────────── */}
      <Section id="materials" animate>
        <ContentArea>
          <div className="mb-12 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              Materials
            </Typography>
            <Typography variant="heading-lg" as="h2" className="mb-4">
              Gathered, hauled and sorted
            </Typography>
            <Typography variant="body" className="mx-auto max-w-prose">
              Signs tell your workers where to work. They clear the land, dig out the rock and keep
              your stores in order, so you can get on with building.
            </Typography>
          </div>
          <ol className="grid gap-4 md:grid-cols-3">
            {materials.map((m) => (
              <li key={m.who}>
                <a
                  href={`${BASE}/workers/#${m.slug}`}
                  className="border-border-subtle bg-surface-1 hover:border-accent/50 hover:bg-surface-2 block h-full rounded-xl border p-6 transition-colors"
                >
                  <span className="text-accent-bright text-caption mb-3 block font-mono">
                    Sign: {m.sign}
                  </span>
                  <Typography variant="heading-sm" as="h3" className="mb-2">
                    {m.who} →
                  </Typography>
                  <Typography variant="body-sm">{m.body}</Typography>
                </a>
              </li>
            ))}
          </ol>
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── Jobs ──────────────────────────────────────────────────────── */}
      <Section id="jobs" animate>
        <ContentArea>
          <div className="mb-12 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              16 jobs
            </Typography>
            <Typography variant="heading-lg" as="h2" className="mb-4">
              Who you can hire
            </Typography>
            <Typography variant="body" className="mx-auto max-w-prose">
              The kit is what you put in the Worker’s Chest. After that, most are paid in bread.
              Pick one for the details.
            </Typography>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WORKERS.map((w) => (
              <li key={w.slug}>
                <a
                  href={`${BASE}/workers/#${w.slug}`}
                  className="border-border-subtle bg-surface-1 hover:border-accent/50 hover:bg-surface-2 block h-full rounded-xl border p-5 transition-colors"
                >
                  <Typography variant="subheading" as="h3" className="text-text-primary mb-1">
                    {w.title} →
                  </Typography>
                  <span className="text-accent-bright text-caption mb-3 block font-mono">
                    {w.kit}
                  </span>
                  <Typography variant="body-sm">{w.card}</Typography>
                </a>
              </li>
            ))}
          </ul>
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── Guides ────────────────────────────────────────────────────── */}
      <Section id="guides" animate>
        <ContentArea>
          <div className="mb-12 text-center">
            <Typography variant="eyebrow" className="mb-4 block">
              Guides
            </Typography>
            <Typography variant="heading-lg" as="h2" className="mb-4">
              Everything it can do
            </Typography>
            <Typography variant="body" className="mx-auto max-w-prose">
              Start with the first hire, then grow from there. The reference lists every job and
              every sign.
            </Typography>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <a
                  href={`${GUIDE}/${g.slug}/`}
                  className="border-border-subtle bg-surface-1 hover:border-accent/50 hover:bg-surface-2 block h-full rounded-xl border p-5 transition-colors"
                >
                  <Typography variant="subheading" as="h3" className="text-text-primary mb-2">
                    {g.title} →
                  </Typography>
                  <Typography variant="body-sm">{g.blurb}</Typography>
                </a>
              </li>
            ))}
          </ul>
        </ContentArea>
      </Section>

      <SectionDivider />

      {/* ── Feedback ──────────────────────────────────────────────────── */}
      <Section id="feedback" animate>
        <ContentArea size="md" className="text-center">
          <Typography variant="eyebrow" className="mb-4 block">
            First release
          </Typography>
          <Typography variant="heading-lg" as="h2" className="mb-6">
            Play it and tell us what happened
          </Typography>
          <Typography variant="body-lg" className="mb-8">
            Bedrock Workers is new, and it gets better every time someone plays it. Tell us what you
            built, what your workers did that surprised you, and anything that went wrong.
          </Typography>
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${FEEDBACK_EMAIL}?subject=Bedrock%20Workers`}
          >
            Email {FEEDBACK_EMAIL}
          </Button>
        </ContentArea>
      </Section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-border-subtle border-t px-4 py-10 sm:px-6">
        <ContentArea>
          <Typography variant="caption" className="mx-auto block max-w-prose text-center">
            Bedrock Workers is made by{' '}
            <Link href="/" className="hover:text-text-primary underline">
              47 Sunset Studios LLC
            </Link>
            . Not an official Minecraft product. Not approved by or associated with Mojang or
            Microsoft.
          </Typography>
        </ContentArea>
      </footer>
    </PageContainer>
  );
}
