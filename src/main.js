/*
 * @FilePath: \vue2.7_workflow\src\main.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:33:32
 * @Description:
 */
import Vue from 'vue';
import { setupRouter } from '@/router';

import App from '@/App.vue';
import Empty from '@/component/Empty.vue';
import Unknow from '@/component/Unknow.vue';

import 'normalize.css';
import '@/assets/style/index.scss';

Vue.component('Empty', Empty);
Vue.component('Unknow', Unknow);

new Vue({
    render: (h) => h(App),
    router: setupRouter(),
}).$mount('#app');
