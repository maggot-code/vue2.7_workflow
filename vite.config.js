/*
 * @FilePath: \arcgismap\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-18 13:14:57
 * @Description:
 */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue2';
import mars3dCesium from 'vite-plugin-mars3d';
import legacy from '@vitejs/plugin-legacy';
import viteComperssion from 'vite-plugin-compression';
import viteComponents from 'unplugin-vue-components/vite';
import { ElementUiResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        splitVendorChunkPlugin(),
        mars3dCesium['default'](),
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
            resolvers: [ElementUiResolver()],
            dirs: [
                'src/component',
                'src/composable',
                'src/layout',
                'src/pages',
            ],
            extensions: ['vue', 'tsx'],
            transformer: 'vue2',
            dts: true,
            deep: true,
        }),
        visualizer({
            filename: './node_modules/.cache/visualizer/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/style/var.scss";`,
            },
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'element-ui': ['element-ui'],
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
