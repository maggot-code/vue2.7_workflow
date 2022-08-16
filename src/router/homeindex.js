/*
 * @FilePath: \arcgismap\src\router\homeindex.js
 * @Author: maggot-code
 * @Date: 2022-07-25 16:44:24
 * @LastEditTime: 2022-08-16 13:21:46
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
        path: '/map',
        name: 'MapViewPage',
        meta: {},
        component: () =>
            import(
                /* webpackChunkName: "HomeIndexPage" */ '@/pages/mapview/mapview.vue'
            ),

        children: [
            {
                path: 'apply',
                name: 'ApplyPage',
                meta: {},
                component: () =>
                    import(
                        /* webpackChunkName: "HomeIndexPage" */ '@/pages/apply/apply.vue'
                    ),
            },
        ],
    },
];
