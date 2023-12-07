/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color: {
          primary: "#1ED760",
          black: "#000000",
          gray: "#121212",
          "gray-text": {
            1: "#2A2A2A",
            2: "#9C9C9C",
          },
          white: "#FFFFFF",
          "linear-grad": {
            dark: "#4406F4",
            light: "#BAE0D9",
          },
          hover: "#282828",
          blue: "#386088",
          green: "#668114",
          red: "#C94F44",
        },
      },
    },
  },
  plugins: [],
};
