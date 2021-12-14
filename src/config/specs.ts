import { CategoryType } from 'types/categories';
import {
  AirSpecType,
  BikeRaceSpecType,
  BikeTricksSpecType,
  GearSpec,
  SnowRaceSpecType,
  SnowTricksSpecType,
} from 'types/specs';

// All available in-game category specializations
export const specs: Array<GearSpec> = [
  {
    category: CategoryType.BikeRace,
    code: 'DH',
    description:
      'Downhill Bikes are designed to descend the hardest slopes and take quite the beating on technical trails. They are stable, durable and quick.',
    name: 'Downhill',
    type: BikeRaceSpecType.Downhill,
  },
  {
    category: CategoryType.BikeRace,
    code: 'RO',
    description:
      "Road Bikes are among the fastest gear available, with unmatched pedaling efficiency and amazing sprint, at the cost of being more fragile. If you're going on flat of uphill terrain, they are your go-to.",
    name: 'Road',
    type: BikeRaceSpecType.Road,
  },

  {
    category: CategoryType.BikeTricks,
    code: 'FR',
    description:
      'Built for the sickest drops you can find, Freeride bikes are downhill bikes with better agility allowing huge air tricks.',
    name: 'Freeride',
    type: BikeTricksSpecType.Freeride,
  },
  {
    category: CategoryType.BikeTricks,
    code: 'SP',
    description:
      "Their light weight makes them unbeatable for quick spins and fast trucks, Tail Whip, Bar Spin, it's their thing.",
    name: 'Slopestyle',
    type: BikeTricksSpecType.Slopestyle,
  },

  {
    category: CategoryType.SnowRace,
    code: 'DH',
    description:
      "The fastest skis money can buy. They are designed for groomed snow tracks and you'll reach blazing speeds with them.",
    name: 'Downhill Ski',
    type: SnowRaceSpecType.Downhill,
  },
  {
    category: CategoryType.SnowRace,
    code: 'DS',
    description:
      'Deep Snow snowboards thrive in deep snow, with decent speed and, most of all, a very robust structure. They are ideal for races in wild areas and natural terrain.',
    name: 'Deep Snow',
    type: SnowRaceSpecType.DeepSnow,
  },

  {
    category: CategoryType.SnowTricks,
    code: 'SP',
    description:
      'Snowpark gear is lightweight, agile, and allows for fast spins and spectacular grabs. They are designed to work best in groomed snow.',
    name: 'Snowpark',
    type: SnowTricksSpecType.Snowpark,
  },
  {
    category: CategoryType.SnowTricks,
    code: 'OT',
    description:
      'Off Track skis and snowboards are your typical all-mountain gear, true jack-of-all-trades that will allow you to shred the steepest of mountains in deep snow and take on the craziest jumps.',
    name: 'Off-track',
    type: SnowTricksSpecType.OffTrack,
  },

  {
    category: CategoryType.Air,
    code: 'RW',
    description:
      'The fast and crazy cousin of the wingsuit. With insane speed and up-climbing capability, they are actually closer to a plane than a wingsuit. Boost the engine to reach incredible speeds and try to not break too many bones!',
    name: 'Rocketwing',
    type: AirSpecType.Rocketwing,
  },
  {
    category: CategoryType.Air,
    code: 'WG',
    description:
      'Wingsuits bring you the thrill of flying like a squirrel among the mountains. Grazing the mountain side is just an unbeatable feeling. And if the situation gets too hairy, use slow mode to quickly gain altitude and get away safely.',
    name: 'Wingsuit',
    type: AirSpecType.Wingsuit,
  },
];
