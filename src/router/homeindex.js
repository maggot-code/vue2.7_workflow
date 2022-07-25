/*
 * @FilePath: \vue2.7_workflow\src\router\homeindex.js
 * @Author: maggot-code
 * @Date: 2022-07-25 16:44:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 16:49:33
 * @Description: webpackChunkName: "HomeIndexPage"
 */
export default {
    path: '/home',
    name: 'HomeIndexPage',
    meta: {},
    component: () =>
        import(
            /* webpackChunkName: "HomeIndexPage" */ '@/pages/homeindex/homeindex.vue'
        ),
};
