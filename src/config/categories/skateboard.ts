import { skateboardRampGear, skateboardStreetGear } from '@/config/gear';
import type { SkateboardCategory } from '@/types/categories';

export const skateboardCategory: SkateboardCategory = {
  id: 'skateboard',
  colorClass: 'bg-category-skateboard',
  iconClass: 'bg-icon-category-skateboard',
  name: 'Skateboard',
  slug: 'skateboard',
  specializations: [
    {
      id: 'street',
      code: 'ST',
      description: 'Those boards are perfect for Urban settings. New spot? New trick opportunity!',
      gear: skateboardStreetGear,
      name: 'Street',
      slug: 'street',
      title: 'Street Skateboards',
    },
    {
      id: 'ramp',
      code: 'RP',
      description:
        'Ramps, quarters, bowls, big airs? Own them all with that spec built for speed and air time!',
      gear: skateboardRampGear,
      name: 'Ramp',
      slug: 'ramp',
      title: 'Ramp Skateboards',
    },
  ],
};
