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
        'custom-gradient': 'linear-gradient(30deg ,#0E0E0E 10% , #FF0000 50% ,#FF006F 100%)',
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
        
      },

    },
  },
  plugins: [],
}

