/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        wgu: {
          yellow: "#E6A817", // WGU's gold/yellow color
          black: "#000000",
          navy: "#002E6D",
          gray: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
}
