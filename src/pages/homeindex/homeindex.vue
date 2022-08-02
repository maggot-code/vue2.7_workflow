<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 14:29:32
 * @Description: 防汛作战大屏容器
-->
<script setup>
// import PingguIdentity from "@/assets/json/pinggu.identity.json";
// import MiyunIdentity from "@/assets/json/miyun.identity.json";
import AdminIdentity from "@/assets/json/admin.identity.json";
import components from "./modules/install";

import { onMounted } from "vue";
import { useTransform } from "@/composable/Tree";
import { useComponent, useComponentNode } from "@/composable/Component";
import { useScreenGridChunk } from "@/composable/Screen";

const { gridCutRef, setupGridCut } = useScreenGridChunk();
const { setupName } = useComponent(components);
const { setupTree } = useTransform([
    useComponentNode
]);

onMounted(() => {
    const datasource = setupTree(AdminIdentity.modules);
    setupGridCut({ datasource });
    console.log(datasource);
});
</script>

<template>
    <div class="home-index">
        <template v-for="(row, index) in gridCutRef">
            <div :key="index">
                <template v-for="(node) in row">
                    <component :key="node.nodeKey" :is="setupName(node.component)" v-bind="node"></component>
                </template>
            </div>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "./homeindex.scss";
</style>
