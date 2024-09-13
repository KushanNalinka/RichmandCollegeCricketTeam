
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./public/index.html",
//     'node_modules/flowbite-react/lib/esm/**/*.js',
//   ],
//   theme: {
//     extend: {

//       colors: {
//         baseBlue:'#00175F',
//         baseBlue2:'#002488',
//         baseRed1:'#802F3B',
//         baseRed2:'#823944'
//       },
//       backgroundImage: {
//         'Background': "url('./src/assets/images/wallback.png')",
//       },      
//     }

//       fontSize: {
//         'xxs': '0.625rem', // Custom font size for screens smaller than xs
//       },
//     },

//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // Custom font size for screens smaller than xs
      },
    },
  },
  plugins: [],
}