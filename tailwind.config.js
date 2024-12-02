/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      lila: '#E3D7FF',
      violeta: '#AFA2FF',
      violaceo: '#7A89C2',
      violegris: '#72788D',
      gris: '#636B61', 
      blanco: '#FFFFFF', 
      verde: '#008F39', 
      rojo: '#C3002C'
    },
    fontFamily: {
      fuentePrincipal: ['Dosis', 'sans-serif'],
      fuenteCursiva: ['Gwendolyn', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}

