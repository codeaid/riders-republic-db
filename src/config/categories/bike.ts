import {
  bikeRaceDownhillGear,
  bikeRaceRoadGear,
  bikeTricksFreerideGear,
  bikeTricksSlopestyleGear,
} from '@/config/gear';
import type { BikeCategory, BikeRaceCategory, BikeTricksCategory } from '@/types/categories';

export const bikeRaceCategory: BikeRaceCategory = {
  id: 'bike:race',
  colorClass: 'bg-category-bike-race',
  iconClass: 'bg-icon-category-bike-race',
  name: 'Race',
  slug: 'race',
  specializations: [
    {
      id: 'downhill',
      code: 'DH',
      description:
        'Downhill Bikes are designed to descend the hardest slopes and take quite the beating on technical trails. They are stable, durable and quick.',
      gear: bikeRaceDownhillGear,
      name: 'Downhill',
      slug: 'downhill',
      title: 'Downhill Bikes',
    },
    {
      id: 'road',
      code: 'RO',
      description:
        "Road Bikes are among the fastest gear available, with unmatched pedaling efficiency and amazing sprint, at the cost of being more fragile. If you're going on flat of uphill terrain, they are your go-to.",
      gear: bikeRaceRoadGear,
      name: 'Road',
      slug: 'road',
      title: 'Road Bikes',
    },
  ],
};

export const bikeTricksCategory: BikeTricksCategory = {
  id: 'bike:tricks',
  colorClass: 'bg-category-bike-tricks',
  iconClass: 'bg-icon-category-bike-tricks',
  name: 'Tricks',
  slug: 'tricks',
  specializations: [
    {
      id: 'freeride',
      code: 'FR',
      description:
        'Built for the sickest drops you can find, Freeride bikes are downhill bikes with better agility allowing huge air tricks.',
      gear: bikeTricksFreerideGear,
      name: 'Freeride',
      slug: 'freeride',
      title: 'Freeride Bikes',
    },
    {
      id: 'slopestyle',
      code: 'SP',
      description:
        "Their light weight makes them unbeatable for quick spins and fast trucks, Tail Whip, Bar Spin, it's their thing.",
      gear: bikeTricksSlopestyleGear,
      name: 'Slopestyle',
      slug: 'slopestyle',
      title: 'Slopestyle Bikes',
    },
  ],
};

export const bikeCategory: BikeCategory = {
  id: 'bikes',
  categories: [bikeRaceCategory, bikeTricksCategory],
  name: 'Bike',
  slug: 'bikes',
};
