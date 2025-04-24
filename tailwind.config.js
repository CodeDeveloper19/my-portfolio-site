/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/index.js', './components/header.js', 
  './components/footer.js', './components/contact.js', './components/skill.js', './components/projectButton.js',
  './components/projectImage.js', './components/projects.js'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'sans-serif']
      },
      fontSize: {
        font1: "70px", 
        font2: "40px",
        font3: "35px",
        font4: "20px",
        font5: "18px",
        font6: "15px",
        font7: "14px",
        font8: "13px",
        font9: "11px"
      },
      keyframes: {
        soft: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        soft: 'soft 1.5s infinite alternate forwards',
        softt: 'soft 1.7s infinite alternate forwards',
        softtt: 'soft 1.4s infinite alternate forwards',
        softttt: 'soft 1.6s infinite alternate forwards',
      },
      screens: {
        microPhone: '300px',      
        smartPhone: '400px',
        phone: '500px',
        minTablet: '650px',
        midTablet: '750px',
        maxTablet: {max: '649px'},
        MaxTablet: {max: '899px'},
        tablet: '900px',
        minLaptop: '1050px',
        maxLaptop: {max: '1199px'},
        laptop: '1200px',
        normal: '1367px',
      }
    },
  },
  plugins: [],
}

