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
      height: (theme) => ({
        fit: 'calc(100vh - 48px - 1.5rem)',
        half: '50vh',
        '3/4vh': '75vh',
        '128': '32rem',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-gradient-mask-image')],
}
