/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {

      backgroundImage: {
        "header-desktop": "url('../images/headerBgDesktop.png')",
        "header-mobile": "url('../images/headerBgMobile.webp')",
        "products": "url('../images/body-bg.png')"
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
      dropShadow: {
        'main': " 0px 0px 10px rgba(0, 0, 0, 0.40)"
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
      transitionProperty: {
        "height": "height",

      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem'
        }
      },

    },
    screens: {
      'xs': '425px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', "& > *")
      addVariant('child-hover', "& > *:hover")
    }
  ],
}

