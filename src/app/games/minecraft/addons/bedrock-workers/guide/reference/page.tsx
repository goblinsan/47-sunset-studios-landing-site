import type { Metadata } from 'next';
import { Bullets, GuideShell, Part, Sign, Table } from '../../_components/GuideShell';
import { GUIDE } from '../../_content/shared';

export const metadata: Metadata = {
  title: 'Bedrock Workers reference',
  description:
    'Every Bedrock Workers job with its kit, pay, workstation and house; every sign; the merchants; the Ledger; levels and wages.',
};

const BREAD = '1, 1, 2, 2, 3 bread';

/** Kit, pay (Novice to Master), how often it's paid, workstation, house. */
const jobs: [string, string, string, string, string, string][] = [
  ['Fisherman', 'Fishing rod + bread', BREAD, 'a trip', 'Barrel', 'Fishing House'],
  ['Woodcutter', 'Any axe + bread', BREAD, 'a trip', 'Fletching table', 'Log Cabin'],
  ['Farmer', 'Hoe + raw fish', '2, 2, 4, 4, 6 raw fish', 'a trip', 'Composter', 'Farmhouse'],
  [
    'Livestock farmer',
    'Bucket or shears + wheat',
    '2, 2, 4, 4, 6 wheat',
    'a round',
    'Cauldron',
    'Cow Barn House',
  ],
  ['Baker', 'Bucket of milk + wheat', BREAD, 'kept from each batch', 'Smoker', 'Bakery'],
  ['Page', 'Book + bread', BREAD, 'a round', 'Lectern', 'Storehouse'],
  ['Quartermaster', 'Chest + bread', BREAD, 'a round', 'Lectern', 'Storage House'],
  ['Builder', 'Shovel + bread', BREAD, 'a job', 'Stonecutter', 'Builder’s Yard'],
  ['Miner', 'Pickaxe + bread', BREAD, 'a trip', 'Stonecutter', 'Miner’s Lodge'],
  ['Guard', 'Sword + bread', BREAD, 'a shift', 'Grindstone', 'Guard Tower'],
  ['Doctor', 'Glass bottle + bread', BREAD, 'a visit', 'Brewing stand', 'Clinic'],
  ['Tavern keeper', 'Barrel + bread', BREAD, 'a day', 'None', 'Tavern'],
  ['Cook', 'Smoker + bread', '1, 1, 1, 2, 2 bread', 'a meal', 'Smoker', 'Kitchen'],
  ['Animal handler', 'Lead + bread', BREAD, 'a night', 'Fletching table', 'Kennel'],
  [
    'Advisor',
    'Lectern + bread',
    '1, 1, 1, 2, 2 bread',
    'a day',
    'Lives at the town center',
    'Town center office',
  ],
  ['Stable Master', 'Comes on their own', 'Not paid', '', '', 'Stall by the stable'],
];

const signs: [React.ReactNode, string, string][] = [
  [
    <Sign key="s">HOME</Sign>,
    'Any worker',
    'Picks the spot for a house. HOME Bob for Bob, HOME BAKER for a baker; plain HOME for the nearest chest’s worker.',
  ],
  [
    <Sign key="s">MOVE</Sign>,
    'Builder, or the worker',
    'Where a house’s new front steps go. Then pick Move my house or Move a building.',
  ],
  [
    <Sign key="s">BED Bob</Sign>,
    'Bob',
    'Within 3 blocks of a bed in your own building: that bed is Bob’s until their house is up.',
  ],
  [
    <Sign key="s">HOMESTEAD</Sign>,
    'Builder',
    'Your own house, at the front steps, door facing the writing.',
  ],
  [
    <Sign key="s">TOWN CENTER</Sign>,
    'Builder',
    'Office, fountain, benches and bell. One per world; the advisor lives there.',
  ],
  [
    <Sign key="s">ROAD</Sign>,
    'Builder',
    'Joins every ROAD sign into one three-wide path. ROAD GRAVEL or ROAD STONE for other surfaces.',
  ],
  [<Sign key="s">FENCE</Sign>, 'Builder', 'Corners of a fence. Add GATE for a gate at that sign.'],
  [
    <Sign key="s">TRACK</Sign>,
    'Builder',
    'Minecart line between TRACK (or RAIL) signs, with stations at the ends.',
  ],
  [
    <Sign key="s">WOOD</Sign>,
    'Woodcutter',
    'Keeps them to one forest: two signs mark corners, one marks a 10-block square.',
  ],
  [
    <Sign key="s">CLEAR</Sign>,
    'Woodcutter',
    'Clear-cuts a strip 16 long and 9 wide, away from the writing.',
  ],
  [
    <Sign key="s">MINE</Sign>,
    'Miner',
    'Start of a tunnel, dug away from the writing. Add STRAIGHT for a level one.',
  ],
  [<Sign key="s">STORES</Sign>, 'Quartermaster', 'Where the labeled store chests go.'],
  [<Sign key="s">TAVERN</Sign>, 'Tavern keeper', 'Where the tavern goes.'],
  [
    <Sign key="s">DINING HALL</Sign>,
    'Cook',
    'The settlement’s table. DINING ROOM lays one for you alone.',
  ],
  [
    <Sign key="s">GUARD POST</Sign>,
    'Guard',
    'A spot a guard holds day and night. A bell nearby gets rung for raiders.',
  ],
  [
    <Sign key="s">PATROL</Sign>,
    'Animal handler',
    'Where the pack patrols at night: one sign is a circle, two are corners.',
  ],
  [
    <Sign key="s">SMITH</Sign>,
    'Merchant',
    'A merchant’s stall. See the merchants table for every trade.',
  ],
  [
    <Sign key="s">MERCHANT QUARTER</Sign>,
    'Merchants',
    'A lane for merchants’ cottages. Add MQ to a stall’s sign.',
  ],
  [
    <Sign key="s">HOME MERCHANT</Sign>,
    'Merchants',
    'Where merchants’ cottages go, without a quarter.',
  ],
];

const merchants: [string, React.ReactNode, string, string][] = [
  ['Smith', <Sign key="s">SMITH</Sign>, '5 happy', 'Iron, tools, armor, an anvil'],
  ['Mason', <Sign key="s">MASON</Sign>, '5 happy', 'Bricks, glass, lanterns, quartz, sea lanterns'],
  [
    'Weaver',
    <Sign key="s">WEAVER</Sign>,
    '5 happy',
    'Wool, beds, carpet, string, leather, saddles',
  ],
  [
    'Gardener',
    <Sign key="s">GARDENER</Sign>,
    '5 happy',
    'Every sapling, seeds, crops, flower pots, honey',
  ],
  [
    'Cave Gardener',
    <Sign key="s">CAVE GARDENER</Sign>,
    '5 happy',
    'Glow berries, moss, azaleas, dripleaf, cave plants',
  ],
  [
    'Stable Master',
    <Sign key="s">STABLE</Sign>,
    '5 happy and a stable',
    'Leads, hay, saddles, horse armor, golden carrots',
  ],
  [
    'Book Trader',
    <Sign key="s">BOOKS</Sign>,
    '10 happy',
    'Books, enchanted books, name tags, bottles o’ enchanting',
  ],
  ['Alchemist', <Sign key="s">ALCHEMIST</Sign>, '10 happy', 'Potions and golden apples'],
  [
    'Fireworks Maker',
    <Sign key="s">FIREWORKS</Sign>,
    '10 happy',
    'Rockets, firework stars, gunpowder, TNT',
  ],
];

export default function Reference() {
  return (
    <GuideShell
      slug="reference"
      title="Reference"
      intro="Every job, sign and screen in one place. For the why and the order to do things in, read the other guides."
    >
      <Part id="jobs" title="Jobs" wide>
        <p>
          Put the kit in a Worker’s Chest to hire. Pay rises with level, shown here from Novice to
          Master. Every house also needs logs, cobblestone, glass, a bed, a wooden door and the
          workstation.
        </p>
        <Table
          head={['Job', 'Kit', 'Pay, Novice → Master', 'Paid', 'Workstation', 'House']}
          rows={jobs}
        />
      </Part>

      <Part id="levels" title="Levels">
        <p>
          Novice, Apprentice, Journeyman, Expert, Master, at 5, 15, 30 and 50 trips. Higher levels
          bring back more and cost more. Fill a worker’s favor (a nautilus shell for the fisherman,
          a diamond for the miner) and they go up a level.
        </p>
      </Part>

      <Part id="signs" title="Signs" wide>
        <p>
          Write the word on any sign. Signs are read on both sides, and punctuation doesn’t matter.
        </p>
        <Table head={['Sign', 'For', 'What it does']} rows={signs} />
      </Part>

      <Part id="merchants" title="Merchants" wide>
        <p>
          Merchants aren’t hired or paid. They trade for settlement goods or emeralds, restock each
          morning, and have a story and two requests each. Sneak and use one to hear it.
        </p>
        <Table head={['Merchant', 'Sign', 'Comes with', 'Sells']} rows={merchants} />
      </Part>

      <Part id="talk" title="Talking to workers">
        <Bullets>
          <li>
            Every worker: what’s on their mind, how they feel, level, wage and what their house
            still needs.
          </li>
          <li>
            <strong>Change your job</strong>: a new job on the spot, starting again as a novice.
          </li>
          <li>
            <strong>Where will my house go?</strong>: the lot outlined on the ground.
          </li>
          <li>
            <strong>Move my house</strong> (a worker) or <strong>Move a building</strong> (a
            builder), with a MOVE sign up.
          </li>
          <li>
            <strong>Come with me</strong>, <strong>Go home</strong>,{' '}
            <strong>Hand over what you’ve dug</strong>: see{' '}
            <a className="text-accent-bright hover:underline" href={`${GUIDE}/come-with-me/`}>
              Come with me
            </a>
            .
          </li>
          <li>
            <strong>Stop digging this tunnel</strong> (miner), <strong>Stop cutting</strong> and{' '}
            <strong>Back to work</strong> (woodcutter).
          </li>
          <li>
            <strong>Look after my pets</strong> and <strong>Give me back</strong> (animal handler).
          </li>
          <li>
            <strong>How is the settlement doing?</strong> (advisor): the full report.
          </li>
        </Bullets>
      </Part>

      <Part id="ledger" title="The Worker’s Ledger">
        <Bullets>
          <li>
            <strong>Summary</strong>: working, idle, asleep and hurt; average mood; who is grumpy.
          </li>
          <li>
            <strong>Needs attention</strong>: the hurt, the unhappy, missing pay or tools, what each
            house needs, empty guard posts, job seekers.
          </li>
          <li>
            <strong>Workers</strong>: most in need first, with mood and what each is doing.
          </li>
          <li>
            <strong>Economy</strong>: fish, wheat, milk, bread and logs, held against wanted, made
            and used today and yesterday.
          </li>
          <li>
            <strong>Requests</strong>: additions and favors.
          </li>
          <li>
            <strong>News</strong>: everything workers have told you, and the how-to-hire guide.
          </li>
        </Bullets>
        <p>Craft another from a book and a piece of paper, or ask any job seeker.</p>
      </Part>

      <Part id="numbers" title="Numbers worth knowing">
        <Bullets>
          <li>
            Pages, quartermasters, guards and doctors reach every Worker’s Chest within 256 blocks.
          </li>
          <li>Job seekers walk to stocked chests within 192 blocks, and leave at nightfall.</li>
          <li>
            Producers keep 32 fish, 64 wheat, 3 buckets of milk, 32 bread or 64 logs in their own
            chest for you.
          </li>
          <li>The baker keeps three extra stacks of bread for the settlement.</li>
          <li>
            Crops other than wheat stop at a stack in the settlement; seeds stop coming home at 64.
          </li>
          <li>Treats cheer a worker up to three times a day.</li>
          <li>
            A worker leaves only after staying miserable, or ten days of play with no work, and
            warns you first.
          </li>
        </Bullets>
      </Part>
    </GuideShell>
  );
}
