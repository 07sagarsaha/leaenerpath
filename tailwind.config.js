// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Tell Tailwind where to look for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
