
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {

      colors: {
        // baseBlue:'#00175F',
        // baseBlue2:'#002488',
        // baseRed1:'#802F3B',
        // baseRed2:'#823944'
        baseBlue:'#08165A',
        baseBlue2:'#112480',
        baseRed1:'#480D35',
        baseRed2:'#5D1245'
      },
      backgroundImage: {
        'Background': "url('./src/assets/images/wallback.png')",
      },      
      fontSize: {
        'xxs': '0.625rem', // Custom font size for screens smaller than xs
      },
    },
  },
  plugins: [],
}

