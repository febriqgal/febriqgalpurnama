import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              "50": "#f6f6f6",
              "100": "#e7e7e7",
              "200": "#d1d1d1",
              "300": "#b0b0b0",
              "400": "#888888",
              "500": "#6d6d6d",
              "600": "#5d5d5d",
              "700": "#4f4f4f",
              "800": "#454545",
              "900": "#000000",
              DEFAULT: "#000000",
              foreground: "#f6f6f6",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              "50": "#f6f6f6",
              "100": "#e7e7e7",
              "200": "#d1d1d1",
              "300": "#b0b0b0",
              "400": "#888888",
              "500": "#6d6d6d",
              "600": "#5d5d5d",
              "700": "#4f4f4f",
              "800": "#454545",
              "900": "#000000",
              DEFAULT: "#f6f6f6",
              foreground: "#000000",
            },
          },
        },

        // ... custom themes
      },
    }),
  ],
};
export default config;
