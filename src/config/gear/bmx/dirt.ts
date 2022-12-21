import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { BmxGearItem } from 'types/gear';
import { BmxSpecType } from 'types/specs';

const gear: Array<BmxGearItem> = [
  {
    brand: Brand.Kink,
    category: CategoryType.Bmx,
    model: 'Rollup Velvet',
    score: 900,
    spec: BmxSpecType.Dirt,
    stats: {
      sprint: 55,
      speed: 51,
      airRotation: 80,
      grip: 45,
      absorption: 61,
    },
  },
  {
    brand: Brand.Tallorder,
    category: CategoryType.Bmx,
    model: '315 V2 Red',
    score: 900,
    spec: BmxSpecType.Dirt,
    stats: {
      sprint: 51,
      speed: 55,
      airRotation: 80,
      grip: 45,
      absorption: 61,
    },
  },
  {
    brand: Brand.Wethepeople,
    category: CategoryType.Bmx,
    model: 'Chaos Machine',
    score: 900,
    spec: BmxSpecType.Dirt,
    stats: {
      sprint: 53,
      speed: 53,
      airRotation: 80,
      grip: 45,
      absorption: 61,
    },
  },
  {
    brand: Brand.Wethepeople,
    category: CategoryType.Bmx,
    model: 'Pathfinder',
    score: 850,
    spec: BmxSpecType.Dirt,
    stats: {
      sprint: 40,
      speed: 40,
      airRotation: 88,
      grip: 40,
      absorption: 40,
    },
  },
];

export default gear;
