<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\real-time\real-time.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 14:53:43
 * @Description: 实时监测模块
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
    <div>
        <ScreenMenu v-bind="props" @change="handlerNode"></ScreenMenu>
        <component :is="setupName(componentName)"></component>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
