/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#BDBDBD",
          neutral: "#4F4F4F",
          dark: "#4E5150",
          icon: "#828282",
        },
        orange: {
          neutral: "#F2994A",
        },
      },
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem",
      },
    },

    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
