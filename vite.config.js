/*
 * @FilePath: /vue2.7_workflow/vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-24 01:00:55
 * @Description:
 */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        splitVendorChunkPlugin(),
        legacy({
            targets: ['defaults', 'not ie < 9'],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/style/var.scss";`,
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
