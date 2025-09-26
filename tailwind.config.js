/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09a9d5',
        dark: '#212529',
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}