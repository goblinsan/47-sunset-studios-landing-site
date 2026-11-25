export const ART = '/games/minecraft/addons/bedrock-workers';
export const BASE = '/games/minecraft/addons/bedrock-workers';
export const GUIDE = `${BASE}/guide`;

/** Set once the release file is publicly downloadable; until then the page says "coming soon". */
export const CURSEFORGE_URL: string | null =
  'https://www.curseforge.com/minecraft-bedrock/addons/bedrock-workers';
/** The trailer on YouTube. The site plays its own copy; this adds a Watch on YouTube link when set. */
export const YOUTUBE_URL: string | null = 'https://youtu.be/0CL23IcMWvc';
export const FEEDBACK_EMAIL = 'feedback@47sunsetstudios.com';

/** Both pack manifests declare this as min_engine_version. */
export const MIN_VERSION = '1.26.60';

export const PROMISE = 'Start with one Worker’s Chest. Watch a village grow around it.';

/**
 * Where the add-on has actually been played. Only list a platform here once someone has played
 * a world with it there; the install guide says how to get it onto the others.
 */
export const TESTED: { where: string; how: string }[] = [
  { where: 'Bedrock Dedicated Server', how: 'packs installed on the server' },
  { where: 'Xbox', how: 'joining a server world that has it' },
];

export const GUIDES = [
  {
    slug: 'install',
    title: 'Install',
    blurb: 'Get it onto your device, your world or your server.',
  },
  {
    slug: 'getting-started',
    title: 'Getting started',
    blurb: 'Your first Worker’s Chest, your first hire, and the bread that pays everyone.',
  },
  {
    slug: 'growing-your-settlement',
    title: 'Growing your settlement',
    blurb: 'Stores, builders and signs, food and evenings, guards, doctors and merchants.',
  },
  {
    slug: 'come-with-me',
    title: 'Come with me',
    blurb: 'Take a guard, miner or woodcutter along, and lead a job seeker to a chest.',
  },
  {
    slug: 'reference',
    title: 'Reference',
    blurb: 'Every job, every sign, the Ledger, levels and wages, in one place.',
  },
] as const;

export type GuideSlug = (typeof GUIDES)[number]['slug'];
