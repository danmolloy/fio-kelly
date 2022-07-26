const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [ "Dancing Script", "Quintessential", ...defaultTheme.fontFamily.serif],
        special: [ "Redressed", "Satisfy", "Quintessential", ...defaultTheme.fontFamily.serif],
        custom: [ "Gentium Plus", "Lato","Fredoka", ...defaultTheme.fontFamily.serif]
    },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'p': { fontSize: theme('fontSize.xl') },

        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
      })
    })
  ],
}
