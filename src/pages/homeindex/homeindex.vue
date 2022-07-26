<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:35:58
 * @Description: 防汛作战大屏容器
-->
<script setup>
import AdminIdentity from "@/assets/json/admin.identity.json";
import ScreenGrid from '@/layout/ScreenGrid.vue';

import { useTreeUseable } from "@/composable/Tree";

const { complete } = useTreeUseable(AdminIdentity.modules);
</script>

<template>
    <div class="home-index">
        <h1>home index</h1>
        <template v-for="(node) in complete">
            <ScreenGrid :key="node.id" v-bind="node"></ScreenGrid>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "./homeindex.scss";
</style>
