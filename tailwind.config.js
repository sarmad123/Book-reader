/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs':['1rem'],
      'xl':['1.75rem'],
      '2xl': ['2.5rem'],
      '3xl': ['2.875rem'],
      '1xl':['1.39rem']
    }
  },
  plugins: [],
}