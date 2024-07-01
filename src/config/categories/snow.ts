import {
  snowRaceDeepSnowGear,
  snowRaceDownhillGear,
  snowTricksOffTrackGear,
  snowTricksSnowParkGear,
} from '@/config/gear';
import type { SnowCategory } from '@/types/categories';

export const snowCategory: SnowCategory = {
  id: 'snow',
  categories: [
    {
      id: 'snow:race',
      colorClass: 'bg-category-snow-race',
      iconClass: 'bg-icon-category-snow-race',
      name: 'Race',
      slug: 'race',
      specializations: [
        {
          id: 'downhill ski',
          code: 'DH',
          description:
            "The fastest skis money can buy. They are designed for groomed snow tracks and you'll reach blazing speeds with them.",
          gear: snowRaceDownhillGear,
          name: 'Downhill Ski',
          slug: 'downhill-ski',
        },
        {
          id: 'deep snow',
          code: 'DS',
          description:
            'Deep Snow snowboards thrive in deep snow, with decent speed and, most of all, a very robust structure. They are ideal for races in wild areas and natural terrain.',
          gear: snowRaceDeepSnowGear,
          name: 'Deep Snow',
          slug: 'deep-snow',
        },
      ],
    },
    {
      id: 'snow:tricks',
      colorClass: 'bg-category-snow-tricks',
      iconClass: 'bg-icon-category-snow-tricks',
      name: 'Tricks',
      slug: 'tricks',
      specializations: [
        {
          id: 'snowpark',
          code: 'SP',
          description:
            'Snowpark gear is lightweight, agile, and allows for fast spins and spectacular grabs. They are designed to work best in groomed snow.',
          gear: snowTricksSnowParkGear,
          name: 'Snowpark',
          slug: 'snowpark',
        },
        {
          id: 'off track',
          code: 'OT',
          description:
            'Off Track skis and snowboards are your typical all-mountain gear, true jack-of-all-trades that will allow you to shred the steepest of mountains in deep snow and take on the craziest jumps.',
          gear: snowTricksOffTrackGear,
          name: 'Off-track',
          slug: 'off-track',
        },
      ],
    },
  ],
  name: 'Snow',
  slug: 'snow',
};
