const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        75: "18.75rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
