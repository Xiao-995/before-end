import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (dir: any) => resolve(__dirname, dir)
// https://vite.dev/config/
// svg矢量图标
import {
  createSvgIconsPlugin
} from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [vue(),
  // 图标url
  createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
    symbolId: 'icon-[dir]-[name]',
  }),
  ],
  pluginOptions: {
    'style-resources-loader': {
      perProcessor: "scss",
      pattenrns: []
    }
  },
  server: {
    port: 8080, // 默认端口号
    open: true, // 自动打开浏览器 
    cors: true // 允许跨域
  },
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  }
})
