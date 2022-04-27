import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { WingsuitGearItem } from 'types/gear';
import { AirSpecType } from 'types/specs';

const gear: Array<WingsuitGearItem> = [
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Ural Advanced',
    score: 900,
    spec: AirSpecType.Wingsuit,
    stats: {
      vertical: 80,
      horizontal: 85,
      slowMode: 50,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Harmattan Advanced',
    score: 900,
    spec: AirSpecType.Wingsuit,
    stats: {
      vertical: 80,
      horizontal: 50,
      slowMode: 85,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Atlas Advanced',
    score: 900,
    spec: AirSpecType.Wingsuit,
    stats: {
      vertical: 80,
      horizontal: 75,
      slowMode: 60,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Alaska',
    score: 900,
    spec: AirSpecType.Wingsuit,
    stats: {
      vertical: 50,
      horizontal: 80,
      slowMode: 85,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Williwaw Advanced',
    score: 800,
    spec: AirSpecType.Wingsuit,
    stats: {
      vertical: 46,
      horizontal: 72,
      slowMode: 85,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Tramontana Advanced',
    score: 800,
    spec: AirSpecType.Wingsuit,
    stats: {
      vertical: 61,
      horizontal: 80,
      slowMode: 62,
    },
  },
];

export default gear;
