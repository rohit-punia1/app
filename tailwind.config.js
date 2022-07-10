/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    truncate: {
      lines: {
        3: "3",
        5: "5",
        8: "8",
      },
    },
  },
  plugins: [require("tailwindcss-truncate-multiline")(["responsive", "hover"])],
};
