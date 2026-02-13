/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        primary: {
          50: "#fdf8f0",
          100: "#faecd8",
          200: "#f4d6b0",
          300: "#ecba7e",
          400: "#e39749",
          500: "#dc7e2c",
          600: "#cd6522",
          700: "#aa4c1e",
          800: "#883d1f",
          900: "#70341c",
          950: "#3c190d",
        },
        accent: {
          50: "#f4f8ef",
          100: "#e5eedb",
          200: "#cddebb",
          300: "#abc596",
          400: "#8dac72",
          500: "#709254",
          600: "#577440",
          700: "#445a34",
          800: "#39492d",
          900: "#313f28",
          950: "#182113",
        },
        cream: {
          50: "#FFFDF8",
          100: "#FFFAF0",
          200: "#FFF3DE",
          300: "#FFE8C4",
          400: "#FFDAA8",
        },
        surface: {
          light: "#FFFAF4",
          dark: "#1c1917",
          "dark-alt": "#292524",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #e39749 0%, #dc7e2c 50%, #cd6522 100%)",
        "gradient-primary-hover":
          "linear-gradient(135deg, #dc7e2c 0%, #cd6522 50%, #aa4c1e 100%)",
        "gradient-warm":
          "linear-gradient(135deg, #FFFAF4 0%, #faecd8 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #292524 0%, #1c1917 50%, #1b2013 100%)",
      },
      boxShadow: {
        "warm-sm": "0 1px 2px 0 rgba(170, 76, 30, 0.06)",
        warm: "0 1px 3px 0 rgba(170, 76, 30, 0.08), 0 1px 2px -1px rgba(170, 76, 30, 0.08)",
        "warm-md":
          "0 4px 6px -1px rgba(170, 76, 30, 0.08), 0 2px 4px -2px rgba(170, 76, 30, 0.06)",
        "warm-lg":
          "0 10px 15px -3px rgba(170, 76, 30, 0.08), 0 4px 6px -4px rgba(170, 76, 30, 0.06)",
        "warm-xl":
          "0 20px 25px -5px rgba(170, 76, 30, 0.08), 0 8px 10px -6px rgba(170, 76, 30, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
