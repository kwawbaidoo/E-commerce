/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customgray:'#F5F5F5',
      },
      fontFamily:{
        poppins:['Poppins'],
      }
    },
  },
  plugins: [],
}

