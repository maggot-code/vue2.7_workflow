<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-07-28 11:05:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 14:51:00
 * @Description: 
-->
<script setup>
import ScreenNode from "./ScreenNode.vue";

import { onMounted, computed } from "vue";
import { toArray } from '@/shared/transform';
import { useTreeProps } from "@/composable/Tree";
import { useScreenLabelProps, useScreenLabel, useScreenRender } from "@/composable/ScreenGrid";

const emit = defineEmits(["clickNode"]);
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
const { usableRender } = useScreenRender(props);
const headClassName = computed(() => toArray(props.className));

function handlerNode(node) {
    emit("clickNode", node);
}

onMounted(() => { });
</script>

<template>
    <el-popover v-if="usableRender" class="screen-menu" placement="left" :class="headClassName" :trigger="trigger">
        <div class="scrren-head-theme" slot="reference">{{ label }}</div>
        <div class="screen-head-content">
            <template v-for="(node) in props.children">
                <ScreenNode :key="node.id" v-bind="node" @clickNode="handlerNode"></ScreenNode>
            </template>
        </div>
    </el-popover>

    <div v-else class="screen-menu scrren-head-theme" slot="reference">{{ label }}</div>
</template>

<style scoped lang='scss'>
</style>
