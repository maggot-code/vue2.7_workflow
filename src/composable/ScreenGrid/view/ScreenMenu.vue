<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-07-28 11:05:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 11:33:17
 * @Description: 
-->
<script setup>
import ScreenNode from "./ScreenNode.vue";

import { computed } from "vue";
import { toArray } from '@/shared/transform';
import { useTreeProps } from "@/composable/Tree";
import { useScreenLabelProps, useScreenLabel } from "@/composable/ScreenGrid";

const props = defineProps({
    className: {
        type: [Array, String],
        default: () => []
    },
    trigger: {
        type: String,
        default: "hover"
    },
    ...useTreeProps(),
    ...useScreenLabelProps()
});
const {
    label
} = useScreenLabel(props);
const headClassName = computed(() => toArray(props.className));
</script>

<template>
    <el-popover v-if="props.hasChild && !props.hasChildOnlyone" class="screen-menu" placement="left"
        :class="headClassName" :trigger="trigger">
        <div class="scrren-head-theme" slot="reference">{{ label }}</div>
        <div class="screen-head-content">
            <template v-for="(node) in props.children">
                <ScreenNode :key="node.id" v-bind="node"></ScreenNode>
            </template>
        </div>
    </el-popover>

    <div v-else class="screen-menu scrren-head-theme" slot="reference">{{ label }}</div>
</template>

<style scoped lang='scss'>
</style>
