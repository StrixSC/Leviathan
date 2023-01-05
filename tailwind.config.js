const typography = require('@tailwindcss/typography');


module.exports = {
  theme: {
    fontFamily: {
      'bungeehairline': ['Bungee Hairline'],
      'sourcecode': ['Source Code Pro'], 
    }
  },
  plugins: [typography],
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