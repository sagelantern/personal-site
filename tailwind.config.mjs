/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        warm: {
          50: '#faf8f5',
          100: '#f0ebe4',
          800: '#3d3529',
          900: '#2a2318',
        },
      },
    },
  },
  plugins: [],
};
