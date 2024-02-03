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
        "first": "#ffffff",
        "second": "#0369a1",
      },
      fontFamily:{
        "Lilita":"Lilita",
        "Roboto" : "Roboto",
        "RobotoMedium":"RobotoMedium",
        "RobotoBold":"RobotoBold"
      }
    },
  },
  plugins: [
    function ({ addVariant }:any) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
};
export default config;
