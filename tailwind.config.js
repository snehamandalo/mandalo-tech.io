/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "my-primary":"#540000",
        "my-secondary":"#D1AD57",
        "my-white":"#FFFEFE"
      }
    },
  },
  plugins: [],
}