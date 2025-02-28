// uno.config.ts
import {
  defineConfig,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography({
      cssExtend: {
        h1: {
          visibility: "hidden",
        },
        "h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
          "pointer-events": "none",
          "text-decoration": "none",
        },
        "pre, code": {
          "--uno":
            "dark:(bg-dark-800 text-light-700 border-dark-300) text-dark8",
          border: "1px solid #d1d1d1",
          overflow: "hidden",
          "background-color": "#f1f1f1",
          "white-space": "pre-wrap",
        },
        "pre > code": {
          border: "none",
        },
        ".ifr iframe": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "border-radius": "5px",
        },
        ".ifr": {
          position: "relative",
          width: "100%",
          "padding-bottom": "56.25%",
          height: "0",
        },
        "figure figcaption": {
          color: "#000",
          "font-size": "12px",
          "letter-spacing": "0.025em",
          opacity: "0.7",
          "--uno": "dark:text-white",
        },
        i: {
          opacity: "0.8",
          "font-weight": "300",
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      brand: {
        dark: "#007BFF", // text-brand-dark
        light: "#0067d4", // text-brand-light
      },
      element: {
        dark: "#050505",
        light: "#fffffffa",
      },
    },
    fontFamily: {
      sans: "Geist-sans, system-ui, sans-serif",
    },
  },
  shortcuts: {
    "core-theme":
    "bg-element-light dark:(bg-element-dark text-white) text-black",
    "core-border": "dark:b-dark4 b-gray3 b-1 b-solid",
    "core-ui": "dark:(bg-dark9 text-white) bg-gray1 text-black",
  },
});
