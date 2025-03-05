import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
			image: "url('/images/finpoint.png')"
  		},
  		fontFamily: {
  			inter: [
  				'Inter'
  			]
  		},
  		colors: {
  			primary: "#1a202c ",
  			secondary: {
  				100: "#E2E2D5",
  				200: "#888883"
  			},

			
  			
  			
  		
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
