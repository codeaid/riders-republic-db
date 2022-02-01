import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { BikeGearItem } from 'types/gear';
import { BikeTricksSpecType } from 'types/specs';

const gear: Array<BikeGearItem> = [
  {
    brand: Brand.Commencal,
    category: CategoryType.BikeTricks,
    model: 'Absolut SX 01',
    score: 900,
    spec: BikeTricksSpecType.Slopestyle,
    stats: {
      sprint: 53,
      speed: 50,
      airRotation: 75,
      grip: 30,
      absorption: 50,
    },
  },
  {
    brand: Brand.SantaCruz,
    category: CategoryType.BikeTricks,
    model: 'Carbon Trials 01',
    score: 900,
    spec: BikeTricksSpecType.Slopestyle,
    stats: {
      sprint: 65,
      speed: 38,
      airRotation: 75,
      grip: 40,
      absorption: 40,
    },
  },
  {
    brand: Brand.Canyon,
    category: CategoryType.BikeTricks,
    model: 'DJ 360 Tomas Lemoine',
    score: 900,
    spec: BikeTricksSpecType.Slopestyle,
    stats: {
      sprint: 57,
      speed: 46,
      airRotation: 75,
      grip: 30,
      absorption: 50,
    },
  },
  {
    brand: Brand.Devinci,
    category: CategoryType.BikeTricks,
    model: 'Sabbath',
    score: 855,
    spec: BikeTricksSpecType.Slopestyle,
    stats: {
      sprint: 60,
      speed: 44,
      airRotation: 70,
      grip: 30,
      absorption: 41,
    },
  },
  {
    brand: Brand.YTIndustries,
    category: CategoryType.BikeTricks,
    model: 'Dirtlove 01',
    score: 855,
    spec: BikeTricksSpecType.Slopestyle,
    stats: {
      sprint: 62,
      speed: 42,
      airRotation: 70,
      grip: 30,
      absorption: 41,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.BikeTricks,
    model: 'Stickerbomb',
    score: 855,
    spec: BikeTricksSpecType.Slopestyle,
    stats: {
      sprint: 58,
      speed: 48,
      airRotation: 70,
      grip: 30,
      absorption: 41,
    },
  },
];

export default gear;
