import { cn } from '@/lib/utils';
import { pixel } from '../_content/font';
import { CURSEFORGE_URL, GUIDE, MIN_VERSION, TESTED } from '../_content/shared';

/** The one thing to do on landing: get it. Sits beside the headline, above the trailer. */
export function DownloadBlock() {
  return (
    <div className="flex flex-col items-start gap-3 lg:items-end">
      {CURSEFORGE_URL ? (
        <a
          href={CURSEFORGE_URL}
          className="bg-accent text-text-inverse hover:bg-accent-bright text-body-lg inline-flex h-14 items-center gap-3 rounded-xl px-7 font-semibold shadow-[0_0_28px_0_rgba(249,115,22,0.35)] transition-colors"
        >
          <DownloadIcon />
          Download on CurseForge
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="border-accent/50 bg-accent/10 text-accent-bright text-body-lg inline-flex h-14 items-center gap-3 rounded-xl border px-7 font-semibold"
        >
          <DownloadIcon />
          Coming soon to CurseForge
        </span>
      )}
      <p className="text-caption text-text-subtle">
        Free · Bedrock {MIN_VERSION}+ · No experimental toggles
      </p>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current stroke-2"
    >
      <path
        d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STEPS = [
  { title: 'Open the file', body: 'Open the downloaded .mcaddon. Minecraft imports both packs.' },
  {
    title: 'Add it to a world',
    body: 'In the world’s settings, turn on Bedrock Workers under Behavior Packs.',
  },
  {
    title: 'Craft a Worker’s Chest',
    body: 'A chest and a piece of paper. Then put a fishing rod and a loaf of bread in it.',
  },
];

/** Install at a glance, under the trailer: three steps, where it's been played, and the way to more. */
export function InstallStrip() {
  return (
    <div className="border-border-subtle mt-8 grid gap-8 border-t pt-8 lg:grid-cols-[14rem_1fr] lg:gap-12">
      <div>
        <h2 className="text-heading-sm text-text-primary mb-2 font-semibold tracking-tight">
          Install
        </h2>
        <p className="text-body-sm text-text-secondary">
          Played on{' '}
          {TESTED.map((t, i) => (
            <span key={t.where}>
              {i > 0 && (i === TESTED.length - 1 ? ' and ' : ', ')}
              <span className="text-text-primary">{t.where}</span>
            </span>
          ))}
          .
        </p>
      </div>
      <div>
        <ol className="grid gap-6 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className={cn(
                  pixel.className,
                  'text-accent text-2xl leading-none [text-shadow:3px_3px_0_#7c2d12]',
                )}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-body text-text-primary mb-1 font-semibold">{s.title}</h3>
                <p className="text-body-sm text-text-secondary">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="text-body-sm mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`${GUIDE}/getting-started/`}
            className="text-accent-bright font-medium hover:underline"
          >
            Getting started guide →
          </a>
          <a href={`${GUIDE}/install/`} className="text-accent-bright font-medium hover:underline">
            Xbox, Realms and servers →
          </a>
        </div>
      </div>
    </div>
  );
}
