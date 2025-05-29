// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Make sure this line is present
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Yahan apna custom color likhein
      },
    },
  },
  plugins: [],
}
