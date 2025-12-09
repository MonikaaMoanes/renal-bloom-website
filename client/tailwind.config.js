/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      primary: "#1B4D3E",   // Dark botanical green
      secondary: "#F4F0E6", // Light cream
      accent: "#3C6E59"     // Soft green
    }
  }
},
  plugins: [],
}

