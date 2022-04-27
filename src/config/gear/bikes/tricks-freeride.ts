import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { BikeGearItem } from 'types/gear';
import { BikeTricksSpecType } from 'types/specs';

const gear: Array<BikeGearItem> = [
  {
    brand: Brand.YTIndustries,
    category: CategoryType.BikeTricks,
    model: 'Capra 01',
    score: 900,
    spec: BikeTricksSpecType.Freeride,
    stats: {
      sprint: 50,
      speed: 42,
      airRotation: 60,
      grip: 80,
      absorption: 70,
    },
  },
  {
    brand: Brand.Commencal,
    category: CategoryType.BikeTricks,
    model: 'Furious Pef',
    score: 900,
    spec: BikeTricksSpecType.Freeride,
    stats: {
      sprint: 30,
      speed: 61,
      airRotation: 60,
      grip: 80,
      absorption: 80,
    },
  },
  {
    brand: Brand.Specialized,
    category: CategoryType.BikeTricks,
    model: 'S-Works Epic Evo 01',
    score: 900,
    spec: BikeTricksSpecType.Freeride,
    stats: {
      sprint: 42,
      speed: 51,
      airRotation: 60,
      grip: 65,
      absorption: 75,
    },
  },
  {
    brand: Brand.Cube,
    category: CategoryType.BikeTricks,
    model: 'TW015 HPC',
    score: 900,
    spec: BikeTricksSpecType.Freeride,
    stats: {
      sprint: 35,
      speed: 57,
      airRotation: 60,
      grip: 80,
      absorption: 70,
    },
  },
  {
    brand: Brand.Canyon,
    category: CategoryType.BikeTricks,
    model: 'Torque',
    score: 855,
    spec: BikeTricksSpecType.Freeride,
    stats: {
      sprint: 38,
      speed: 55,
      airRotation: 54,
      grip: 80,
      absorption: 75,
    },
  },
  {
    brand: Brand.Commencal,
    category: CategoryType.BikeTricks,
    model: 'Furious Kyle Strait 01',
    score: 855,
    spec: BikeTricksSpecType.Freeride,
    stats: {
      sprint: 44,
      speed: 49,
      airRotation: 54,
      grip: 80,
      absorption: 75,
    },
  },
  {
    brand: Brand.Canyon,
    category: CategoryType.BikeTricks,
    model: 'Strive CF Team 02',
    score: 855,
    spec: BikeTricksSpecType.Freeride,
    stats: {
      sprint: 39,
      speed: 52,
      airRotation: 56,
      grip: 80,
      absorption: 75,
    },
  },
];

export default gear;
