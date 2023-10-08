import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      georgiaRegular: ["Georgia Regular"],
      georgiaBold: ["Georgia Bold"],
      sourceSansProRegular: ["Source Sans Pro Regular"],
      sourceSansProSemiBold: ["Source Sans Pro Semibold"],
      sourceSansProBold: ["Source Sans Pro Bold"],
    },
    extend: {
      colors: {
        wine: "rgba(69, 10, 10, 1)",
        ligthGrey: "rgba(249, 249, 249, 1)",
        veryLigthGrey: "rgba(178, 178, 178, 1)",
        darkGrey: "rgba(68, 68, 68, 1);",
        lightdarkGrey: "rgba(178, 178, 178, 1)",
        ligthBlack: "rgba(86, 86, 86, 1)",
        veryLigthBlack: "rgba(224, 224, 224, 1)",
        bgGrey: "rgba(112, 128, 144, 0.1)",
        inputBorder: "rgba(170, 170, 170, 1)",
        bgLightGrey: "rgba(245, 245, 245, 1)",
        Green: "rgba(199, 239, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
