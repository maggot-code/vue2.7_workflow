/*
 * @FilePath: \arcgismap\src\composable\Tab\index.js
 * @Author: zhangxin
 * @Date: 2022-07-29 17:10:37
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-09 17:23:01
 * @Description:
 */
export * from './hooks/useTabsProps';
export const Tabs = () => import('./view/tabs.vue');
