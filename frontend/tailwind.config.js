/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light':'#F5F2E7',
        'custom-blue':'#2666CF',
        'custom-dark':'#2C3333',
      }
    },
  },
  plugins: [],
}

