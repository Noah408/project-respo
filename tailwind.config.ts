import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { height: "0px" },
          "100%": { height: "260px" },
        },
        toLeft: {
          "0%": { width: "0px" },
          "100%": { width: "100px" },
        },
        download: {
          "0%": { width: "48px", bottom:"8px", right:"8px" },
          "100%": { width: "100%",bottom:"0px", right:"0px" },
        },
      },
      colors:{
        "escuro":"#7C7C7C",
        "cinza":"#CDCDCD",
        "amarelo":"rgb(250 204 21 / var(--tw-text-opacity))",
        "verde":"rgb(74 222 128 / var(--tw-bg-opacity))",
        "tranparente":{
          "preto":"rgb(0 0 0 / 0.4)"
        }
      },
      animation: {
        download: "download 0.4s ease-in-out 1",
        fadeInUp: "fadeInUp 0.6s ease-in-out 1",
        toLeft: "toLeft 0.6s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
export default config;
