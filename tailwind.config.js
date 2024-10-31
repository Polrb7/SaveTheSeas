/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./html/**/*.html", "./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#4B86B4",
        textColor: "#EDF6F9",
      },
    },
  },
  plugins: [],
};
