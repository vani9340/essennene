/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'org': '#E7892C',
        'light-grey':'#9A9AB0',
        'light-bg':'#E1E1FB'
      },
    }
  },
  plugins: [],
}
