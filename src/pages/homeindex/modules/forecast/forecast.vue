<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 17:30:48
 * @Description: 预报模块
-->
<script setup>
import ScreenMenu from "@/composable/Screen/view/ScreenMenu.vue";

import { NodeProps, useTreeNode } from "@/composable/Tree";

const props = defineProps(NodeProps);
const { bind } = useTreeNode(props);
</script>

<template>
    <div>
        <h1>{{ props.name }}</h1>
        <ScreenMenu v-bind="bind">
            <template #default="node">
                <p>{{ node.name }}</p>
            </template>
        </ScreenMenu>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
