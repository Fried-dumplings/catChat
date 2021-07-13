import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 字符串简写写法
      // '/socket.io': 'http://localhost:3001',
      // 选项写法
      '/socket.io': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true,
        // rewrite: path => path.replace(/^\/api/, ''),
      },

      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      // // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/fallback/, ''),
      // },
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  alias: {
    '@/': path.resolve(__dirname, 'src'),
  },
})
