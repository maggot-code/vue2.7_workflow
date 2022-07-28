<script setup>
import ScreenNode from "./ScreenNode.vue";

import { computed } from "vue";
import { useTreeProps } from "@/composable/Tree";
import { useScreenLabelProps, useScreenLabel, useScreenRender } from "@/composable/ScreenGrid";

const emit = defineEmits(["clickNode"]);
const props = defineProps({
    ...useTreeProps(),
    ...useScreenLabelProps()
});

const {
    label
} = useScreenLabel(props);
const { usableRender } = useScreenRender(props);
const style = computed(() => {
    const offset = (props.level - 1) <= 0 ? 0 : (props.level - 1) * 16;
    return {
        paddingLeft: `${offset}px`
    }
});

function handlerNode() {
    emit("clickNode", props);
}
function handlerNodeOut(node) {
    emit("clickNode", node);
}
</script>

<template>
    <div class="screen-node" :style="style" @click.stop="handlerNode">
        <p>{{ label }}</p>
        <template v-if="usableRender">
            <template v-for="(node) in props.children">
                <ScreenNode :key="node.id" v-bind="node" @clickNode="handlerNodeOut"></ScreenNode>
            </template>
        </template>
    </div>
</template>

<style scoped lang='scss'>
</style>
