<!--
 * @FilePath: \arcgismap\src\pages\homeindex\modules\forecast\children\rain-forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 14:21:05
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-11 11:28:10
 * @Description: 预报模块 降雨预报
-->
<script setup>
import { TabsDefault, TabsHome } from '@/biz/Tabs';
import TreeTest from '@/assets/json/admin.identity.json';
let structure = TreeTest.modules.map((item) => item.children)[0];
//测试在没有滚动条(数据少)的情况下，左右侧按钮是否还显示
// let structure = [
//     {
//         id: '33',
//         pid: '5',
//         name: '平谷',
//         component: 'massif-defense-domain',
//     },
//     {
//         id: '34',
//         pid: '6',
//         name: '密云',
//         component: 'massif-defense-domain',
//     },
// ];
</script>

<template>
    <!--  tabPosition - default left right-->
    <TabsHome tabPosition="default" :structure="structure"></TabsHome>
</template>

<style scoped lang='scss'>
</style>
