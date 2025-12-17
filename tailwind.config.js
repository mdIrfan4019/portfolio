/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#425E7B",
        // primary: "#B9D8E1",
        // primary: "#C8D9E6",
        // primary: "#DADEE1",
      },
    },
  },
  plugins: [],
};


