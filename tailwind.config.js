/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-green': '#004b38',
        'light-green': '#1a7860',
        'elight-green': '#dcf7f0',
        'neon-green': '#75FB4C',
        'text-blue': '#100D40',
        'text-lblue': '#100D4099',
        'light-slare': '#282F36',
        'light-gray': '#A4A9AE',
        'sky-blue': '#027AE9',
        'light-red': '#ff5863',

        'cp100':  '#01c36d',
        'cp200':  '#44ca7d',
        'cp300':  '#63d28d',
        'cp400':  '#7dd99d',
        'cp500':  '#95dfad',
        'cp600':  '#abe6bd',
        'cp700':  '#e5e5e5',

        'cs100':  '#1a1520', 
        'cs200':  '#2f2a35', 
        'cs300':  '#46414b', 
        'cs400':  '#5d5962', 
        'cs500':  '#76727a', 
        'cs600':  '#908d93',
      },
    },
  },
  plugins: [],
}
