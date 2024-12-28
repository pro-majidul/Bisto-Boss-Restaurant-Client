/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': "Raleway",
        'Cinzel': "Cinzel",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}