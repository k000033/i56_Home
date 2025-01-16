/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans SC', 'serif'],
        fantasy: ['fantasy', 'serif']
      },
      animation: {
        fade: 'fade 1s ease-in-out infinite'
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: 0.1
          },
          '50%': {
            opacity: 1
          },
          '100%': {
            opacity: 0.1
          }
        }
      }
    },
    plugins: []
  }
};
