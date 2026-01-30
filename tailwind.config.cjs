/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1f4b99',
          dark: '#0f1c2d',
          light: '#e9eff7'
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Source Sans 3"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
