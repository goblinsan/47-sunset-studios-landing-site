import type { Metadata } from 'next';
import { Bullets, GuideShell, Part, Sign, Steps, Tip } from '../../_components/GuideShell';

export const metadata: Metadata = {
  title: 'Come with me: taking Bedrock Workers along',
  description:
    'Take a guard, miner or woodcutter with you, point them at work, and lead a job seeker to the chest you want them to take.',
};

export default function ComeWithMe() {
  return (
    <GuideShell
      slug="come-with-me"
      title="Come with me"
      intro={
        <>
          Some workers will follow you. Talk to them and pick <strong>Come with me</strong>. Here’s
          who, and what they do on the way.
        </>
      }
    >
      <Part id="who" title="Who can come along">
        <Bullets>
          <li>
            <strong>Guard</strong>: fights for you.
          </li>
          <li>
            <strong>Miner</strong>: digs where you point.
          </li>
          <li>
            <strong>Woodcutter</strong>: clears trees where you point.
          </li>
          <li>
            <strong>Job seeker</strong>: follows you to a chest.
          </li>
        </Bullets>
      </Part>

      <Part id="trip" title="Before a trip">
        <p>
          A guard or miner packs all the bread in their chest (a miner their torches too) and takes
          a day’s pay from it for each day out. Stock the chest for the length of the trip. Use
          bread on them on the way to hand them the whole stack.
        </p>
        <p>
          They keep up with you day and night, through portals into the Nether and the End, and turn
          up beside you if they fall behind. <strong>Go home</strong>, running out of bread, or you
          leaving the game sends them home with what’s left.
        </p>
      </Part>

      <Part id="guard" title="A guard">
        <p>
          Fights any monster within 16 blocks of you, except endermen and zombified piglins. On duty
          a guard has resistance and regeneration, and 40 to 80 health depending on their sword.
        </p>
      </Part>

      <Part id="miner" title="A miner">
        <Steps>
          <li>
            Hold a pickaxe and crouch beside the miner for two seconds, looking the way to dig. They
            dig 8 blocks that way. Look down for a sloping tunnel.
          </li>
          <li>
            Or put up a <Sign>MINE</Sign> sign within 10 blocks of you and they dig a tunnel there,
            just as at home, until it ends.
          </li>
        </Steps>
        <p>
          Once they’ve started you can go off exploring. They keep digging while you’re in the same
          dimension, then come and find you. They carry what they dig:{' '}
          <strong>Hand over what you’ve dug</strong> drops it at your feet.
        </p>
      </Part>

      <Part id="woodcutter" title="A woodcutter">
        <p>
          Axe in hand, crouch beside them for two seconds looking the way to clear, and they clear
          there. Or put up a <Sign>CLEAR</Sign> sign near you. They come along from their free time
          too, and mid-trip: Come with me overrides everything, so they put what they have in their
          chest and come.
        </p>
        <p>
          At home, <strong>Stop cutting</strong> brings them in until morning and{' '}
          <strong>Back to work</strong> sends them out again.
        </p>
      </Part>

      <Part id="seeker" title="Leading a job seeker">
        <p>
          A job seeker walks to any stocked Worker’s Chest within 192 blocks. If one can’t find
          yours, or you want them at a particular chest, talk to them and pick{' '}
          <strong>Come with me</strong>. They take the first stocked chest they come within 6 blocks
          of. <strong>Wait here</strong> stops them following.
        </p>
        <Tip>
          Seekers leave at nightfall, so lead them in daytime. A new one comes each morning.
        </Tip>
      </Part>

      <Part id="pets" title="Pets and the animal handler">
        <p>
          The animal handler doesn’t follow you, but looks after your pets. Pick{' '}
          <strong>Look after my pets</strong> to hand over the tamed wolves and cats within 16
          blocks of you. They keep their names, coats and collars, and join the pack’s night
          patrols. <strong>Give me back</strong> returns one to you.
        </p>
      </Part>
    </GuideShell>
  );
}
