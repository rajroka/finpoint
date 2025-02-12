import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'image' : "url('/images/finpoint.png')"
      },
       
      fontFamily: {
        inter : ["Inter"],
    } ,

      colors: {
        'primary' : '#e6e6e6e6',
        'secondary':'#6a0dad',
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
