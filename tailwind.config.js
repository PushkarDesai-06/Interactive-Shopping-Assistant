/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flyonui/dist/js/*.js"],
  theme: {
    extend: {
      colors: {
        'main': '#61F1D9',
        'back': '#0a192f'
      }
    },
  },
  plugins: [],
}

