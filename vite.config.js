/*
 * @FilePath: /vue2.7_workflow/vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-23 23:38:01
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not ie < 9'],
        }),
    ],
});
