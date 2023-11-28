/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Blue Palette
        myBlue: {
          50: '#164863',    // Dark Ocean Blue
          100: '#427D9D',   // Steel Blue
          200: '#9BBEC8',   // Dusty Teal
          300: '#DDF2FD',   // Ice Blue
        },
       
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
