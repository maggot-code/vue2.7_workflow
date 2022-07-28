/*
 * @FilePath: \vue2.7_workflow\src\router\homeindex.js
 * @Author: maggot-code
 * @Date: 2022-07-25 16:44:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 17:20:43
 * @Description: webpackChunkName: "HomeIndexPage"
 */
export default [
    {
        path: '/home',
        name: 'HomeIndexPage',
        meta: {},
        component: () =>
            import(
                /* webpackChunkName: "HomeIndexPage" */ '@/pages/homeindex/homeindex.vue'
            ),
    },
    {
        path: '/tree',
        name: 'TreeIndexPage',
        meta: {},
        component: () =>
            import(
                /* webpackChunkName: "HomeIndexPage" */ '@/pages/treeindex/treeindex.vue'
            ),
    },
    {
        path: '/tab',
        name: 'TabIndexPage',
        meta: {},
        component: () =>
            import(
                /* webpackChunkName: "HomeIndexPage" */ '@/pages/tabindex/tabindex.vue'
            ),
    },
];
