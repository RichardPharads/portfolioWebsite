/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: "Inter",
        instrument: "Instrument Sans",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF0000 10%, #0E0E0E 100%)',
      },
      letterSpacing:{
        'heroSpacing': '0.2rem',
      },
      lineHeight: {
        heroLine: '117%'
      },
      width:{
        heroImage: '1240px'
      },
      height:{
        heroImage:'620px'
      },
      backgroundColor:{
        redBg: '#FF0000',
        capsul: '#282525'
      },
      fontSize:{
        
      }
    },
  },
  plugins: [],
}

