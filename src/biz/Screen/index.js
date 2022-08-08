/*
 * @FilePath: \vue2.7_workflow\src\biz\Screen\index.js
 * @Author: maggot-code
 * @Date: 2022-07-29 16:33:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 18:02:27
 * @Description:
 */
import { defineComponent } from 'vue';

export * from './usecase/useTransform';
export * from './usecase/useScreenTree';
export * from './usecase/useScreenNode';
export * from './usecase/useScreenProps';
export const ScreenMenu = defineComponent(() =>
    import('./view/ScreenMenu.vue')
);
