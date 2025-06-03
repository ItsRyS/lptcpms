/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          500: "#6B7280",
        },
        orange: {
          500: "#F97316",
          600: "#EA580C",
        },
        blue: {
          500: "#3B82F6",
          600: "#2563EB",
          900: "#1E3A8A",
          950: "#172554",
        },
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(to right, #172554, #1E3A8A)",
      },
    },
  },
  plugins: [],
};
