const typography = require('@tailwindcss/typography');
const tham = require('tailwind-hamburgers');

module.exports = {
  theme: {
    fontFamily: {
      'bungeehairline': ['Bungee Hairline'],
      'sourcecode': ['Source Code Pro'], 
    }
  },
  typography: () =>  ({
    dark: {
        css: {
          pre: {
            backgroundColor: "var(--codeblock_bg_color)",
          }
        }
      }
  }),
  plugins: [typography, tham],
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