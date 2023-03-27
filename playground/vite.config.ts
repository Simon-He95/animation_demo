/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  base: './',
  build: {
    target: 'es2015', // 兼容现代浏览器
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
            grid: 'autoplace',
          },
          stage: 3,
        }),
      ],
    },
  },
  plugins: [
    legacy({
      targets: ['ie >= 11'], // 兼容IE11及以上版本浏览器
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    Vue({
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
