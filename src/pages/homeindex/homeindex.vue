<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\homeindex.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:39:03
 * @Description: 防汛作战大屏容器
-->
<script setup>
// import PingguIdentity from "@/assets/json/pinggu.identity.json";
// import MiyunIdentity from "@/assets/json/miyun.identity.json";
import AdminIdentity from "@/assets/json/admin.identity.json";
import ScreenGrid from '@/layout/ScreenGrid.vue';
import { modules } from "./modules/install";

import { computed } from "vue";
import { chunk } from "lodash";
import { useTreeUseable } from "@/composable/Tree";

const screenGridData = computed(() => {
    const { complete } = useTreeUseable(AdminIdentity.modules);
    return chunk(complete, 3);
});
console.log(screenGridData);
</script>

<template>
    <div class="home-index">
        <template v-for="(row, index) in screenGridData">
            <div :key="index" class="home-index-row">
                <template v-for="(node) in row">
                    <ScreenGrid class="home-index-row-item" :key="node.id" v-bind="node">
                        <component :is="modules[node.view.component]" v-bind="node"></component>
                    </ScreenGrid>
                </template>
            </div>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "./homeindex.scss";
</style>
