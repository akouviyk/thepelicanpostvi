/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pelican: {
          // Primary colors from the logo and building
          'coral': '#E85D75',      // Pink/coral from building and logo
          'ocean': '#7FCFD6',      // Teal/turquoise from logo
          'yellow': '#F4C667',     // Golden yellow from logo
          'cream': '#FAF9F6',      // Off-white/cream background
          'sand': '#F5E6D3',       // Warm sand tone
          
          // Updated greens to match tropical/coastal theme
          'green': '#2D9B83',      // Tropical teal-green
          'dark-green': '#1A5E52', // Deep ocean green
          
          // Supporting colors
          'purple': '#B57BA6',     // Purple from building trim
          'pink': '#FFB6C1',       // Light pink accent
          'warm-white': '#FFFFFF', // Pure white
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide': 'slide 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
