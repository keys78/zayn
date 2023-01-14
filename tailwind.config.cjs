/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    "./src/**/*.{ts,tsx}"
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
