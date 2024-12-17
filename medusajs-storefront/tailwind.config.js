const path = require("path")
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

module.exports = {
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        neutral: {
          50: "#0d0d0d",
          100: "#1a1a1a",
          200: "#333333",
          300: "#4d4d4d",
          400: "#666666",
          500: "#808080",
          600: "#999999",
          700: "#b3b3b3",
          800: "#cccccc",
          900: "#e6e6e6",
          950: "#f2f2f2",
        },
        background: {
          50: "#0c0c0e",
          100: "#17171c",
          200: "#2e2e38",
          300: "#464653",
          400: "#5d5d6f",
          500: "#74748b",
          600: "#9090a2",
          700: "#acacb9",
          800: "#c7c7d1",
          900: "#e3e3e8",
          950: "#f1f1f3",
        },
        primary: {
          50: "#19000c",
          100: "#320118",
          200: "#650130",
          300: "#970248",
          400: "#ca025f",
          500: "#fc0377",
          600: "#fd3592",
          700: "#fd68ae",
          800: "#fe9ac9",
          900: "#fecde4",
          950: "#ffe6f1",
        },
        secondary: {
          50: "#00141a",
          100: "#002833",
          200: "#005066",
          300: "#007899",
          400: "#00a0cc",
          500: "#00c8ff",
          600: "#33d3ff",
          700: "#66deff",
          800: "#99e9ff",
          900: "#ccf4ff",
          950: "#e5f9ff",
        },
        accent: {
          50: "#0b1504",
          100: "#162a09",
          200: "#2c5412",
          300: "#437e1b",
          400: "#59a824",
          500: "#6fd22d",
          600: "#8cdb57",
          700: "#a9e481",
          800: "#c5edab",
          900: "#e2f6d5",
          950: "#f1fbea",
        },
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        "3xl": "2rem",
      },
      fontFamily: {
        heading: ["var(--font-tilt-warp)", "cursive"], // Para los headings
        body: ["var(--font-dm-sans)", "sans-serif"], // Para el cuerpo
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-radix")(), addVariablesForColors],
}

// Función para agregar variables CSS para cada color
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ":root": newVars,
  })
}
