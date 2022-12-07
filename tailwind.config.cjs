/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
      mono: ['Baloo 2', 'cursive'],
    },
    fontSize: {
      '2xs': 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 32,
      '4xl': 48,
    },
    colors: {
      wite: '#FFFFFF',
      background: '#FAFAFA',
      base: {
        title: '#272221',
        subTitle: '#403937',
        text: '#574F4D',
        label: '#8D8686',
        hover: '#D7D5D5',
        button: '#E6E5E5',
        input: '#EDEDED',
        card: '#F3F2F2',
      },
      yellow: {
        dark: '#C47F17',
        normal: '#DBAC2C',
        light: '#F1E9C9',
      },
      purple: {
        dark: '#4B2995',
        normal: '#8047F8',
        light: '#EBE5F9',
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Imagem.png')",
        'main-texture': "url('/img/Background.png')",
      },
    },
  },
  plugins: [],
}
