/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans SC', 'serif']
      }
    },
    plugins: []
  }
};
