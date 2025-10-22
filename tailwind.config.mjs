/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#F8F8F8",
        secondaryText: "#333333",
        accent: "#6C63FF",
        lightBackground: "#FFFFFF",
        darkBackground: "#1A1A2E",
        lightHover:"#E0E0FF", // Lighter shade of accent for light mode hover
        darkHover: "#4B42CC", // Darker shade of accent for dark mode hover
      },
      fontFamily:{
        Outfit: ["Outfit", "san-serif"],
        Ovo: ["Ovo", "san-serif"]
      },
      boxShadow:{
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
        'custom-shadow': '2px 2px 0 #333333',
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },

    },
  },
  darkMode:'selector',
  plugins: [],
};
