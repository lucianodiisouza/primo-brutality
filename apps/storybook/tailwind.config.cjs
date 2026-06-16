/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("../../packages/ui/tailwind-preset.js")],
};
