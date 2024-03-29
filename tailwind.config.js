const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.lightBlue,
      gray: colors.coolGray,
      white: colors.white,
      cyan: colors.cyan,
      indigo: colors.indigo,
      red: colors.red,
      green: colors.green,
      rose: colors.rose
    },
    extend: {}
  },
  variants: {
    extend: {
      cursor: ['hover']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
};
