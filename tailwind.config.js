/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outer': '-1px 5px 15px 5px rgb(0 0 0 / 0.1), -10px -10px 10px -10px rgb(0 0 0 / 0.1)',
      },
      minHeight: {
        '400': '400px'
      },
      colors: {
        'white-blue-100': '#F2F7FF',
        'white-blue-200': '#89C2D9',
        'white-blue-300': '#61A5C2',
        'white-blue-400': '#468FAF',
        'navy-blue-200': '#1A659E',
        'navy-blue-400': '#00408F',
        'navy-blue-500': '#0B409C',
        'deep-blue': '#00296B',
        'dark-blue': '#001D3D',
        'yellow-brown-500': '#FDC500',
        'yellow-brown-400': '#EDC531',
        'yellow-brown-300': '#FAD643',
        'yellow-brown-200': '#FDD85D',
        'yellow-brown-600': '#FDBE34',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
      strategy: 'class',
    }),
  ],
}
