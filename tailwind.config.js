/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['unbounded', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
