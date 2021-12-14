import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import { BikeGearItem } from 'types/gear';
import { BikeRaceSpecType } from 'types/specs';

const gear: Array<BikeGearItem> = [
  {
    brand: Brand.Specialized,
    category: CategoryType.BikeRace,
    model: 'Demo Loic Bruni',
    score: 900,
    spec: BikeRaceSpecType.Downhill,
    stats: {
      sprint: 50,
      speed: 78,
      airRotation: 25,
      grip: 95,
      absorption: 58,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.BikeRace,
    model: 'POW34RED',
    score: 900,
    spec: BikeRaceSpecType.Downhill,
    stats: {
      sprint: 46,
      speed: 83,
      airRotation: 25,
      grip: 80,
      absorption: 63,
    },
  },
  {
    brand: Brand.SantaCruz,
    category: CategoryType.BikeRace,
    model: 'V10 Syndicate',
    score: 900,
    spec: BikeRaceSpecType.Downhill,
    stats: {
      sprint: 42,
      speed: 86,
      airRotation: 25,
      grip: 80,
      absorption: 73,
    },
  },
  {
    brand: Brand.RR,
    category: CategoryType.BikeRace,
    model: 'Decalmaster',
    score: 805,
    spec: BikeRaceSpecType.Downhill,
    stats: {
      sprint: 41,
      speed: 80,
      airRotation: 25,
      grip: 70,
      absorption: 70,
    },
  },
  {
    brand: Brand.Kona,
    category: CategoryType.BikeRace,
    model: 'Process 153 CR DL 29 01',
    score: 805,
    spec: BikeRaceSpecType.Downhill,
    stats: {
      sprint: 45,
      speed: 76,
      airRotation: 25,
      grip: 80,
      absorption: 60,
    },
  },
  {
    brand: Brand.Specialized,
    category: CategoryType.BikeRace,
    model: 'Demo 02',
    score: 805,
    spec: BikeRaceSpecType.Downhill,
    stats: {
      sprint: 0,
      speed: 0,
      airRotation: 25,
      grip: 0,
      absorption: 0,
    },
  },
];

export default gear;
