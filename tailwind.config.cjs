/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', "./src/*.{vue,js}", './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primaryColor:"#ff6700"
      },
      margin: (() => {
        let obj = {};
        for (let i = 1; i <= 20; i++) {
          obj[i] = i + "px";
        }
        return obj;
      })(),
      padding: (() => {
        let obj = {};
        for (let i = 1; i <= 20; i++) {
          obj[i] = i + "px";
        }
        return obj;
      })(),
      width: (() => {
        let obj = {};
        for (let i = 1; i <= 20; i++) {
          obj[i] = i + "px";
        }
        return obj;
      })(),
      height: (() => {
        let obj = {};
        for (let i = 1; i <= 20; i++) {
          obj[i] = i + "px";
        }
        return obj;
      })(),
    },
  },
  plugins: [],
}
