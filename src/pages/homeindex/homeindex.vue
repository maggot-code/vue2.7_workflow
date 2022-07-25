<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 17:15:03
 * @Description: 防汛作战大屏容器
-->
<script setup>
import AdminIdentity from "@/assets/json/admin.identity.json";
import ScreenGrid from '@/layout/ScreenGrid.vue';

import { useFloorUseable } from "@/composable/Tree";

const { modules } = AdminIdentity;
console.table(useFloorUseable(modules).complete);
</script>

<template>
    <div class="home-index">
        <h1>home index</h1>
        <ScreenGrid></ScreenGrid>
    </div>
</template>

<style scoped lang='scss'>
@import "./homeindex.scss";
</style>
