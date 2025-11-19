/** tailwind.config.js */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            light: '#9DB5A3',
            DEFAULT: '#7F9C85',
            dark: '#4E6E5A'
          },
          background: {
            darkest: '#0F1A14',
            dark: '#1E2B25',
            moss: '#152019',
            grey: '#2B3832'
          }
        },
        pastel: {
          cream: '#F3EEE7',
          soft: '#DDE5DF',
          mist: '#EEF2EF',
          pink: '#FFBFD7'
        },
        textc: {
          primary: '#E8ECE9',
          secondary: '#B6C1BA',
          muted: '#8FA097'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
