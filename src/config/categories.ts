import { CategoryType, GearCategory } from 'types/categories';

// All available in-game categories
export const categories: Array<GearCategory> = [
  {
    color: '#bd6e37',
    name: 'Bike Race',
    path: '/bikes/race',
    type: CategoryType.BikeRace,
  },
  {
    color: '#fa923c',
    name: 'Bike Tricks',
    path: '/bikes/tricks',
    type: CategoryType.BikeTricks,
  },
  {
    color: '#ffb446',
    name: 'BMX',
    path: '/bmx',
    type: CategoryType.Bmx,
  },
  {
    color: '#379bd3',
    name: 'Snow Race',
    path: '/snow/race',
    type: CategoryType.SnowRace,
  },
  {
    color: '#3ca4aa',
    name: 'Snow Tricks',
    path: '/snow/tricks',
    type: CategoryType.SnowTricks,
  },
  {
    color: '#55a65a',
    name: 'Air',
    path: '/air',
    type: CategoryType.Air,
  },
];
