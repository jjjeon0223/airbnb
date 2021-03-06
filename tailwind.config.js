module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  // active: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // backgroundColor: ["hover", "active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
