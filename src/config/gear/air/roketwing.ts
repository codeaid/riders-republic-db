import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { RocketwingGearItem } from 'types/gear';
import { AirSpecType } from 'types/specs';

const gear: Array<RocketwingGearItem> = [
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Icarus',
    score: 900,
    spec: AirSpecType.Rocketwing,
    stats: {
      speed: 85,
      mobility: 65,
      engineBoost: 70,
    },
  },
  {
    brand: Brand.Victory,
    category: CategoryType.Air,
    model: 'Grand Opening Rocket',
    score: 900,
    spec: AirSpecType.Rocketwing,
    stats: {
      speed: 77,
      mobility: 85,
      engineBoost: 77,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.Air,
    model: 'Firebase',
    score: 900,
    spec: AirSpecType.Rocketwing,
    stats: {
      speed: 70,
      mobility: 45,
      engineBoost: 85,
    },
  },
];

export default gear;
