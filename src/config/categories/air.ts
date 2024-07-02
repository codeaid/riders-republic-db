import { airRocketwingGear, airWingsuitGear } from '@/config/gear';
import type { AirCategory } from '@/types/categories';

export const airCategory: AirCategory = {
  id: 'air',
  colorClass: 'bg-category-air',
  iconClass: 'bg-icon-category-air',
  name: 'Air',
  slug: 'air',
  specializations: [
    {
      id: 'rocketwing',
      code: 'RW',
      description:
        'The fast and crazy cousin of the wingsuit. With insane speed and up-climbing capability, they are actually closer to a plane than a wingsuit. Boost the engine to reach incredible speeds and try to not break too many bones!',
      gear: airRocketwingGear,
      name: 'Rocketwing',
      slug: 'rocketwing',
      title: 'Rocketwings',
    },
    {
      id: 'wingsuit',
      code: 'WG',
      description:
        'Wingsuits bring you the thrill of flying like a squirrel among the mountains. Grazing the mountain side is just an unbeatable feeling. And if the situation gets too hairy, use slow mode to quickly gain altitude and get away safely.',
      gear: airWingsuitGear,
      name: 'Wingsuit',
      slug: 'wingsuit',
      title: 'Wingsuits',
    },
  ],
};
