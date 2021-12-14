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
      mobility: 85,
      speed: 65,
      engineBoost: 70,
    },
  },
  {
    brand: Brand.Victory,
    category: CategoryType.Air,
    model: 'Yama Grand Opening Rocket',
    score: 900,
    spec: AirSpecType.Rocketwing,
    stats: {
      mobility: 77,
      speed: 85,
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
      mobility: 70,
      speed: 45,
      engineBoost: 85,
    },
  },
];

export default gear;
