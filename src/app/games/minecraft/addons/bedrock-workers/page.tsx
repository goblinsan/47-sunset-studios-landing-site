import type { Metadata } from 'next';
import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';

const ART = '/games/minecraft/addons/bedrock-workers';

/** Set once the CurseForge listing is live; until then the page says "coming soon". */
const CURSEFORGE_URL: string | null = null;
const FEEDBACK_EMAIL = 'hello@47sunsetstudios.com';

export const metadata: Metadata = {
  title: 'Bedrock Workers — a Minecraft Bedrock add-on',
  description:
    'Hire villagers with a Worker’s Chest and watch a settlement run itself: 16 jobs, houses they build themselves, a bread economy, merchants, a tavern, guards and a doctor. No experimental toggles.',
  openGraph: {
    title: 'Bedrock Workers',
    description:
      'Hire villagers and watch a settlement run itself. A Minecraft Bedrock add-on: 16 jobs, houses, merchants, a tavern and more.',
    images: [{ url: `${ART}/og.png`, width: 1200, height: 630, alt: 'Bedrock Workers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedrock Workers',
    description: 'Hire villagers and watch a settlement run itself. A Minecraft Bedrock add-on.',
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
];

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
      <Section className="relative overflow-hidden">
        <ContentArea>
          <div className="mb-10">
            <Button variant="ghost" size="sm" href="/">
              ← 47 Sunset Studios
            </Button>
          </div>
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="animate-fade-up">
              <Typography variant="eyebrow" className="mb-5 block">
                Minecraft Bedrock add-on
              </Typography>
              <Typography variant="display" as="h1" className="mb-6">
                Bedrock Workers
              </Typography>
              <Typography variant="body-lg" className="mb-8 max-w-prose">
                Hire villagers to fish, farm, bake, build and guard. They build their own houses,
                get paid in bread, head to the tavern at night, and turn your base into a settlement
                that runs itself.
              </Typography>
              <div className="flex flex-wrap items-center gap-3">
                {CURSEFORGE_URL ? (
                  <Button variant="primary" size="lg" href={CURSEFORGE_URL}>
                    Get it on CurseForge
                  </Button>
                ) : (
                  <span className="border-accent/40 text-accent-bright text-body-sm inline-flex h-12 items-center rounded-lg border px-5 font-medium">
                    Coming soon to CurseForge
                  </span>
                )}
                <Button variant="secondary" size="lg" href="#feedback">
                  Tell us what you think
                </Button>
              </div>
              <Typography variant="caption" className="mt-6 block">
                Bedrock 1.26.60 or later · Xbox, PC, tablet, phone and servers · No experimental
                toggles
              </Typography>
            </div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="bg-accent/10 absolute inset-6 -z-10 rounded-full blur-3xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ART}/logo.webp`}
                alt="Bedrock Workers: villagers at work in a small village"
                width={640}
                height={640}
                className="border-border-subtle w-full rounded-2xl border shadow-2xl"
              />
            </div>
          </div>
        </ContentArea>
      </Section>

      <SectionDivider />

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
          <ol className="grid gap-4 md:grid-cols-3">
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
