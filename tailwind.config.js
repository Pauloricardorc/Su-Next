module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'Oswald': ['Oswald', 'sans-serif'],
      'Righteous': ['Righteous', 'cursive'],
      'Roboto': ['Roboto', 'sans-serif'],
      'Indie': ['Indie Flower', 'cursive']
    },
    extend: {
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
