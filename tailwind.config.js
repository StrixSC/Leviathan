const { colors } = require('tailwindcss/defaultTheme');
const lineClamp = require('@tailwindcss/line-clamp');


module.exports = {
  theme: {
    fontFamily: {
      'bungeehairline': ['Bungee Hairline'],
      'sourcecode': ['Source Code Pro'], 
    }
  },
  extend: {
    lineClamp: {
      4: '4',
    },
  },
  plugins: [lineClamp],
  corePlugins: {
    textTransform: false,
    rotate: false,
    tableLayout: false,
    scale: false,
    skew: false,
    resize: false,
  },
  variants: {
    backgroundColor: ['responsive', 'DEFAULT', 'focus', 'hover'],
    zIndex: ['responsive'],
    margin: ['responsive'],
    height: ['responsive'],
  },
  content: ['**/*.ejs'],
};