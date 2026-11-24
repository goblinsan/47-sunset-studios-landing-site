import type { Metadata } from 'next';
import { Bullets, GuideShell, Part, Sign, Steps, Tip } from '../../_components/GuideShell';
import { GUIDE } from '../../_content/shared';

export const metadata: Metadata = {
  title: 'Getting started with Bedrock Workers',
  description:
    'Craft a Worker’s Chest, hire a fisherman, then a farmer and a baker, and let them build their own houses. Your first day with Bedrock Workers.',
};

export default function GettingStarted() {
  return (
    <GuideShell
      slug="getting-started"
      title="Getting started"
      intro="Your first day: one chest, one worker, and the three hires that make bread, the pay that keeps everyone working."
    >
      <Part id="chest" title="1. Craft a Worker’s Chest">
        <p>
          Put a <strong>chest and a piece of paper</strong> together on a crafting table. Your first
          Worker’s Chest comes with a <strong>Worker’s Ledger</strong>, the book that shows how your
          settlement is doing.
        </p>
        <p>
          Only you can open or break your Worker’s Chest, and hoppers can’t pull from it. Place it
          within <strong>8 blocks of water</strong>: your first worker is a fisherman.
        </p>
      </Part>

      <Part id="first-hire" title="2. Hire a fisherman">
        <Steps>
          <li>
            Put a <strong>fishing rod</strong> and a <strong>loaf of bread</strong> in the chest.
            That is the fisherman’s kit.
          </li>
          <li>
            In daytime, a job seeker turns up within half a minute and walks to the chest. They take
            the kit, change into the fisherman’s outfit and head for the water.
          </li>
          <li>The catch comes back to the chest. Another loaf sends them out again.</li>
        </Steps>
        <Tip>
          Talk to the first job seeker you meet: they explain hiring and give you a Ledger if you
          don’t have one. A seeker who can’t find your chest can be led there: talk to them and pick{' '}
          <strong>Come with me</strong>.
        </Tip>
      </Part>

      <Part id="farmer" title="3. Hire a farmer next">
        <p>
          When your fisherman brings back a catch, put a <strong>hoe and two raw fish</strong> in a
          second Worker’s Chest near water to hire a farmer. Fish is the farmer’s pay. They till the
          ground within 4 blocks of water and grow wheat.
        </p>
        <p>
          Put a carrot, a potato, beetroot seeds, pumpkin or melon seeds, or sugar cane in the
          farmer’s chest and they grow that too. While the settlement is short of wheat, wheat keeps
          three quarters of the field.
        </p>
      </Part>

      <Part id="baker" title="4. Hire a baker">
        <p>
          A <strong>bucket of milk and some wheat</strong> hire a baker. The milk is only for
          hiring: after that the baker needs wheat, 3 a loaf, and keeps a little of each batch as
          pay. Now bread pays the fisherman, fish pays the farmer, and wheat feeds the baker. No
          emeralds needed.
        </p>
      </Part>

      <Part id="houses" title="5. Let them build their houses">
        <p>Every worker builds their own house once their chest holds the materials:</p>
        <Bullets>
          <li>logs, cobblestone and glass;</li>
          <li>a bed and a wooden door;</li>
          <li>
            their workstation: a barrel for the fisherman, a composter for the farmer, a smoker for
            the baker. The{' '}
            <a className="text-accent-bright hover:underline" href={`${GUIDE}/reference/#jobs`}>
              reference
            </a>{' '}
            lists every job’s.
          </li>
        </Bullets>
        <p>
          They pick a spot within 20 blocks, face the door toward their chest, and move the chest
          beside the front steps when they are done. To choose the spot yourself, put up a sign
          saying <Sign>HOME</Sign> where the front steps should go, and the lot is outlined on the
          ground for half a minute: green where it fits, flames where it doesn’t.
        </p>
      </Part>

      <Part id="page" title="6. Hire a page to keep everyone stocked">
        <p>
          A <strong>book and a loaf of bread</strong> hire a page. Their chest becomes the
          storehouse. Every few minutes they walk to every Worker’s Chest within 256 blocks, top it
          up with pay, tools and building materials, and bring the catch, logs and spare bread back.
          From here on, keep the storehouse stocked and the page does the rounds.
        </p>
      </Part>

      <Part id="ledger" title="Reading the Ledger">
        <p>
          Use the Worker’s Ledger to see the whole settlement, or switch it to only your workers.
        </p>
        <Bullets>
          <li>
            <strong>Summary</strong>: how many are working, idle, asleep or hurt, and how everyone
            feels.
          </li>
          <li>
            <strong>Needs attention</strong>: who is hurt or unhappy, missing pay or tools, and what
            each house still needs.
          </li>
          <li>
            <strong>Economy</strong>: fish, wheat, milk, bread and logs, what the settlement holds
            against what it wants, what was made and used today, and who is working or resting.
          </li>
          <li>
            <strong>Requests</strong>: additions workers want for their houses, and favors they ask.
          </li>
          <li>
            <strong>News</strong>: everything workers have told you.
          </li>
        </Bullets>
        <p>
          Lost it? Any job seeker gives you another, or craft a book and a piece of paper together.
        </p>
      </Part>

      <Part id="day" title="How a day goes">
        <Bullets>
          <li>Workers head indoors just before dark and sleep in their beds.</li>
          <li>They don’t start work in the rain.</li>
          <li>
            Late in the afternoon everyone knocks off. With a tavern, that’s when they go for food
            and karaoke.
          </li>
          <li>
            Job seekers who haven’t found a chest leave at nightfall. A new one comes each morning.
          </li>
          <li>
            Workers level up from Novice to Master (at 5, 15, 30 and 50 trips), bring back more, and
            ask for more pay.
          </li>
        </Bullets>
        <Tip>
          Talk to any worker to see what is on their mind, their level and wage, and what their
          house still needs.
        </Tip>
      </Part>
    </GuideShell>
  );
}
