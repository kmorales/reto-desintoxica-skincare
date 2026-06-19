import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'afrodita-rose': 'hsl(340 45% 65%)',
        'afrodita-leaf': 'hsl(140 30% 50%)',
        'afrodita-beige': 'hsl(25 25% 85%)',
        'afrodita-gold': 'hsl(45 70% 70%)',
        'afrodita-earth': 'hsl(25 40% 65%)',
        'afrodita-rose-light': 'hsl(340 45% 95%)',
        'afrodita-leaf-light': 'hsl(140 30% 94%)',
        'afrodita-beige-dark': 'hsl(25 25% 70%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
