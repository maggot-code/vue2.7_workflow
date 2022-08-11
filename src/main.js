/*
 * @FilePath: \arcgismap\src\main.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-11 15:15:56
 * @Description:
 */
import Vue from 'vue';
import { setupRouter } from '@/router';

import App from '@/App.vue';
import Empty from '@/component/Empty.vue';
import Unknow from '@/component/Unknow.vue';
import Icon from '@/component/SpritePicture.vue';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/index.scss';

Vue.component('Empty', Empty);
Vue.component('Unknow', Unknow);
Vue.component('Icon', Icon);

new Vue({
    render: (h) => h(App),
    router: setupRouter(),
}).$mount('#app');
