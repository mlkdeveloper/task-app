/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts}',
  ],
  plugins: [require('daisyui')],

  daisyui: {
    themes: ["lemonade", "night"],
  },

};

