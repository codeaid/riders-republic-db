import type { Config } from 'tailwindcss';
import { blue, neutral, white } from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';

const theme: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    backgroundColor: ({ theme }) => ({
      ...theme('colors'),

      category: {
        air: 'rgba(85, 167, 90, 1)',
        bike: {
          race: 'rgba(189, 110, 55, 1)',
          tricks: 'rgba(250, 146, 60, 1)',
        },
        bmx: 'rgba(255, 181, 79, 1)',
        skateboard: 'rgba(225, 105, 145, 1)',
        snow: {
          race: 'rgba(54, 155, 211, 1)',
          tricks: 'rgba(59, 164, 170, 1)',
        },
      },

      footer: 'rgba(255, 255, 255, 0.4)',

      gear: {
        score: {
          icon: 'rgba(52, 50, 48, 1)',
        },
        stat: {
          progress: 'rgba(52, 50, 48, 1)',
        },
      },
    }),

    backgroundImage: {
      'icon-category-air': "url('/images/icons/category-air.png')",
      'icon-category-bike-race': "url('/images/icons/category-bike-race.png')",
      'icon-category-bike-tricks': "url('/images/icons/category-bike-tricks.png')",
      'icon-category-bmx': "url('/images/icons/category-bmx.png')",
      'icon-category-skateboard': "url('/images/icons/category-skateboard.png')",
      'icon-category-snow-race': "url('/images/icons/category-snow-race.png')",
      'icon-category-snow-tricks': "url('/images/icons/category-snow-tricks.png')",

      'icon-stat-absorption': 'url("/images/icons/stat-absorption.png")',
      'icon-stat-air-rotation': 'url("/images/icons/stat-air-rotation.png")',
      'icon-stat-board-tricks': 'url("/images/icons/stat-board-tricks.png")',
      'icon-stat-deep-snow-race': 'url("/images/icons/stat-deep-snow-race.png")',
      'icon-stat-deep-snow-tricks': 'url("/images/icons/stat-deep-snow-tricks.png")',
      'icon-stat-engine-boost': 'url("/images/icons/stat-engine-boost.png")',
      'icon-stat-grip': 'url("/images/icons/stat-grip.png")',
      'icon-stat-mobility': 'url("/images/icons/stat-mobility.png")',
      'icon-stat-mobility-horizontal': 'url("/images/icons/stat-mobility-horizontal.png")',
      'icon-stat-mobility-vertical': 'url("/images/icons/stat-mobility-vertical.png")',
      'icon-stat-slow-mode': 'url("/images/icons/stat-slow-mode.png")',
      'icon-stat-speed': 'url("/images/icons/stat-speed.png")',
      'icon-stat-sprint': 'url("/images/icons/stat-sprint.png")',

      'page': "url('/images/bg-page.jpeg')",
      'paper': "url('/images/bg-paper.png')",
      'tiling': "url('/images/tiling.png')",
      'tiling-brand': "url('/images/tiling-brand.png')",
    },

    colors: {
      blue,
      brand: {
        DEFAULT: 'rgba(230, 175, 65, 1)',
        80: 'rgba(230, 175, 65, 0.80)',
      },
      black: {
        DEFAULT: 'rgba(0, 0, 0, 1)',
        15: 'rgba(0, 0, 0, 0.15)',
      },
      nav: {
        DEFAULT: 'rgba(0, 0, 0, 0.75)',
        item: 'rgba(32, 32, 32, 1)',
      },
      neutral,
      white,
    },

    fontFamily: {
      sans: ['Heading Pro', ...fontFamily.sans],
    },

    textColor: ({ theme }) => ({
      ...theme('colors'),
      nav: {
        item: {
          DEFAULT: 'rgba(250, 250, 250, 1)',
          active: 'rgba(52, 50, 48, 1)',
        },
      },
      red: 'rgba(239, 35, 60, 1)',
    }),

    extend: {
      animation: {
        wiggle: 'wiggle 2.5s ease-in-out infinite',
      },

      borderRadius: {
        px: '1px',
      },

      borderWidth: {
        10: '10px',
      },

      boxShadow: {
        'gear-item': 'inset 0px 0px 0px 2px rgba(0, 0, 0, 0.15)',
      },

      fontSize: {
        '2xs': '10px',
        'md': '17px',
      },

      keyframes: {
        wiggle: {
          '0%': { animationTimingFunction: 'ease-in-out', transform: 'rotate(0deg)' },
          '10%': { animationTimingFunction: 'ease-in-out', transform: 'rotate(-180deg)' },
          '50%': { animationTimingFunction: 'ease-in-out', transform: 'rotate(-180deg)' },
          '60%': { animationTimingFunction: 'ease-in-out', transform: 'rotate(-360deg)' },
          '100%': { animationTimingFunction: 'ease-in-out', transform: 'rotate(-360deg)' },
        },
      },

      lineHeight: {
        11: '2.75rem',
      },

      rotate: {
        15: '15deg',
        190: '190deg',
      },

      scale: {
        115: '1.15',
      },
    },
  },
};

export default theme;
