import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const plugins = [vue()]
const resolve = {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
}

export default defineConfig({
  plugins,
  resolve,
})
