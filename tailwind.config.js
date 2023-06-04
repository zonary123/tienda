// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-background-dark': '#22252c',
        'primary-background-light': '#f5f5f5',
        'primary-text-dark': '#f5f5f5',
        'primary-text-light': '#22252c'
      }
    }
  },
  variants: {},
  plugins: []
}
