<!--
 * @FilePath: \arcgismap\src\pages\homeindex\modules\forecast\children\rain-forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 14:21:05
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-10 16:24:59
 * @Description: 预报模块 降雨预报
-->
<script setup>
import { TabsDefault, TabsHome } from '@/biz/Tabs';
import TreeTest from '@/assets/json/admin.identity.json';
let structure = TreeTest.modules.map((item) => item.children)[0];
</script>

<template>
    <TabsHome tabPosition="default" :structure="structure"></TabsHome>
    <!-- <p>rain forecast</p> -->
</template>

<style scoped lang='scss'>
</style>
