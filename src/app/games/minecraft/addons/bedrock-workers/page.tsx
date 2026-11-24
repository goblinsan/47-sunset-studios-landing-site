import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';
import { InstallCard } from './_components/InstallCard';
import { Trailer } from './_components/Trailer';
import { ART, CURSEFORGE_URL, FEEDBACK_EMAIL, GUIDE, GUIDES, PROMISE } from './_content/shared';

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
    title: 'Craft a Worker’s Chest',
    body: 'A chest and a piece of paper. Only you (and your worker) can open it.',
  },
  {
    n: '2',
    title: 'Put a kit in it',
    body: 'A fishing rod and a loaf of bread makes a fisherman. An axe and bread, a woodcutter. Every job has a kit.',
  },
  {
    n: '3',
    title: 'Someone shows up',
    body: 'A job seeker walks over, takes the kit, changes into the outfit and gets to work. The haul comes back to the chest.',
  },
  {
    n: '4',
    title: 'Hire a farmer next',
    body: 'When your fisherman brings back a catch, put a hoe and two raw fish in a second Worker’s Chest near water to hire a farmer. His wheat is what the baker turns into everyone’s pay.',
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

const jobs: { title: string; kit: string; does: string }[] = [
  {
    title: 'Fisherman',
    kit: 'Fishing rod + bread',
    does: 'Casts at the nearest water and brings home the catch, sometimes treasure.',
  },
  {
    title: 'Woodcutter',
    kit: 'Axe + bread',
    does: 'Fells trees, replants every one, and clears land where you put a CLEAR sign.',
  },
  {
    title: 'Farmer',
    kit: 'Hoe + raw fish',
    does: 'Tills by the water, grows wheat and whatever seeds you give him.',
  },
  {
    title: 'Livestock Farmer',
    kit: 'Bucket or shears + wheat',
    does: 'Milks, shears and breeds the animals in the pen by his barn.',
  },
  {
    title: 'Baker',
    kit: 'Milk + wheat',
    does: 'Turns wheat into the bread everyone is paid in, then cakes, pies and cookies.',
  },
  {
    title: 'Page',
    kit: 'Book + bread',
    does: 'Runs the storehouse and tops up every Worker’s Chest with pay, tools and building materials.',
  },
  {
    title: 'Quartermaster',
    kit: 'Chest + bread',
    does: 'Gathers everything nobody needs and sorts it into labeled chests: wood, food, ore, treasure.',
  },
  {
    title: 'Builder',
    kit: 'Shovel + bread',
    does: 'Builds your homestead and the town center, and moves workers’ houses to a MOVE sign.',
  },
  {
    title: 'Miner',
    kit: 'Pickaxe + bread',
    does: 'Digs a tunnel from a MINE sign, lights it with your torches, and brings home everything he digs.',
  },
  {
    title: 'Guard',
    kit: 'Sword + bread',
    does: 'Patrols by day, watches at night, and comes running when a worker is hurt.',
  },
  {
    title: 'Doctor',
    kit: 'Glass bottle + bread',
    does: 'Finds the injured and nurses them back with flowers and honey.',
  },
  {
    title: 'Tavern Keeper',
    kit: 'Barrel + bread',
    does: 'Builds the tavern and serves the baker’s cakes and pies. In the evening, everyone comes in.',
  },
  {
    title: 'Cook',
    kit: 'Smoker + bread',
    does: 'Lays out breakfast, lunch and dinner at the dining hall. A good meal lifts everyone’s mood.',
  },
  {
    title: 'Animal Handler',
    kit: 'Lead + bread',
    does: 'Keeps a pack of wolves and cats, tames a new one each day, and looks after your pets.',
  },
  {
    title: 'Advisor',
    kit: 'Lectern + bread',
    does: 'Lives at the town center and tells you each morning what the settlement needs.',
  },
  {
    title: 'Stable Master',
    kit: 'Comes on his own',
    does: 'Moves in once there’s a stable, and breeds horses with golden carrots.',
  },
];

const features = [
  {
    title: 'They build their own houses',
    body: 'Every job has a home: a fishing house by the water, a barn with a hayloft and stable, a bakery, a clinic, a guard tower. Houses grow additions as workers level up.',
    img: 'fishing-house',
    alt: 'A fishing house with a smokehouse',
  },
  {
    title: 'An economy that runs on bread',
    body: 'The fisher feeds the farmer, the farmer’s wheat goes to the baker, and bread pays everyone. Workers level up from Novice to Master, bring back more, and ask for more.',
    img: 'bakery',
    alt: 'The bakery with its shop front',
  },
  {
    title: 'An evening at the tavern',
    body: 'When work ends, workers head to the tavern to eat, chat and sing karaoke. Happy workers stay. Unhappy ones think about leaving.',
    img: 'tavern',
    alt: 'The tavern',
  },
  {
    title: 'Danger, guards and a doctor',
    body: 'Monsters and raiders hunt your workers like any villager. Hurt workers collapse and need care: feed them flowers or honey, or hire a doctor.',
    img: 'guard-tower',
    alt: 'A guard tower with a bell',
  },
  {
    title: 'A homestead and a town',
    body: 'Put up a HOMESTEAD sign and your builder builds you a house, then a wing, a second floor and a basement. A TOWN CENTER brings a fountain, a bell and an advisor.',
    img: 'homestead',
    alt: 'The player’s homestead',
  },
];

const merchants = [
  { title: 'Smith', sign: 'SMITH', sells: 'Iron, tools, buckets and armor' },
  { title: 'Mason', sign: 'MASON', sells: 'Bricks, glass, lanterns and quartz' },
  { title: 'Weaver', sign: 'WEAVER', sells: 'Wool, beds, carpet, string and leather' },
  { title: 'Gardener', sign: 'GARDENER', sells: 'Saplings, seeds, crops, flower pots and honey' },
  {
    title: 'Cave Gardener',
    sign: 'CAVE GARDENER',
    sells: 'Glow berries, moss, azaleas, dripleaf and other cave plants',
  },
  {
    title: 'Stable Master',
    sign: 'STABLE',
    sells: 'Leads, hay, saddles, horse armor and golden carrots',
  },
  {
    title: 'Book Trader',
    sign: 'BOOKS',
    sells: 'Books, enchanted books and name tags',
    later: true,
  },
  { title: 'Alchemist', sign: 'ALCHEMIST', sells: 'Potions and golden apples', later: true },
  {
    title: 'Fireworks Maker',
    sign: 'FIREWORKS',
    sells: 'Fireworks, gunpowder and dyes',
    later: true,
  },
];

const materials = [
  {
    who: 'Woodcutter',
    sign: 'CLEAR',
    body: 'Put up a CLEAR sign and he fells every tree in a strip 16 blocks long and 9 wide, then hauls the logs home. A WOOD sign keeps him to one forest, and he replants as he goes.',
  },
  {
    who: 'Miner',
    sign: 'MINE',
    body: 'Put up a MINE sign and he digs a tunnel 3 wide and 5 tall, sloping down or dead level, lighting it with your torches. Stone, coal and ore all come back to his chest.',
  },
  {
    who: 'Quartermaster',
    sign: 'STORES',
    body: 'He collects what nobody needs from every Worker’s Chest and sorts it into labeled chests by his STORES sign: wood, food, building, stone and ore, treasure. He builds more chests as they fill.',
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
          <div className="mb-6">
            <Button variant="ghost" size="sm" href="/">
              ← 47 Sunset Studios
            </Button>
          </div>
          <div className="animate-fade-up mb-8">
            <Typography variant="eyebrow" className="mb-4 block">
              Bedrock Workers · a Minecraft Bedrock add-on
            </Typography>
            <Typography variant="heading-xl" as="h1" className="mb-4 max-w-4xl">
              {PROMISE}
            </Typography>
            <Typography variant="body-lg" className="max-w-prose">
              Hire villagers to fish, farm, bake, build and guard. They put up their own houses, get
              paid in bread, and head to the tavern for karaoke when the work is done.
            </Typography>
          </div>
          <Trailer />
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.15fr] md:items-start">
            <div className="flex flex-col items-start gap-3">
              {CURSEFORGE_URL ? (
                <Button variant="primary" size="lg" href={CURSEFORGE_URL}>
                  Download on CurseForge
                </Button>
              ) : (
                <span className="border-accent/40 text-accent-bright text-body inline-flex h-12 items-center rounded-lg border px-5 font-medium">
                  Coming soon to CurseForge
                </span>
              )}
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="md" href={`${GUIDE}/getting-started/`}>
                  Getting started guide
                </Button>
                <Button variant="ghost" size="md" href="#feedback">
                  Tell us what you think
                </Button>
              </div>
            </div>
            <InstallCard />
          </div>
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
              <li key={s.n} className="border-border-subtle bg-surface-1 rounded-xl border p-6">
                <span className="text-accent mb-4 block font-mono text-sm">{s.n}</span>
                <Typography variant="heading-sm" as="h3" className="mb-2">
                  {s.title}
                </Typography>
                <Typography variant="body-sm">{s.body}</Typography>
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
                  <Typography variant="body-lg">{f.body}</Typography>
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
            {merchants.map((m) => (
              <li key={m.title} className="border-border-subtle bg-surface-1 rounded-xl border p-5">
                <div className="mb-1 flex items-baseline justify-between gap-3">
                  <Typography variant="subheading" as="h3" className="text-text-primary">
                    {m.title}
                  </Typography>
                  {m.later && <span className="text-text-subtle text-caption">10 happy</span>}
                </div>
                <span className="text-accent-bright text-caption mb-3 block font-mono">
                  Sign: {m.sign}
                </span>
                <Typography variant="body-sm">{m.sells}</Typography>
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
              <li key={m.who} className="border-border-subtle bg-surface-1 rounded-xl border p-6">
                <span className="text-accent-bright text-caption mb-3 block font-mono">
                  Sign: {m.sign}
                </span>
                <Typography variant="heading-sm" as="h3" className="mb-2">
                  {m.who}
                </Typography>
                <Typography variant="body-sm">{m.body}</Typography>
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
              The kit is what you put in the Worker’s Chest. After that, every worker is paid in
              bread.
            </Typography>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((j) => (
              <li key={j.title} className="border-border-subtle bg-surface-1 rounded-xl border p-5">
                <Typography variant="subheading" as="h3" className="text-text-primary mb-1">
                  {j.title}
                </Typography>
                <span className="text-accent-bright text-caption mb-3 block font-mono">
                  {j.kit}
                </span>
                <Typography variant="body-sm">{j.does}</Typography>
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
            Bedrock Workers is made by 47 Sunset Studios LLC. Not an official Minecraft product. Not
            approved by or associated with Mojang or Microsoft.
          </Typography>
        </ContentArea>
      </footer>
    </PageContainer>
  );
}
