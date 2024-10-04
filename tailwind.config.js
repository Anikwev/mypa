/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto':["Roboto", 'sans-serif'],
      },
      backgroundImage:{
        'bgOne' : "url('/images/bg.jpg')",
      }
    },
    container :{
      center : true,
      padding: '20px'
    }
  
  },
  plugins: [],
}