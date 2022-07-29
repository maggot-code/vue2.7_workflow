<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 11:07:08
 * @Description: 防汛作战大屏容器
-->
<script setup>
// import PingguIdentity from "@/assets/json/pinggu.identity.json";
// import MiyunIdentity from "@/assets/json/miyun.identity.json";
import AdminIdentity from "@/assets/json/admin.identity.json";
import { modules } from "./modules/install";

import { useComponentSetup } from "@/composable/Component";
import { useScreenGrid } from "@/composable/ScreenGrid";

const setupGridComponent = useComponentSetup(modules);
const { gridData } = useScreenGrid({
    modules: AdminIdentity.modules
});
</script>

<template>
    <div class="home-index">
        <template v-for="(row, index) in gridData">
            <div :key="index" class="home-index-row">
                <template v-for="(node) in row">
                    <component class="home-index-row-item" :key="node.id" :is="setupGridComponent(node.component)"
                        v-bind="node">
                    </component>
                </template>
            </div>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "./homeindex.scss";
</style>
