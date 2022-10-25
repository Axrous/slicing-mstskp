const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["DM Sans", "ui-monospace"]
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)"
        },
      }

      addUtilities(utilities);
    })
  ],
}
