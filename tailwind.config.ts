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
        'custom-purple': 'rgba(133, 64, 245, 1)',
        'custom-black': 'rgba(22, 5, 48, 1)',

      },
    },
  },
  plugins: [],
};
export default config;
