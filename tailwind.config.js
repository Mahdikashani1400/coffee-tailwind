/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "header": "url('../images/headerBgDesktop.png')"
      },
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        }
      },
      boxShadow: {
        "main": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em",
      },


    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', "& > *")
      addVariant('child-hover', "& > *:hover")
    }
  ],
}

