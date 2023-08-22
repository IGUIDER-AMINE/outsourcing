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
        brand: "#324242",
        dark: "#001524",
        yellow: "#F0DDAB",
        gray: "#9999a1",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
