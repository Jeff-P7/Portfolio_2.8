module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // extend: extend,
  },
  variants: {
    extend: {
      translate: ["active"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
