import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { BmxGearItem } from 'types/gear';
import { BmxSpecType } from 'types/specs';

const gear: Array<BmxGearItem> = [
  {
    brand: Brand.Cult,
    category: CategoryType.Bmx,
    model: "Heaven's Gate Begin",
    score: 900,
    spec: BmxSpecType.Park,
    stats: {
      sprint: 42,
      speed: 38,
      airRotation: 90,
      grip: 15,
      absorption: 45,
    },
  },
  {
    brand: Brand.Federal,
    category: CategoryType.Bmx,
    model: 'Boyd ICS2 Cream',
    score: 900,
    spec: BmxSpecType.Park,
    stats: {
      sprint: 39,
      speed: 38,
      airRotation: 89,
      grip: 15,
      absorption: 45,
    },
  },
  {
    brand: Brand.Federal,
    category: CategoryType.Bmx,
    model: 'Lacey Mauve',
    score: 900,
    spec: BmxSpecType.Park,
    stats: {
      sprint: 40,
      speed: 40,
      airRotation: 90,
      grip: 15,
      absorption: 45,
    },
  },
  {
    brand: Brand.Kink,
    category: CategoryType.Bmx,
    model: 'Crosscut Black',
    score: 900,
    spec: BmxSpecType.Park,
    stats: {
      sprint: 38,
      speed: 42,
      airRotation: 89,
      grip: 30,
      absorption: 40,
    },
  },
  {
    brand: Brand.Tallorder,
    category: CategoryType.Bmx,
    model: 'Cranmer 195 Orange',
    score: 900,
    spec: BmxSpecType.Park,
    stats: {
      sprint: 38,
      speed: 42,
      airRotation: 90,
      grip: 15,
      absorption: 45,
    },
  },
  {
    brand: Brand.Prada,
    category: CategoryType.Bmx,
    model: 'Optical BMX',
    score: 850,
    spec: BmxSpecType.Park,
    stats: {
      sprint: 39,
      speed: 40,
      airRotation: 86,
      grip: 30,
      absorption: 40,
    },
  },
];

export default gear;
