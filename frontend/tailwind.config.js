/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          700: '#800000', // Dark maroon color
          800: '#660000', // Darker maroon color for hover state
        },
      },
    },
  },
  plugins: [],
}

