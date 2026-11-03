/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07051a",
        panel: "#12102b",
        panel2: "#1b1838",
        brand: { DEFAULT: "#7c5cff", light: "#a48bff", dark: "#4b2fd0" },
        accent: "#e63b2e",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      container: { center: true, padding: { DEFAULT: "1rem", md: "2rem" }, screens: { xl: "1200px" } },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse at 50% 0%, #6d3dff 0%, #2a1673 35%, #07051a 70%)",
        "stats-grad": "linear-gradient(180deg,#8a6bff 0%,#6a47ee 60%,#4b2fd0 100%)",
      },
    },
  },
  plugins: [],
};
