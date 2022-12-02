/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: "var(--black)",
      main: "var(--white)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      paragraph: "var(--paragraph)",
      subheadline: "var(light-black)",
      subbackground: "var(--light-black)",
    },
    extend: {
      gridTemplateColumns: {
        appLayout: "minmax(150px,250px) 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  moode: "jit",
};
