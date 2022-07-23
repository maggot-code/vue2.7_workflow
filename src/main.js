/*
 * @FilePath: /vue2.7_workflow/src/main.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-24 00:56:57
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';

import 'normalize.css';
import '@/assets/style/index.scss';

new Vue({
    render: (h) => h(App),
}).$mount('#app');
