/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // agar app directory use kar rahe ho
    "./pages/**/*.{js,ts,jsx,tsx}", // agar pages directory use kar rahe ho
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
