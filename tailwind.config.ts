
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/public/images/homeBG')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "blue": "#10325A",
        "liteblue": "#3366CC",
      },
      spacing: {
        '128': '613px',
        '120': '509px',
        '100': '400px',
      },
      borderRadius: {
        'large': '50px',
      },
    },
  },
  plugins: [],
};
export default config;
