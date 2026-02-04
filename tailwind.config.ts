import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          cyan: "#22D3EE",
          "cyan-hover": "#0EA5C9",
          purple: "#7C6FD0",
          "purple-hover": "#6B5CE7",
          bg: "#0E1118",
          section: "#141B2D",
          card: "#17202F",
          border: "#1E2538",
          body: "#9CA3AF",
          muted: "#7E7BA0",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
