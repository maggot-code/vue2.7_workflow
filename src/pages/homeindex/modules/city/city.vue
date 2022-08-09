<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\city\city.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:50:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 15:05:35
 * @Description: 城市内涝模块
-->
<script setup>
import { defineCustomComponent } from "@/composable/Component";
import { ScreenMenu, useScreenProps } from "@/biz/Screen";
import components from "./children/install";

const props = defineProps(useScreenProps());
const { componentName, setupComponent, setupName } = defineCustomComponent(components);
function handlerNode({ valid }) {
    setupComponent(valid.componentName);
}
</script>

<template>
    <div class="screen-grid">
        <ScreenMenu v-bind="props" @change="handlerNode"></ScreenMenu>
        <component class="screen-grid-body" :is="setupName(componentName)"></component>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/grid.scss";
</style>
