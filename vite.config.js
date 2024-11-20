import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/era-of-superio-dev/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        trading: resolve(__dirname, 'trading.html'),
        partner: resolve(__dirname, 'partner.html'),
      },
    },
  },
})