<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:59:22
 * @Description: 预报模块
-->
<script setup>
import components from "./children/install";

import { useNodeProps } from "@/composable/Tree";
import { useComponentProps, useComponent } from "@/composable/Component";
import { useScreenNodeProps } from "@/composable/Screen";

const { setupName } = useComponent(components);
const props = defineProps({
    ...useNodeProps(),
    ...useComponentProps(),
    ...useScreenNodeProps()
});
</script>

<template>
    <div class="modules-container">
        <template v-for="(node) in props.children">
            <component :key="node.key" :is="setupName(node.component)" v-bind="node">
            </component>
        </template>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
