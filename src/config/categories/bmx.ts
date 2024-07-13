import { bmxDirtGear, bmxParkGear } from '@/config/gear';
import type { BmxCategory } from '@/types/categories';

export const bmxCategory: BmxCategory = {
  id: 'bmx',
  colorClass: 'bg-category-bmx',
  iconClass: 'bg-icon-category-bmx',
  name: 'BMX',
  slug: 'bmx',
  specializations: [
    {
      id: 'park',
      code: 'PK',
      description:
        'Own the area 52 spots, and many more, with the most agile and precise bikes you can get.',
      gear: bmxParkGear,
      name: 'Park',
      slug: 'park',
      title: 'BMX Park Bikes',
    },
    {
      id: 'dirt',
      code: 'DT',
      description:
        'Land super risky tricks on big airs in dirt playgrounds with those tougher BMXs.',
      gear: bmxDirtGear,
      name: 'Dirt',
      slug: 'dirt',
      title: 'BMX Dirt Bikes',
    },
  ],
};
