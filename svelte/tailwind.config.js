const { white } = require('tailwindcss/colors.js');
const defaultTheme = require('tailwindcss/defaultTheme.js');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    backgroundColor: {
      category: {
        air: '#55a65a',
        bike: {
          race: '#bd6e37',
          tricks: '#fa923c',
        },
        bmx: '#ffb446',
        snow: {
          race: '#379bd3',
          tricks: '#3ca4aa',
        },
      },
      nav: {
        DEFAULT: 'rgba(0, 0, 0, 0.75)',
        item: {
          DEFAULT: 'rgba(52, 52, 52, 1)',
          active: 'rgba(230, 175, 65, 1)',
        },
      },
      toolbar: 'rgba(32, 32, 32, 1)',
      white,
    },
    backgroundImage: {
      'test': "url('/images/categories/air.png')",
      'icon-air': "url('/images/categories/air.png')",
      'icon-bike-race': "url('/images/categories/bike-race.png')",
      'icon-bike-tricks': "url('/images/categories/bike-tricks.png')",
      'icon-bmx': "url('/images/categories/bmx.png')",
      'icon-snow-race': "url('/images/categories/snow-race.png')",
      'icon-snow-tricks': "url('/images/categories/snow-tricks.png')",
    },
    fontFamily: {
      sans: ['Heading Pro', ...defaultTheme.fontFamily.sans],
    },
    textColor: {
      nav: {
        item: {
          DEFAULT: '#fafafa',
          active: '#343230',
        },
      },
      white,
    },
  },
};
