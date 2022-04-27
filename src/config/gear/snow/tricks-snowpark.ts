import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { SnowGearItem } from 'types/gear';
import { SnowTricksSpecType } from 'types/specs';

const gear: Array<SnowGearItem> = [
  {
    brand: Brand.Nitro,
    category: CategoryType.SnowTricks,
    kind: 'SB',
    model: 'Beast',
    score: 900,
    spec: SnowTricksSpecType.Snowpark,
    stats: {
      speed: 57,
      airRotation: 72,
      deepSnow: 30,
      absorption: 55,
    },
  },
  {
    brand: Brand.Armada,
    category: CategoryType.SnowTricks,
    kind: 'SK',
    model: 'Edollo',
    score: 900,
    spec: SnowTricksSpecType.Snowpark,
    stats: {
      speed: 57,
      airRotation: 72,
      deepSnow: 30,
      absorption: 55,
    },
  },
  {
    brand: Brand.Lobster,
    category: CategoryType.SnowTricks,
    kind: 'SB',
    model: 'Lucas Beaufort Artist Edition',
    score: 900,
    spec: SnowTricksSpecType.Snowpark,
    stats: {
      speed: 54,
      airRotation: 75,
      deepSnow: 30,
      absorption: 55,
    },
  },
  {
    brand: Brand.Faction,
    category: CategoryType.SnowTricks,
    kind: 'SK',
    model: 'Prodigy 2.0 Kengo',
    score: 900,
    spec: SnowTricksSpecType.Snowpark,
    stats: {
      speed: 54,
      airRotation: 75,
      deepSnow: 30,
      absorption: 55,
    },
  },
  {
    brand: Brand.Kemper,
    category: CategoryType.SnowTricks,
    kind: 'SK',
    model: 'Freestyle',
    score: 900,
    spec: SnowTricksSpecType.Snowpark,
    stats: {
      speed: 56,
      airRotation: 73,
      deepSnow: 30,
      absorption: 55,
    },
  },
  {
    brand: Brand.Yes,
    category: CategoryType.SnowTricks,
    kind: 'SB',
    model: 'Greats Uninc',
    score: 805,
    spec: SnowTricksSpecType.Snowpark,
    stats: {
      speed: 48,
      airRotation: 75,
      deepSnow: 30,
      absorption: 55,
    },
  },
  {
    brand: Brand.Armada,
    category: CategoryType.SnowTricks,
    kind: 'SK',
    model: 'ARV 86 01',
    score: 805,
    spec: SnowTricksSpecType.Snowpark,
    stats: {
      speed: 48,
      airRotation: 75,
      deepSnow: 30,
      absorption: 55,
    },
  },
];

export default gear;
