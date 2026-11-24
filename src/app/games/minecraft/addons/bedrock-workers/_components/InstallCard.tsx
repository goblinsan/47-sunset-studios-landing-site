import { Typography } from '@/components/ui';
import { GUIDE, MIN_VERSION, TESTED } from '../_content/shared';

/** What you need before downloading, short enough to read first. The full steps are in the install guide. */
export function InstallCard() {
  return (
    <div className="border-border-subtle bg-surface-1 rounded-xl border p-5 sm:p-6">
      <Typography variant="subheading" as="h2" className="text-text-primary mb-3">
        Before you download
      </Typography>
      <ul className="text-body-sm text-text-secondary mb-4 space-y-1.5">
        <li>
          <span className="text-text-primary font-medium">Minecraft Bedrock {MIN_VERSION}</span> or
          later
        </li>
        <li>No experimental toggles: turn it on like any other add-on</li>
        <li>
          Tested on{' '}
          {TESTED.map((t, i) => (
            <span key={t.where}>
              {i > 0 && (i === TESTED.length - 1 ? ' and ' : ', ')}
              <span className="text-text-primary">{t.where}</span> ({t.how})
            </span>
          ))}
        </li>
      </ul>
      <ol className="text-body-sm text-text-secondary mb-4 list-decimal space-y-1.5 pl-5">
        <li>Open the downloaded .mcaddon file. Minecraft imports both packs.</li>
        <li>In your world’s settings, add Bedrock Workers under Behavior Packs.</li>
        <li>Craft a Worker’s Chest: a chest and a piece of paper.</li>
      </ol>
      <a
        href={`${GUIDE}/install/`}
        className="text-accent-bright text-body-sm font-medium hover:underline"
      >
        Xbox, Realms and servers: full install guide →
      </a>
    </div>
  );
}
