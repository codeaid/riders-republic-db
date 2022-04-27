import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { BikeGearItem } from 'types/gear';
import { BikeRaceSpecType } from 'types/specs';

const gear: Array<BikeGearItem> = [
  {
    brand: Brand.RR,
    category: CategoryType.BikeRace,
    model: 'C6TI22',
    score: 900,
    spec: BikeRaceSpecType.Road,
    stats: {
      sprint: 83,
      speed: 80,
      airRotation: 15,
      grip: 2,
      absorption: 38,
    },
  },
  {
    brand: Brand.Kona,
    category: CategoryType.BikeRace,
    model: 'Libre DL',
    score: 900,
    spec: BikeRaceSpecType.Road,
    stats: {
      sprint: 78,
      speed: 82,
      airRotation: 15,
      grip: 30,
      absorption: 40,
    },
  },
  {
    brand: Brand.BMC,
    category: CategoryType.BikeRace,
    model: 'Timemachine Road 01 One',
    score: 900,
    spec: BikeRaceSpecType.Road,
    stats: {
      sprint: 81,
      speed: 81,
      airRotation: 15,
      grip: 15,
      absorption: 35,
    },
  },
  {
    brand: Brand.Cube,
    category: CategoryType.BikeRace,
    model: 'Litening C68 X',
    score: 900,
    spec: BikeRaceSpecType.Road,
    stats: {
      sprint: 85,
      speed: 77,
      airRotation: 15,
      grip: 15,
      absorption: 35,
    },
  },
];

export default gear;
