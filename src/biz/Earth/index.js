/*
 * @FilePath: \arcgismap\src\biz\Earth\index.js
 * @Author: maggot-code
 * @Date: 2022-08-09 17:49:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 17:53:16
 * @Description:
 */
import { defineComponent } from 'vue';

export const MapView = defineComponent(() => import('./view/MapView.vue'));
