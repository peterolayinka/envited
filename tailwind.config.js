/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {

      tablet: {
        max: "1100px",
      },
      midiDesktop: {
        max: "1360px",
      },
      mobile: {
        max: "650px",
      },

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      "light-pink": "#DDDDDD",
      blue: "#240D57",
      gray: "#4F4F4F",
      white: "#fff",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "16px": "16px",
      "24px": "24px",
      "36px": "36px",
      "64px": "64px",
    },
    lineHeight: {
      // 'l': '73.59px',
      "18px": "18px",
      "28px": "28px",
      "36px": "36px",
      "64px": "64px",
    },
    spacing: {
      "5px": "5px",
      "16px": "16px",
      "20px": "20px",
      "10px": "10px",
      "21px": "21px",
      "34px": "34px",
      "36px": "36px",
      "52px": "52px",
      "60px": "60px",
      "311px": "311px",
      "69hpx": "69.5px",
      "100px": "100px",
      "200px": "200px",
      "574px": "574px",
    },
    extend: {},
  },
  plugins: [],
};
