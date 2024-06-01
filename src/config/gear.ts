import type {
  AirCategoryEntity,
  BikeCategoryEntity,
  BmxCategoryEntity,
  SnowCategoryEntity,
} from 'types/core';

export const air: AirCategoryEntity[] = [
  {
    category: 'air',
    color: 'bg-category-air',
    icon: 'bg-test',
    name: 'Air',
    slug: 'air',
    specializations: [
      {
        code: 'RW',
        description:
          'The fast and crazy cousin of the wingsuit. With insane speed and up-climbing capability, they are actually closer to a plane than a wingsuit. Boost the engine to reach incredible speeds and try to not break too many bones!',
        name: 'Rocketwing',
        slug: 'rocketwing',
        specialization: 'air:rocketwing',
      },
    ],
  },
];

export const bikes: BikeCategoryEntity[] = [
  {
    category: 'bike',
    disciplines: [
      {
        color: 'bg-category-bike-race',
        icon: 'bg-icon-bike-race',
        discipline: 'bike:race',
        name: 'Race',
        slug: 'race',
        specializations: [
          {
            code: 'DH',
            description:
              'Downhill Bikes are designed to descend the hardest slopes and take quite the beating on technical trails. They are stable, durable and quick.',
            name: 'Downhill',
            slug: 'downhill',
            specialization: 'bike:race:downhill',
          },
          {
            code: 'RO',
            description:
              "Road Bikes are among the fastest gear available, with unmatched pedaling efficiency and amazing sprint, at the cost of being more fragile. If you're going on flat of uphill terrain, they are your go-to.",
            name: 'Road',
            slug: 'road',
            specialization: 'bike:race:road',
          },
        ],
      },
      {
        color: 'bg-category-bike-tricks',
        icon: 'bg-icon-bike-tricks',
        discipline: 'bike:tricks',
        name: 'Tricks',
        slug: 'tricks',
        specializations: [
          {
            code: 'FR',
            description:
              'Built for the sickest drops you can find, Freeride bikes are downhill bikes with better agility allowing huge air tricks.',
            name: 'Freeride',
            slug: 'freeride',
            specialization: 'bike:tricks:freeride',
          },
          {
            code: 'SP',
            description:
              "Their light weight makes them unbeatable for quick spins and fast trucks, Tail Whip, Bar Spin, it's their thing.",
            name: 'Slopestyle',
            slug: 'slopestyle',
            specialization: 'bike:tricks:slopestyle',
          },
        ],
      },
    ],
    name: 'Bike',
    slug: 'bike',
  },
];

export const bmx: BmxCategoryEntity[] = [
  {
    category: 'bmx',
    color: 'bg-category-bmx',
    icon: 'bg-icon-bmx',
    name: 'BMX',
    slug: 'bmx',
    specializations: [
      {
        code: 'PK',
        description:
          'Own the area 52 spots, and many more, with the most agile and precise bikes you can get.',
        name: 'Park',
        slug: 'park',
        specialization: 'bmx:park',
      },
      {
        code: 'DT',
        description:
          'Land super risky tricks on big airs in dirt playgrounds with those tougher BMXs.',
        name: 'Dirt',
        slug: 'dirt',
        specialization: 'bmx:dirt',
      },
    ],
  },
];

export const snow: SnowCategoryEntity[] = [
  {
    category: 'snow',
    disciplines: [
      {
        color: 'bg-category-snow-race',
        icon: 'bg-icon-snow-race',
        discipline: 'snow:race',
        name: 'Race',
        slug: 'race',
        specializations: [
          {
            code: 'DH',
            description:
              "The fastest skis money can buy. They are designed for groomed snow tracks and you'll reach blazing speeds with them.",
            name: 'Downhill Ski',
            slug: 'downhill-ski',
            specialization: 'snow:race:downhill',
          },
          {
            code: 'DS',
            description:
              'Deep Snow snowboards thrive in deep snow, with decent speed and, most of all, a very robust structure. They are ideal for races in wild areas and natural terrain.',
            name: 'Deep Snow',
            slug: 'deep-snow',
            specialization: 'snow:race:deep-snow',
          },
        ],
      },
      {
        color: 'bg-category-snow-tricks',
        icon: 'bg-icon-snow-tricks',
        discipline: 'snow:tricks',
        name: 'Tricks',
        slug: 'tricks',
        specializations: [
          {
            code: 'SP',
            description:
              'Snowpark gear is lightweight, agile, and allows for fast spins and spectacular grabs. They are designed to work best in groomed snow.',
            name: 'Snowpark',
            slug: 'snowpark',
            specialization: 'snow:tricks:snow-park',
          },
          {
            code: 'OT',
            description:
              'Off Track skis and snowboards are your typical all-mountain gear, true jack-of-all-trades that will allow you to shred the steepest of mountains in deep snow and take on the craziest jumps.',
            name: 'Off-track',
            slug: 'off-track',
            specialization: 'snow:tricks:off-track',
          },
        ],
      },
    ],
    name: 'Snow',
    slug: 'snow',
  },
];

export const allGear = [...air, ...bikes, ...bmx, ...snow];
