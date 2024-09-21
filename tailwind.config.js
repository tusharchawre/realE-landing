/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      boxShadow: {
        'circle': '-6px -6px rgba(255,255,255)',
        'card': '10px 10px 20px rgb(0 0 0 / 0.05)'
      }
    },
  },
  plugins: [],
}



