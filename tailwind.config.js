const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        " .no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
