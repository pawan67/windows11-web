module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/images/lockWall.jpg')",
        "wallpaper-1": "url('/images/windows11.jpg')",
        "wallpaper-light": "url('/images/windows11light.jpg')",
      },
    },
  },
  plugins: [],
};
