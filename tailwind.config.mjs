/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#F4EEE3',
        linen: '#E7D9C7',
        sandstone: '#C9B59D',
        'monsoon-ink': '#1F2A2A',
        'river-slate': '#4B5B5A',
        'temple-teal': '#2F6B68',
        terracotta: '#A95F3D',
        'brass-leaf': '#8B7A42',
        'sage-thread': '#899486',
        marigold: '#E07B1A',
        // backward compat aliases
        ivory: '#F4EEE3',
        midnight: '#1F2A2A',
        teal: '#2F6B68',
        sage: '#C9B59D',
      },
    },
  },
  plugins: [],
};
