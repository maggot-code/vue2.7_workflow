/*
 * @FilePath: \vue2.7_workflow\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 11:27:36
 * @Description:
 */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import viteComperssion from 'vite-plugin-compression';
import viteComponents from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        splitVendorChunkPlugin(),
        legacy({
            targets: ['defaults', 'not ie < 9'],
        }),
        viteComperssion({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
            deleteOriginFile: false,
        }),
        viteComponents({
            resolvers: [],
            dirs: [
                'src/component',
                'src/composable',
                'src/layout',
                'src/pages',
            ],
            extensions: ['vue', 'tsx'],
            dts: true,
            deep: true,
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
