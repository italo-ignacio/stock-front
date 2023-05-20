/** @type {import('tailwindcss').Config} */

const colors = require('./src/presentation/style/palette/colors.json');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('scrollbar', '&::-webkit-scrollbar');
    }),
    plugin(({ addBase }) => {
      addBase({
        '*': {
          fontFamily: 'Roboto'
        },
        '*::-webkit-scrollbar': {
          height: '6px',
          width: '6px'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#00000063',
          borderRadius: '10px'
        },
        '*::-webkit-scrollbar-track-piece': {
          backgroundColor: 'transparent',
          borderRadius: '10px'
        }
      });
    })
  ],

  theme: {
    colors,
    screens: {
      desktop: '1280px',
      laptop: '1024px',
      tablet: '768px'
    },
    variants: {}
  }
};
