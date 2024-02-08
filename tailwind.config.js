module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkModeBg: "var(--hello)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
