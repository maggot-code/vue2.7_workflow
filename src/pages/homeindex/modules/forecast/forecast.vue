<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 14:43:49
 * @Description: 预报模块
-->
<script setup>
import ScreenMenu from "@/composable/ScreenGrid/view/ScreenMenu.vue";
import { modules } from "./children/install";

import { useTreeProps } from "@/composable/Tree";
import { useComponentRender } from "@/composable/Component";

const props = defineProps(useTreeProps());
const {
    vnodeKey,
    componentBind,
    setupComponentBind
} = useComponentRender(modules, props.field);
function handlerNode(node) {
    const { component: name } = node.view;
    setupComponentBind({
        name,
        meta: node
    });
}
</script>

<template>
    <div class="modules-container">
        <ScreenMenu className="modules-container-menu" v-bind="props" @clickNode="handlerNode"></ScreenMenu>
        <div class="modules-container-body">
            <component :key="vnodeKey" v-bind="componentBind"></component>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
