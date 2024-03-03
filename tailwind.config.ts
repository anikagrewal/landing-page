import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1FCBFF',
        red: '#C41C4C',
      },
      width: {
        fowdlg: '2030px',
        fowd: '400px',
        fowdmd: '700px'
      },
    },
  },
  plugins: [],
};
export default config;
