/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "primary-color": "#ffffff",
        "secondary-color": "#fd6d0d",
        "tertiary-color": "#919191",
        "quaternary-color": "#000000",
      },
    },
  },
  plugins: [],
};
