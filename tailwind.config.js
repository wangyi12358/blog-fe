/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'enter-from-bottom': {
          from: { opacity: 0, transform: 'translateY(-200px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'enter-from-bottom': 'enter-from-bottom 250ms ease',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
