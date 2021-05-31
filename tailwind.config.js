module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM\\ Plex\\ Sans', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '2.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-gradient-mask-image')],
}
