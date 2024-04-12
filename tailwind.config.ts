import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
    extend: {
      gridTemplateRows: {
        store: 'min-content max-content',
      },
      maxWidth: {
        default: '1600px',
      },
    },
  },
  plugins: [],
}
export default config
