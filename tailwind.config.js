/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        titusLightText: "#ACACAC",
        titusYellow: "#F7A600",
        titusYellowFaded: "#FFC35C",
        titusGreen: "#00DBC2",
        titusGreenFaded: "#30f5de",
        titusGreenDeep: "#092A26",
        titusDarkGrey: "#17181E",
        titusDarkBG: "#0A0A0B",
      },
    },
  },
  plugins: [],
};
