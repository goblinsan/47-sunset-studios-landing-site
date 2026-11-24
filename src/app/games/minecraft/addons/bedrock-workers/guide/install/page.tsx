import type { Metadata } from 'next';
import { Bullets, GuideShell, Part, Steps, Tip } from '../../_components/GuideShell';
import { CURSEFORGE_URL, FEEDBACK_EMAIL, MIN_VERSION, TESTED } from '../../_content/shared';

export const metadata: Metadata = {
  title: 'Install Bedrock Workers',
  description: `Install the Bedrock Workers add-on on Minecraft Bedrock ${MIN_VERSION} or later: on a phone, tablet or PC, on Xbox through a hosted world, or on a dedicated server.`,
};

export default function InstallGuide() {
  return (
    <GuideShell
      slug="install"
      title="Install"
      intro={
        <>
          Bedrock Workers is one .mcaddon file holding a behavior pack and a resource pack. It needs
          Minecraft Bedrock {MIN_VERSION} or later and no experimental toggles.
        </>
      }
    >
      <Part id="tested" title="Where it has been played">
        <Bullets>
          {TESTED.map((t) => (
            <li key={t.where}>
              <strong>{t.where}</strong>: {t.how}
            </li>
          ))}
        </Bullets>
        <p>
          Played it somewhere else? Tell us at{' '}
          <a className="text-accent-bright hover:underline" href={`mailto:${FEEDBACK_EMAIL}`}>
            {FEEDBACK_EMAIL}
          </a>{' '}
          and we will add it here.
        </p>
      </Part>

      <Part id="device" title="On a phone, tablet or Windows PC">
        <Steps>
          <li>
            Download the .mcaddon file
            {CURSEFORGE_URL ? (
              <>
                {' '}
                from{' '}
                <a className="text-accent-bright hover:underline" href={CURSEFORGE_URL}>
                  CurseForge
                </a>
              </>
            ) : null}
            .
          </li>
          <li>Open it. Minecraft starts and imports both packs.</li>
          <li>
            Create a world, or edit one, and open <strong>Behavior Packs</strong>. Activate Bedrock
            Workers. Its resource pack comes along with it.
          </li>
          <li>Play. Craft a Worker’s Chest from a chest and a piece of paper.</li>
        </Steps>
        <Tip>
          Adding it to a world you already play is fine. Make a copy of the world first if it is one
          you care about, as you would with any add-on.
        </Tip>
      </Part>

      <Part id="xbox" title="On Xbox">
        <p>
          An Xbox can’t open a .mcaddon file itself. Play a world that already has the add-on and
          the game downloads the packs when you join:
        </p>
        <Bullets>
          <li>a server running it (see below);</li>
          <li>a friend’s world, hosted from a phone, tablet or PC that has it installed;</li>
          <li>a Realm, with a world that has the add-on uploaded to it.</li>
        </Bullets>
      </Part>

      <Part id="server" title="On a Bedrock Dedicated Server">
        <Steps>
          <li>
            Rename the .mcaddon to .zip and unzip it. Inside are two folders: the behavior pack and
            the resource pack.
          </li>
          <li>
            Copy the behavior pack into the server’s <strong>behavior_packs</strong> folder and the
            resource pack into <strong>resource_packs</strong>.
          </li>
          <li>
            Add each pack’s uuid and version (from its manifest.json) to the world’s
            world_behavior_packs.json and world_resource_packs.json.
          </li>
          <li>Restart the server. Players download the packs when they join.</li>
        </Steps>
      </Part>

      <Part id="update" title="Updating">
        <p>
          Install the new file the same way. Your workers, their houses and their chests carry over.
          On a server, replace both pack folders and update the version in the two world files.
        </p>
      </Part>
    </GuideShell>
  );
}
