import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#121212',
        'green': '#1db954',
        'dark-gray': '#212121',
        'gray': '#535353',
        'light-gray': '#b3b3b3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
} satisfies Config

