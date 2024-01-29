/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
        purple:{
          100: "#EAC3F4",
          200: "#DB97ED",
          300: "#CC6CE5",
          400: "#BD41DD"
        },
        greyCustom: {
          100: "#FFFFFF",
          200: "#E6E6E6E"
        }
      },
    },
  },
  plugins: [],
};
