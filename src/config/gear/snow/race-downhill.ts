import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { SnowGearItem } from 'types/gear';
import { SnowRaceSpecType } from 'types/specs';

const gear: Array<SnowGearItem> = [
  {
    brand: Brand.Rossignol,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Hero Athlete GS',
    score: 900,
    spec: SnowRaceSpecType.Downhill,
    stats: {
      speed: 90,
      airRotation: 15,
      deepSnow: 32,
      absorption: 43,
    },
  },
  {
    brand: Brand.Atomic,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Redster X9',
    score: 900,
    spec: SnowRaceSpecType.Downhill,
    stats: {
      speed: 90,
      airRotation: 15,
      deepSnow: 30,
      absorption: 45,
    },
  },
  {
    brand: Brand.Rossignol,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Hero Master',
    score: 814,
    spec: SnowRaceSpecType.Downhill,
    stats: {
      speed: 87,
      airRotation: 15,
      deepSnow: 28,
      absorption: 40,
    },
  },
  {
    brand: Brand.Atomic,
    category: CategoryType.SnowRace,
    kind: 'SK',
    model: 'Redster',
    score: 814,
    spec: SnowRaceSpecType.Downhill,
    stats: {
      speed: 87,
      airRotation: 15,
      deepSnow: 26,
      absorption: 42,
    },
  },
];

export default gear;
