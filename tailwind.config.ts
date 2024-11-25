import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile': '428px',
      },
      
      colors: {
         primary:"#FFFFFF",
        secondary:"#F7F7F7",
        text:"#000000",
      },
      
      fontFamily:{
        sans:["Roboto" , "sans-serif"]
      }
      
    },
  },
  plugins: [],
};
export default config;