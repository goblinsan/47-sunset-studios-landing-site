import type { Metadata } from 'next';
import { Bullets, GuideShell, Part, Sign, Tip } from '../../_components/GuideShell';
import { GUIDE } from '../../_content/shared';

export const metadata: Metadata = {
  title: 'Growing your Bedrock Workers settlement',
  description:
    'Stores and the quartermaster, the builder and their signs, wood and stone, meals and the tavern, guards and the doctor, merchants, houses and mood.',
};

export default function GrowingYourSettlement() {
  return (
    <GuideShell
      slug="growing-your-settlement"
      title="Growing your settlement"
      intro="Once bread is flowing, the settlement can run itself. This is everything past the first day, roughly in the order you’ll want it."
    >
      <nav aria-label="On this page" className="text-body-sm flex flex-wrap gap-x-4 gap-y-1">
        {[
          ['economy', 'How the economy balances'],
          ['stores', 'Stores'],
          ['builder', 'The builder'],
          ['wood-stone', 'Wood and stone'],
          ['meals', 'Meals and evenings'],
          ['safety', 'Guards and the doctor'],
          ['merchants', 'Merchants'],
          ['houses', 'Houses'],
          ['underground', 'Underground'],
          ['mood', 'Mood'],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="text-accent-bright hover:underline">
            {label}
          </a>
        ))}
      </nav>

      <Part id="economy" title="How the economy balances">
        <p>
          Bread pays most workers. Fish pays the farmer, wheat pays the livestock farmer and feeds
          the baker. Producers fill their own chest for you first (32 fish, 64 wheat, 3 buckets of
          milk, 32 bread or 64 logs stay there for you to take), then work to demand: they rest
          while the settlement already holds plenty of what they make, and start again when it runs
          low.
        </p>
        <Bullets>
          <li>
            The baker also fills a store of three stacks of bread beyond that, and while it’s short
            the farmers keep growing wheat.
          </li>
          <li>
            Once the settlement holds a stack of a crop other than wheat, the farmer stops growing
            it until some is used. Seeds come home only while the settlement has fewer than 64.
          </li>
          <li>
            The woodcutter keeps going until there’s wood for every house and addition still to
            build, plus a spare stack.
          </li>
          <li>Nobody needs milk, nobody milks.</li>
        </Bullets>
        <p>
          The Ledger’s <strong>Economy</strong> page shows all of this: what the settlement holds
          against what it wants, what was made and used today and yesterday, and who is working or
          resting.
        </p>
      </Part>

      <Part id="stores" title="Stores: the page and the quartermaster">
        <p>
          The <strong>page</strong> (book and bread) runs the storehouse and tops up every Worker’s
          Chest within 256 blocks, anyone’s, with about three trips’ worth of pay and supplies, a
          new tool if one is gone, and the materials each worker still needs for their house. They
          never take a worker’s tool or the materials being saved for a house.
        </p>
        <p>
          The <strong>quartermaster</strong> (a chest and bread a round) collects what nobody needs
          and sorts it into labeled chests by a <Sign>STORES</Sign> sign: Wood, Saplings &amp;
          Seeds, Food, Treasure, Tools &amp; Gear, Farm &amp; Animals, Building, Stone &amp; Ore and
          Odds &amp; Ends. Thirty-two or more of one odd thing gets a chest of its own. A full group
          gets another chest.
        </p>
        <p>
          After each round they tidy: part stacks merge, everything moves to its own group, and the
          chests are relabeled so each group sits together. Leftover chests say Spare and are used
          before a new one is built. When the stores are full, what won’t fit is sold to the nearest
          merchant for emeralds; treasure and enchanted things never are.
        </p>
        <p>
          Their house is a storage house lined with shelves of chests, and grows another wing of
          shelves when the stores fill up.
        </p>
      </Part>

      <Part id="builder" title="The builder">
        <p>
          A shovel and a loaf of bread a job. Keep their chest stocked and they tell you what’s
          missing.
        </p>
        <Bullets>
          <li>
            <Sign>HOMESTEAD</Sign> where your front steps should go, facing the way the door should
            face: a one-room house for you, with a hearth, a bed, a kitchen corner and a porch. Talk
            to the builder afterwards to add a bedroom wing, a second floor or a basement, in any
            order.
          </li>
          <li>
            <Sign>TOWN CENTER</Sign>: an office, a tiered fountain, benches, lamp posts and a bell.
            One per world. It’s where the advisor lives and where job seekers gather.
          </li>
          <li>
            <Sign>ROAD</Sign> at each end and bend: one network of three-wide dirt paths.{' '}
            <Sign>ROAD GRAVEL</Sign> or <Sign>ROAD STONE</Sign> for gravel or cobblestone. Once
            there’s a road, every house gets a path to it.
          </li>
          <li>
            <Sign>FENCE</Sign> at the corners, with a gate every 8 blocks and wherever a sign also
            says <Sign>GATE</Sign>.
          </li>
          <li>
            <Sign>TRACK</Sign> (or <Sign>RAIL</Sign>) signs are joined into a minecart line with
            powered rails and a station with a button at each end.
          </li>
          <li>
            <Sign>MOVE</Sign> where a house’s new front steps should go, then pick{' '}
            <strong>Move a building</strong> on the builder’s talk screen: the whole house moves,
            additions, chests and all, for free.
          </li>
        </Bullets>
        <p>
          A site more than 64 blocks away is kept loaded while they build there. With nothing to
          build for you, they build their own Builder’s Yard.
        </p>
      </Part>

      <Part id="wood-stone" title="Wood and stone">
        <p>
          The <strong>woodcutter</strong> (any axe and bread) cuts the nearest natural trees within
          20 blocks and replants every one.
        </p>
        <Bullets>
          <li>
            <Sign>WOOD</Sign>: two signs mark the corners of the forest to keep to, one marks a
            10-block square around it.
          </li>
          <li>
            <Sign>CLEAR</Sign> within 48 blocks of their chest: they clear-cut a strip 16 long and 9
            wide, heading away from the writing.
          </li>
          <li>Bone meal in their chest lets them grow saplings into trees when none are left.</li>
        </Bullets>
        <p>
          The <strong>miner</strong> (a pickaxe and bread a trip) digs a tunnel 3 wide and 5 tall
          from a <Sign>MINE</Sign> sign within 24 blocks of their chest, sloping down at 45 degrees,
          or level if the sign also says <Sign>STRAIGHT</Sign>. Each trip digs 8 blocks (24 at
          Master) and brings back everything dug, ore as a player would get it. Torches in their
          chest light the floor every 4 blocks. They stop at water, lava or bedrock and say why.
        </p>
        <Tip>
          Both can come with you and work where you point. See{' '}
          <a className="text-accent-bright hover:underline" href={`${GUIDE}/come-with-me/`}>
            Come with me
          </a>
          .
        </Tip>
      </Part>

      <Part id="meals" title="Meals and evenings">
        <p>
          The <strong>cook</strong> (a smoker and a loaf a meal) serves breakfast, lunch and dinner
          on plates: item frames laid flat on a table near a sign. <Sign>DINING HALL</Sign> is the
          settlement’s table, and workers nearby come over to eat and go back cheered.{' '}
          <Sign>DINING ROOM</Sign> lays a table for you alone. The cook’s kitchen grows a serving
          counter as its addition.
        </p>
        <p>
          The <strong>tavern keeper</strong> (a barrel and bread) builds the tavern at a{' '}
          <Sign>TAVERN</Sign> sign. Late in the afternoon everyone knocks off, walks over, gets
          served, takes turns at karaoke and goes to bed happier.
        </p>
        <p>
          Once bread is plentiful, the baker bakes cake, pumpkin pie and cookies for the tavern, and
          leaves some in their chest for you.
        </p>
      </Part>

      <Part id="safety" title="Guards, pets and the doctor">
        <p>
          Monsters and raiders go after workers as they do villagers. A badly hurt worker collapses
          instead of dying. Alone, they are usually up within half a day, though about 1 in 8 die.
          Wildflowers or a honey bottle get them up in about 3 hours, a doctor in about an hour.
        </p>
        <Bullets>
          <li>
            <strong>Guards</strong> (a sword and bread a shift) go from worker to worker, come
            running when one is hurt, and come after monsters near you in the settlement.
          </li>
          <li>
            <Sign>GUARD POST</Sign>: a guard holds that spot day and night. With a bell nearby, they
            ring it when raiders come, and every free guard runs over.
          </li>
          <li>
            The <strong>animal handler</strong> (a lead and bread a night) keeps a pack of wolves
            and cats that patrol the areas marked by <Sign>PATROL</Sign> signs at night. Talk to
            them to hand over your own pets.
          </li>
          <li>
            The <strong>doctor</strong> (a glass bottle and bread a visit) finds the injured and
            treats them with wildflowers or honey. Once the clinic has its patient ward, patients
            are carried to an empty bed there.
          </li>
        </Bullets>
      </Part>

      <Part id="merchants" title="Merchants">
        <p>
          When 5 of your workers are happy, merchants come. Put up a sign with a trade where the
          stall should go: <Sign>SMITH</Sign>, <Sign>MASON</Sign>, <Sign>WEAVER</Sign>,{' '}
          <Sign>GARDENER</Sign> or <Sign>CAVE GARDENER</Sign>. With 10 happy, <Sign>BOOKS</Sign>,{' '}
          <Sign>ALCHEMIST</Sign> and <Sign>FIREWORKS</Sign>. With a stable beside the livestock
          farmer’s pen, <Sign>STABLE</Sign>.
        </p>
        <p>
          Each merchant builds a stall with a striped awning and a cottage nearby, and trades for
          what your settlement makes or for emeralds. Every merchant has a story and two requests;
          fill them and their stock gets better. The gardener plants flowers round the houses each
          morning, and the fireworks maker puts on a show at twilight.
        </p>
        <p>
          <Sign>MERCHANT QUARTER</Sign> gives the cottages a lane of their own: add <Sign>MQ</Sign>{' '}
          to a stall’s sign and that merchant lives there.
        </p>
      </Part>

      <Part id="houses" title="Houses">
        <Bullets>
          <li>
            <strong>Additions.</strong> Now and then a worker asks for one: a smokehouse, a hayloft,
            a shop front, a patient ward, a bell. It shows on their talk screen and the Ledger’s
            Requests page. Put the materials in their chest and they build it.
          </li>
          <li>
            <Sign>HOME Bob</Sign> picks Bob’s spot; <Sign>HOME BAKER</Sign> a baker’s. Ask a worker{' '}
            <strong>Where will my house go?</strong> to see the lot outlined.
          </li>
          <li>
            <Sign>BED Bob</Sign> next to a bed in a building you built gives Bob that bed until
            their own house is up.
          </li>
          <li>
            Workers patch gaps in their houses once a day. Explosions don’t break houses, stalls or
            Worker’s Chests.
          </li>
          <li>
            Houses belong to the settlement. A new worker moves into an empty house of their kind
            instead of building one.
          </li>
        </Bullets>
      </Part>

      <Part id="underground" title="Underground">
        <p>
          Put a Worker’s Chest in a cave and the house is carved out of the rock around it. The
          miner, builder, quartermaster, tavern keeper and every merchant are happy to live below
          ground. A <Sign>HOMESTEAD</Sign> sign in a cave digs your own home out of the stone, and
          market stalls cut back into the cave wall.
        </p>
      </Part>

      <Part id="mood" title="Mood, leaving and changing jobs">
        <p>
          Workers are meant to look after themselves while you play. Everyday gripes (sleeping
          outside, days of rain, a quiet tavern) make them grumpy but never bad enough to refuse
          work. Chats, books, meals and treats you hand them (cookies, pie, cake, apples, berries,
          honey; up to three a day) cheer them up.
        </p>
        <p>
          Only real blows, like losing a friend or getting hurt, can make a worker refuse work. A
          worker leaves only if they stay miserable, or have had no work for ten days of play, and
          they warn you first. Both clocks only run while someone is playing nearby.
        </p>
        <p>
          <strong>Change your job</strong> on the talk screen gives a worker another job on the
          spot. They keep their name, mood and friends and start over as a novice.
        </p>
        <p>
          A worker whose tool breaks makes a new one from their chest, the storehouse or the stores:
          stone from cobblestone, wood from planks, never iron.
        </p>
      </Part>
    </GuideShell>
  );
}
