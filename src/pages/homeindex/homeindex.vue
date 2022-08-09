<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 13:29:27
 * @Description: 防汛作战大屏容器
-->
<script setup>
// import PingguIdentity from "@/assets/json/pinggu.identity.json";
// import MiyunIdentity from "@/assets/json/miyun.identity.json";
import AdminIdentity from "@/assets/json/admin.identity.json";
import components from "./modules/install";

import { onMounted } from "vue";
import { defineCustomComponent } from "@/composable/Component";
import { useScreenTree } from "@/biz/Screen";

const { setupName } = defineCustomComponent(components);
const { screenTreeCut, setupScreenTree } = useScreenTree();

onMounted(() => {
    setupScreenTree(AdminIdentity.modules);
    console.log(screenTreeCut.value);
});
</script>

<template>
    <div class="home-index">
        <template v-for="(row) in screenTreeCut">
            <template v-for="(node) in row">
                <component :key="node.nodeKey" :is="setupName(node.componentName)" v-bind="node"></component>
            </template>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "./homeindex.scss";
</style>
