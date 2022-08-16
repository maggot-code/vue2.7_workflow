/*
 * @FilePath: \arcgismap\src\main.js
 * @Author: maggot-code
 * @Date: 2022-07-23 23:29:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 15:14:32
 * @Description:
 */
import Vue from 'vue';
import { setupRouter } from '@/router';
import { Loading } from 'element-ui';

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
Vue.use(Loading.directive);

new Vue({
    render: (h) => h(App),
    router: setupRouter(),
}).$mount('#app');
