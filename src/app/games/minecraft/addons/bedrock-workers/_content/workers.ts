/**
 * Every job and merchant, once. The landing cards, the Workers page and the reference table all
 * read from here, so a fact changes in one place.
 */

export type Worker = {
  slug: string;
  title: string;
  /** What goes in the Worker's Chest to hire. */
  kit: string;
  /** Pay from Novice to Master, and how often. */
  pay: string;
  paid: string;
  workstation: string;
  house: string;
  /** House render in public/, without extension. */
  img?: string;
  /** One line for a card. */
  card: string;
  /** The worker's section on the Workers page. */
  about: string[];
  signs?: string[];
  talk?: string[];
  addition?: string;
};

const BREAD = '1, 1, 2, 2, 3 bread';

export const WORKERS: Worker[] = [
  {
    slug: 'fisherman',
    title: 'Fisherman',
    kit: 'Fishing rod + bread',
    pay: BREAD,
    paid: 'a trip',
    workstation: 'Barrel',
    house: 'Fishing House',
    img: 'fishing-house',
    card: 'Casts at the nearest water and brings home the catch, sometimes treasure.',
    about: [
      'The first hire, and the start of the economy: their fish is the farmer’s pay. The chest has to be within 8 blocks of water.',
      'Each trip brings back fish, and now and then junk or treasure: an enchanted book, a name tag, a saddle, a nautilus shell. They keep 32 fish in their chest for you, then fish only while the settlement is short.',
    ],
    addition: 'a smokehouse',
  },
  {
    slug: 'woodcutter',
    title: 'Woodcutter',
    kit: 'Any axe + bread',
    pay: BREAD,
    paid: 'a trip',
    workstation: 'Fletching table',
    house: 'Log Cabin',
    img: 'log-cabin',
    card: 'Fells trees, replants every one, and clears land where you put a CLEAR sign.',
    about: [
      'Cuts the nearest natural trees within 20 blocks of their chest and replants a sapling for every one. Bone meal in their chest (up to 4 a trip) grows saplings into trees when no grown tree is left.',
      'They keep going until the settlement has the wood for every house and addition still to build, plus a spare stack, and keep 64 logs in their chest for you.',
    ],
    signs: [
      'WOOD: two signs mark the corners of the forest to keep to, one marks a 10-block square',
      'CLEAR: within 48 blocks of their chest, clear-cuts a strip 16 long and 9 wide, away from the writing',
    ],
    talk: ['Come with me', 'Stop cutting', 'Back to work'],
    addition: 'a woodshed',
  },
  {
    slug: 'farmer',
    title: 'Farmer',
    kit: 'Hoe + raw fish',
    pay: '2, 2, 4, 4, 6 raw fish',
    paid: 'a trip',
    workstation: 'Composter',
    house: 'Farmhouse',
    img: 'farmhouse',
    card: 'Tills by the water and grows wheat, plus any other crop you give them.',
    about: [
      'Tends farmland near their chest, or tills dirt and grass within 4 blocks of water. Ripe crops are harvested and replanted.',
      'Wheat from the start. Put a carrot, a potato, beetroot seeds, pumpkin or melon seeds, or sugar cane in their chest and they grow that too. While the settlement is short of wheat, wheat keeps three quarters of the field. Once the settlement holds a stack of another crop they stop growing it, and seeds come home only while there are fewer than 64.',
    ],
    addition: 'a barn',
  },
  {
    slug: 'livestock-farmer',
    title: 'Livestock Farmer',
    kit: 'Bucket or shears + wheat',
    pay: '2, 2, 4, 4, 6 wheat',
    paid: 'a round',
    workstation: 'Cauldron',
    house: 'Cow Barn House',
    img: 'cow-barn',
    card: 'Milks, shears and breeds the animals in the pen by their barn.',
    about: [
      'Looks after the animals in the fenced pen by the barn; extend the fence and the pen grows. Each round they gather what the animals give without harm: milk, mushroom stew, wool, scutes, feathers and eggs. You provide the buckets, bowls, shears, brush and feed.',
      'With feed in their chest they breed a pair of each kind until the pen is full: wheat for cows, sheep and goats; carrots, potatoes or beetroot for pigs; seeds for chickens; carrots or dandelions for rabbits; spider eyes for armadillos; seagrass for turtles.',
    ],
    addition: 'a hayloft, then a stable that brings the Stable Master',
  },
  {
    slug: 'baker',
    title: 'Baker',
    kit: 'Bucket of milk + wheat',
    pay: BREAD,
    paid: 'kept from each batch',
    workstation: 'Smoker',
    house: 'Bakery',
    img: 'bakery',
    card: 'Turns wheat into the bread everyone is paid in, then cakes, pies and cookies.',
    about: [
      'The milk only hires them. After that they need wheat, 3 a loaf, 6 loaves a batch at first, and keep a little of each batch as pay.',
      'Bread comes first, and they fill a store of three extra stacks for the settlement. Once that’s full they bake treats for the tavern: cake, pumpkin pie and cookies. They grind sugar cane into sugar themselves. A cake, 4 pies and 16 cookies stay in their chest for you.',
    ],
    addition: 'a shop front',
  },
  {
    slug: 'page',
    title: 'Page',
    kit: 'Book + bread',
    pay: BREAD,
    paid: 'a round',
    workstation: 'Lectern',
    house: 'Storehouse',
    img: 'storehouse',
    card: 'Runs the storehouse and tops up every Worker’s Chest with pay, tools and materials.',
    about: [
      'Their chest becomes the storehouse. Every few minutes they walk to every Worker’s Chest within 256 blocks, anyone’s, and top it up: about three trips’ worth of pay and supplies, a new tool if one is gone, and the materials each worker still needs for their house.',
      'They bring the catch, logs, treasure and spare bread back. They never take a worker’s tool or the materials being saved for a house, and tell you which chests are too far to reach. With no bread in the storehouse they do one round on credit.',
    ],
    addition: 'a storage loft upstairs',
  },
  {
    slug: 'quartermaster',
    title: 'Quartermaster',
    kit: 'Chest + bread',
    pay: BREAD,
    paid: 'a round',
    workstation: 'Lectern',
    house: 'Storage House',
    img: 'storage-house',
    card: 'Gathers what nobody needs and sorts it into labeled store chests.',
    about: [
      'Walks every Worker’s Chest within 256 blocks and takes what nobody needs: fishing treasure and junk, logs once a house is built, saplings, extra tools. It all goes into chests by their STORES sign, labeled Wood, Saplings & Seeds, Food, Treasure, Tools & Gear, Farm & Animals, Building, Stone & Ore and Odds & Ends.',
      'After each round they tidy: part stacks merge, everything goes to its group, and the chests are relabeled so each group sits together. Thirty-two of one odd thing gets its own chest. When the stores are full, what won’t fit is sold to a merchant for emeralds; treasure never is.',
    ],
    signs: ['STORES: where the store chests go'],
    addition: 'another wing of shelves, when the stores fill',
  },
  {
    slug: 'builder',
    title: 'Builder',
    kit: 'Shovel + bread',
    pay: BREAD,
    paid: 'a job',
    workstation: 'Stonecutter',
    house: 'Builder’s Yard',
    img: 'builders-yard',
    card: 'Builds your homestead and the town center, roads, fences and tracks, and moves houses.',
    about: [
      'Builds for you from the materials in their chest, and tells you what’s missing. Your homestead first: a one-room house with a hearth, a bed, a kitchen corner and a porch. Talk to them afterwards to add a bedroom wing, a second floor or a basement.',
      'A site more than 64 blocks away is kept loaded while they work there. With nothing to build for you, they build their own Builder’s Yard.',
    ],
    signs: [
      'HOMESTEAD: your house, at the front steps, door facing the writing',
      'TOWN CENTER: office, fountain, benches and bell; one per world',
      'ROAD, ROAD GRAVEL, ROAD STONE: one network of three-wide paths',
      'FENCE (and GATE): a fence between the corner signs',
      'TRACK or RAIL: a minecart line with stations',
      'MOVE: where a house’s new front steps go',
    ],
    talk: ['Move a building', 'Add a wing, floor or basement'],
    addition: 'a workshop roof over the yard',
  },
  {
    slug: 'miner',
    title: 'Miner',
    kit: 'Pickaxe + bread',
    pay: BREAD,
    paid: 'a trip',
    workstation: 'Stonecutter',
    house: 'Miner’s Lodge',
    img: 'miners-lodge',
    card: 'Digs a tunnel from a MINE sign, lights it with your torches, and brings home all they dig.',
    about: [
      'Digs a tunnel 3 wide and 5 tall away from the sign’s writing, sloping down at 45 degrees, or level. Each trip digs 8 blocks (24 at Master) and brings back everything: cobblestone, dirt, and ore as a player would get it.',
      'Torches in their chest go on the floor every 4 blocks. They stop for good at water, lava or bedrock and tell you why, keep the end of a long tunnel loaded, and lay a floor over any drop.',
    ],
    signs: [
      'MINE: within 24 blocks of their chest, the tunnel’s start',
      'MINE STRAIGHT: a level tunnel',
    ],
    talk: ['Come with me', 'Hand over what you’ve dug', 'Go home', 'Stop digging this tunnel'],
    addition: 'a second floor',
  },
  {
    slug: 'guard',
    title: 'Guard',
    kit: 'Sword + bread',
    pay: BREAD,
    paid: 'a shift',
    workstation: 'Grindstone',
    house: 'Guard Tower',
    img: 'guard-tower',
    card: 'Patrols by day, watches at night, and comes running when a worker is hurt.',
    about: [
      'Goes from worker to worker all shift, the hurt and those sleeping outside first, and comes running when a monster hurts one. In the settlement, the nearest free guard comes after monsters near you. Creepers first: they run at them and cut them down before they go off.',
      'On duty they have resistance and regeneration and 40 to 80 health depending on the sword. After the night watch they sleep until early afternoon, unless a monster wakes them.',
    ],
    signs: ['GUARD POST: a spot a guard holds day and night; a bell nearby is rung for raiders'],
    talk: ['Come with me', 'Go home'],
    addition: 'a bell and a lookout bench',
  },
  {
    slug: 'doctor',
    title: 'Doctor',
    kit: 'Glass bottle + bread',
    pay: BREAD,
    paid: 'a visit',
    workstation: 'Brewing stand',
    house: 'Clinic',
    img: 'clinic',
    card: 'Finds the injured and nurses them back with flowers and honey.',
    about: [
      'By day they find injured workers within 256 blocks and treat them with a wildflower or a honey bottle from their chest. A doctor gets a collapsed worker up in about an hour, where alone it takes half a day and about 1 in 8 die.',
      'When medicine runs low they pick flowers near the clinic on quiet days. Three or more hurt in a day and they tell you the settlement needs guards. Once the clinic has its patient ward, patients are carried to an empty bed there.',
    ],
    addition: 'a patient ward',
  },
  {
    slug: 'tavern-keeper',
    title: 'Tavern Keeper',
    kit: 'Barrel + bread',
    pay: BREAD,
    paid: 'a day',
    workstation: 'None',
    house: 'Tavern',
    img: 'tavern',
    card: 'Builds the tavern and serves the baker’s treats. In the evening, everyone comes in.',
    about: [
      'Builds the tavern at a TAVERN sign or near their chest, and keeps it open from morning till night. By day, a worker with nothing to do drops in for a bite.',
      'Late in the afternoon everyone knocks off and walks over, gets served from the food in their chest, takes turns at karaoke and goes to bed happier. Cake, pie and cookies are served first, and cheer a guest even more. A busy evening pleases the keeper; an empty one makes them grumpy.',
    ],
    signs: ['TAVERN: where the tavern goes'],
    addition: 'a bigger hall, after good crowds',
  },
  {
    slug: 'cook',
    title: 'Cook',
    kit: 'Smoker + bread',
    pay: '1, 1, 1, 2, 2 bread',
    paid: 'a meal',
    workstation: 'Smoker',
    house: 'Kitchen',
    img: 'bakery',
    card: 'Lays out breakfast, lunch and dinner. A good meal lifts everyone’s mood.',
    about: [
      'Cooks breakfast just after sunrise, lunch at noon and dinner late in the afternoon, and lays each meal on plates: item frames laid flat on a table near a dining sign. Workers nearby come over, eat and go back cheered.',
      'They cook the raw meat, fish and potatoes in their chest and serve stews, pies, fruit and bread as they are, hot food first. Leftovers are cleared at the next meal, and a stew’s bowl comes back.',
    ],
    signs: ['DINING HALL: the settlement’s table', 'DINING ROOM: a table laid only for you'],
    addition: 'a serving counter',
  },
  {
    slug: 'animal-handler',
    title: 'Animal Handler',
    kit: 'Lead + bread',
    pay: BREAD,
    paid: 'a night',
    workstation: 'Fletching table',
    house: 'Kennel',
    img: 'log-cabin',
    card: 'Keeps a pack of wolves and cats that patrols at night, and looks after your pets.',
    about: [
      'Keeps a pack of 2 wolves and cats, one more each level up to 6, and tames a new one each day: 3 bones for a wolf, 3 raw fish for a cat. The pack rests by day and patrols at night. Wolves fight monsters; creepers and phantoms keep away from the cats.',
      'Paid at dusk, they send the pack out and walk the patrol themselves. Unpaid, the pack stays home.',
    ],
    signs: ['PATROL: one sign patrols about 12 blocks round it; two mark the corners of an area'],
    talk: ['Look after my pets', 'Give me back'],
    addition: 'a covered run',
  },
  {
    slug: 'advisor',
    title: 'Advisor',
    kit: 'Lectern + bread',
    pay: '1, 1, 1, 2, 2 bread',
    paid: 'a day',
    workstation: 'Lectern',
    house: 'Town center office',
    img: 'town-center',
    card: 'Lives at the town center and tells you each morning what the settlement needs.',
    about: [
      'Hired once the builder has built the town center. Job seekers then gather at the town center, sweeping the plaza and tending the flowers until a stocked chest needs one.',
      'Each morning they send you the few things that need attention. Ask for the whole report: the hurt, anyone thinking of leaving, a bread shortage, jobs your settlement could use, empty guard posts, builds waiting for materials, and what’s going well.',
    ],
    talk: ['How is the settlement doing?'],
  },
  {
    slug: 'stable-master',
    title: 'Stable Master',
    kit: 'Comes on their own',
    pay: 'Not paid',
    paid: '',
    workstation: 'None',
    house: 'Stall by the stable',
    img: 'cow-barn',
    card: 'Moves in once there’s a stable, and breeds horses with golden carrots.',
    about: [
      'Comes with a STABLE sign once 5 workers are happy and the livestock farmer’s barn has its stable. Sells leads, hay, saddles, horse armor and golden carrots.',
      'Each morning they tend the horses, donkeys and mules near the stable and breed them up to 6, a foal every other day, with two golden carrots or golden apples from the livestock farmer’s chest.',
    ],
    signs: ['STABLE: where the stall goes'],
  },
];

export type Merchant = {
  slug: string;
  title: string;
  sign: string;
  unlock: string;
  sells: string;
  later?: boolean;
  /** In their own words, when you sneak and use them. */
  story: string;
  /** Bring this, and their stock gets better. */
  requests: { bring: string; unlocks: string }[];
  /** For filling both. */
  gift: string;
};

export const MERCHANTS: Merchant[] = [
  {
    slug: 'smith',
    title: 'Smith',
    sign: 'SMITH',
    unlock: '5 happy',
    sells: 'Iron, tools, armor, an anvil',
    story:
      'I kept a forge in the mountains until raiders burned it down. All I saved was my hammer.',
    requests: [
      { bring: 'a bucket of lava', unlocks: 'iron tools, swords and shields' },
      { bring: '4 blaze rods', unlocks: 'iron armor and anvils' },
    ],
    gift: 'an iron sword with Sharpness III',
  },
  {
    slug: 'mason',
    title: 'Mason',
    sign: 'MASON',
    unlock: '5 happy',
    sells: 'Bricks, glass, lanterns, quartz, sea lanterns',
    story: 'My family built the great bridges in the south. I’m the last one who knows how.',
    requests: [
      { bring: '16 amethyst shards', unlocks: 'polished stone, smooth stone and terracotta' },
      { bring: '8 prismarine shards', unlocks: 'quartz, glowstone and sea lanterns' },
    ],
    gift: '8 sea lanterns',
  },
  {
    slug: 'weaver',
    title: 'Weaver',
    sign: 'WEAVER',
    unlock: '5 happy',
    sells: 'Wool, beds, carpet, string, leather, saddles',
    story: 'In my village every family had its own color. I want to weave them all again.',
    requests: [
      { bring: '8 glow ink sacs', unlocks: 'more colors, beds, carpet and leather' },
      { bring: '4 phantom membranes', unlocks: 'paintings, banners and saddles' },
    ],
    gift: 'a saddle',
  },
  {
    slug: 'gardener',
    title: 'Gardener',
    sign: 'GARDENER',
    unlock: '5 happy',
    sells:
      'Every sapling, seeds, crops, flower pots, honey. Plants flowers round the houses each morning.',
    story: 'I grew up in the lush caves, where the glow berries hang from the roof. I miss them.',
    requests: [
      { bring: '8 glow berries', unlocks: 'dark oak and cherry saplings, crops and cocoa' },
      {
        bring: '2 spore blossoms',
        unlocks: 'bamboo, cactus, berries, honey, mangrove and pale oak',
      },
    ],
    gift: '4 golden carrots',
  },
  {
    slug: 'cave-gardener',
    title: 'Cave Gardener',
    sign: 'CAVE GARDENER',
    unlock: '5 happy',
    sells: 'Glow berries, moss, azaleas, dripleaf and other cave plants',
    story:
      'I was born under the mountain, where the moss grows thick and the berries light the dark. Up here the sun hurts my eyes.',
    requests: [
      {
        bring: '16 glow lichen',
        unlocks: 'dripleaf, flowering azalea leaves, rooted dirt and dripstone',
      },
      {
        bring: 'an echo shard',
        unlocks: 'spore blossoms, glow ink, glow frames, mushrooms and amethyst',
      },
    ],
    gift: '4 spore blossoms',
  },
  {
    slug: 'stable-master-stall',
    title: 'Stable Master',
    sign: 'STABLE',
    unlock: '5 happy and a stable',
    sells: 'Leads, hay, saddles, horse armor, golden carrots',
    story:
      'My family bred the fastest horses on the plains. When the raiders took the herd, I swore I’d raise another.',
    requests: [
      {
        bring: 'a saddle',
        unlocks: 'saddles, golden carrots, iron horse armor, name tags and chests for donkeys',
      },
      { bring: '4 golden apples', unlocks: 'gold and diamond horse armor and golden apples' },
    ],
    gift: 'diamond horse armor',
  },
  {
    slug: 'book-trader',
    title: 'Book Trader',
    sign: 'BOOKS',
    unlock: '10 happy',
    sells: 'Books, enchanted books, name tags, bottles o’ enchanting',
    later: true,
    story: 'My mentor kept the finest library in the world. Its secret was the ink.',
    requests: [
      { bring: 'any enchanted book', unlocks: 'enchanted books and name tags' },
      {
        bring: '3 ghast tears',
        unlocks: 'more enchanted books, bottles o’ enchanting, clocks and compasses',
      },
    ],
    gift: 'a Mending book',
  },
  {
    slug: 'alchemist',
    title: 'Alchemist',
    sign: 'ALCHEMIST',
    unlock: '10 happy',
    sells: 'Healing, night vision, fire resistance and other potions; golden apples',
    later: true,
    story:
      'I learned everything from old Mother Wren, who brewed for three villages. She never wrote her best recipe down.',
    requests: [
      {
        bring: '4 nether wart',
        unlocks: 'swiftness, water breathing, leaping and regeneration potions',
      },
      {
        bring: '2 ghast tears',
        unlocks: 'strength, invisibility and splash healing potions, and golden apples',
      },
    ],
    gift: '2 golden apples',
  },
  {
    slug: 'fireworks-maker',
    title: 'Fireworks Maker',
    sign: 'FIREWORKS',
    unlock: '10 happy',
    sells: 'Rockets, firework stars, gunpowder, TNT. Puts on a show over the tavern at twilight.',
    later: true,
    story: 'Every summer my father lit up the sky over the harbor. I want to do it here.',
    requests: [
      { bring: '8 gunpowder', unlocks: 'big packs of rockets and dyes for firework stars' },
      {
        bring: '4 phantom membranes',
        unlocks: 'huge packs of rockets, glowstone dust, diamonds and TNT',
      },
    ],
    gift: '32 firework rockets',
  },
];
