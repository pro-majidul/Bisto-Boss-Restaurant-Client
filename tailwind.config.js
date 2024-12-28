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
      },
      textUnderlineOffset: {
        12: '12px',
        16: '16px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}