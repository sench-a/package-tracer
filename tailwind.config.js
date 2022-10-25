/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx"],
  theme: {
    colors: {
      'cyan': '#59C1CC',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  
}
