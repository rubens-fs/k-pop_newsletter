/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0'
        },
        fundo: {
          claro: '#E8E8E8'
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      keyframes: {
        heart_kf: {
          '0%, 100%': {
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          }
        },
        bounce_kf: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        }
      },
      animation: {
        heart: 'heart_kf 0.31s ease-in-out infinite',
        bounce: 'bounce_kf 1s infinite'
      }
    }
  },
  plugins: [],
}

