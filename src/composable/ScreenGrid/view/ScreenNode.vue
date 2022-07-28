<script setup>
import ScreenNode from "./ScreenNode.vue";

import { computed } from "vue";
import { useTreeProps } from "@/composable/Tree";
import { useScreenLabelProps, useScreenLabel } from "@/composable/ScreenGrid";

const props = defineProps({
    ...useTreeProps(),
    ...useScreenLabelProps()
});
const {
    label
} = useScreenLabel(props);
const style = computed(() => {
    const offset = (props.level - 1) <= 0 ? 0 : (props.level - 1) * 16;
    return {
        paddingLeft: `${offset}px`
    }
});
</script>

<template>
    <div class="screen-node" :style="style">
        <p>{{ label }}</p>
        <template v-if="props.hasChild && !props.hasChildOnlyone">
            <template v-for="(node) in props.children">
                <ScreenNode :key="node.id" v-bind="node"></ScreenNode>
            </template>
        </template>
    </div>
</template>

<style scoped lang='scss'>
</style>
