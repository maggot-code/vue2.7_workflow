<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 10:52:37
 * @Description: 防汛作战大屏容器
-->
<script setup>
// import PingguIdentity from "@/assets/json/pinggu.identity.json";
// import MiyunIdentity from "@/assets/json/miyun.identity.json";
import AdminIdentity from "@/assets/json/admin.identity.json";
import components from "./modules/install";

import { useTransform } from "@/composable/Tree";
import { useComponentNode, useComponent } from "@/composable/Component";
import { useScreenNode, useScreenGridChunk } from "@/composable/Screen";

const { setupName } = useComponent(components);
const { gridData, setupGridData } = useScreenGridChunk({ cut: 3 });
const { setupTree } = useTransform([
    useComponentNode,
    useScreenNode
]);

setupGridData({ datasource: setupTree(AdminIdentity.modules) });
</script>

<template>
    <div class="home-index">
        <template v-for="(row, index) in gridData">
            <div :key="index" class="home-index-row">
                <template v-for="(node) in row">
                    <component class="home-index-row-item" :key="node.key" :is="setupName(node.component)"
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
