/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :
      {
        'primary' : '#8a0303',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight:false,
  }
}

