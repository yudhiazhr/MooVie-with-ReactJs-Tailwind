/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#FF5722',
        secondary: '#2D4059',
        dark: '#222831',
        light: '#EEEEEE'
      }
    },
  },
  plugins: [],
}

