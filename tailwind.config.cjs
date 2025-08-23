/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      colors: {
        primary: "#000000",
        secondary: "#87ceeb",
        tertiary: "#0a0a0f",
        "black-100": "#0a0a0f",
        "black-200": "#1a1a2e",
        "white-100": "#f3f3f3",
        "star-blue": "#87ceeb",
        "star-yellow": "#f4d03f",
        "star-white": "#ffffff",
        "star-red": "#e74c3c",
        "nebula-purple": "#2d1b69",
        "nebula-blue": "#1e3a8a",
        "nebula-pink": "#7c2d12",
        "space-deep": "#000000",
        "space-dark": "#000000",
        "space-mid": "#0a0a0f",
        "space-light": "#1a1a2e",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(135, 206, 235, 0.05)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "galaxy-pattern": "radial-gradient(ellipse 2000px 1000px at 25% 25%, rgba(45, 27, 105, 0.08) 0%, transparent 70%), radial-gradient(ellipse 1500px 800px at 75% 75%, rgba(30, 58, 138, 0.06) 0%, transparent 65%)",
      },
      animation: {
        "galaxy-rotate": "galaxyRotate 120s linear infinite",
        "space-dust": "spaceDust 60s ease-in-out infinite",
      },
      keyframes: {
        galaxyRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spaceDust: {
          "0%, 100%": { opacity: "0.15", transform: "translateY(0px)" },
          "50%": { opacity: "0.2", transform: "translateY(-30px)" },
        },
      },
    },
  },
  plugins: [],
};
