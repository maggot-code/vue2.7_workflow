/*
 * @FilePath: \arcgismap\src\biz\Mars3d\index.js
 * @Author: maggot-code
 * @Date: 2022-08-10 16:23:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 15:56:38
 * @Description:
 */
import { defineComponent } from 'vue';
import useMap from './usecase/useMap';

export * from './usecase/useEvent';
export * from './usecase/useConfig';
export * from './usecase/useMap';
export * from './usecase/useMapview';

export const defineMarsMap = useMap;
export const MarsMap = defineComponent(() => import('./view/MarsMap.vue'));
