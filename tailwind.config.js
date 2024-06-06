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
        customred: '#DB4444',
        custometimecolor: '#E07575',
      },
      fontFamily:{
        poppins:['Poppins'],
        inter: ['inter'],
      }
    },
  },
  plugins: [],
}

