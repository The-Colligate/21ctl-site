/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#ED7D31",
        "primary-blue": "#02A4EE",
        "primary-orange-light": "rgba(246, 78, 31, 0.2);",
        "primary-blue-light": "#0098DB",
        "primary-green":"#7EBA03",
        "dark-shade ":"rgba(0, 0, 0, 0.5);",
        "silver":"#606163",
        "magenta": "#EC268F",
        "background-color":"#F1F1F4",
       
        
      },
      backgroundImage: (theme) => ({
        'konet-app-bg': `linear-gradient(180deg, #ffffff -1.05%, rgba(209, 225, 240, 0.548319) 44.12%, rgba(192, 210, 226, 0) 98.95%)`,
      }),
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 30px -15px #F64E1F',
      },
      zIndex: {
        '99': '99',
      },
      listStyleType: {
        diamondStar: "\2756",
      },
      screens: {
        xlargeTablet: { min: '2000px' },
        largeTablet: { max: '1024px' },
        // => @media (max-width: 1024px) { ... }

        tablet: { max: '780px' },
        // => @media (max-width: 780px) { ... }

        smallTablet: { max: '600px' },
        // => @media (max-width: 600px) { ... }

        phone: { max: '500px' },
        // => @media (max-width: 500px) { ... }

        smallPhone: { max: '375px' },
        // => @media (max-width: 350px) { ... }
      },
      backgroundImage: {
        connectLogoBack:
          "url('https://res.cloudinary.com/dqsggbqmf/image/upload/v1672772735/Vector_ioe1tn.svg')",
        academyBg:
          "url('https://res.cloudinary.com/dqsggbqmf/image/upload/v1673100716/Vector_57_cler5b.svg')",
        commBg:
          "url('https://images.unsplash.com/photo-1494452672938-ad7f60625bb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [],
};
