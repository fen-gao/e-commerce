/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js', "./index.html",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f42c37',
        seconday: '#f42c37',
        brandYellow: '#fdc62e',
        brandGrenn: '#2dcc6f',
        brandBlue: '#1276f4',
        brandWhite: '#eeeeee',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}

