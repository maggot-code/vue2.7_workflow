/*
 * @FilePath: \arcgismap\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 17:07:33
 * @Description:
 */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue2';
import vitePluginCesium from 'vite-plugin-mars3d';
import legacy from '@vitejs/plugin-legacy';
import viteComperssion from 'vite-plugin-compression';
import viteComponents from 'unplugin-vue-components/vite';
import { ElementUiResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';

const mars3dCesium = vitePluginCesium['default'];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        mars3dCesium(),
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
