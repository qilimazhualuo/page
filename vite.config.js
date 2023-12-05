import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // 基础less，可以修改主题
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/vars.less')}";`,
        },
        javascriptEnabled: true
      }
    }
  },
})
