import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "gradiant-main":"linear-gradient(90deg, rgba(24,24,36,1) 0%, rgba(9,24,121,1) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
