/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "brutal-cream": "#f4f4f0",
        "brutal-black": "#000000",
        "brutal-white": "#ffffff",
        "brutal-pink": "#ff90e8",
        "brutal-yellow": "#ffc900",
        "brutal-green": "#23a094",
        "brutal-red": "#ff0000",
        "brutal-gray": "#e5e5e0",
      },
      borderRadius: {
        "brutal-sm": "4px",
        "brutal-lg": "20px",
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #000000",
        "brutal-sm": "2px 2px 0 0 #000000",
        "brutal-pressed": "1px 1px 0 0 #000000",
      },
      borderWidth: {
        brutal: "2px",
      },
      fontFamily: {
        brutal: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        "brutal-sm": 384,
        "brutal-md": 512,
        "brutal-lg": 768,
      },
    },
  },
  plugins: [],
};
