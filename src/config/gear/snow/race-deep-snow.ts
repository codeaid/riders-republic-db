import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { SnowGearItem } from 'types/gear';
import { SnowRaceSpecType } from 'types/specs';

const gear: Array<SnowGearItem> = [
  {
    brand: Brand.Nitro,
    category: CategoryType.SnowRace,
    kind: 'SB',
    model: 'Mountain X Grif',
    score: 900,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 78,
      airRotation: 25,
      deepSnow: 80,
      absorption: 85,
    },
  },
  {
    brand: Brand.Armada,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Zero Declivity X',
    score: 900,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 78,
      airRotation: 25,
      deepSnow: 80,
      absorption: 85,
    },
  },
  {
    brand: Brand.Rossignol,
    category: CategoryType.SnowRace,
    kind: 'SB',
    model: 'SNB XV XDLR',
    score: 900,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 73,
      airRotation: 25,
      deepSnow: 85,
      absorption: 85,
    },
  },
  {
    brand: Brand.Faction,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Dictator 4.0',
    score: 900,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 73,
      airRotation: 25,
      deepSnow: 85,
      absorption: 85,
    },
  },
  {
    brand: Brand.Rossignol,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Sender 106 TI Plus',
    score: 900,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 79,
      airRotation: 25,
      deepSnow: 79,
      absorption: 85,
    },
  },
  {
    brand: Brand.Nidecker,
    category: CategoryType.SnowRace,
    kind: 'SB',
    model: 'Tracer',
    score: 805,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 73,
      airRotation: 25,
      deepSnow: 78,
      absorption: 80,
    },
  },
  {
    brand: Brand.Atomic,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Bent Chetler 120',
    score: 805,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 73,
      airRotation: 25,
      deepSnow: 78,
      absorption: 80,
    },
  },
  {
    brand: Brand.Salomon,
    category: CategoryType.SnowRace,
    kind: 'SB',
    model: 'Stance 96',
    score: 855,
    spec: SnowRaceSpecType.DeepSnow,
    stats: {
      speed: 76,
      airRotation: 25,
      deepSnow: 79,
      absorption: 80,
    },
  },
];

export default gear;
