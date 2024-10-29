/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Unbounded sans-serif',
    },

    extend: {
      colors: {
        light: {
          neutral: {
            50: '#fcfcfc',
            100: '#f8f8f8',
            200: '#f1f1f1',
            300: '#d9d9d9',
            400: '#c2c2c2',
            500: '#a5a5a5',
            600: '#727272',
            700: '#555',
            800: '#393939',
            900: '#272727',
            950: '#1c1c1c',
          },
          success: { 100: '#95cc00', 200: '#5b7f13' },
          danger: { 100: '#fb6e6e', 200: '#d51010' },
        },
        primary: {
          100: '#fff1ee',
          200: '#ffded7',
          300: '#ffbaa9',
          400: '#fe8c75',
          500: '#df4f30',
          600: '#c23213',
        },
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserratAlt: ['Montserrat Alternates', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        prata: ['Prata', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: 'ease-in-out',
    },
  },
  plugins: [],
};
