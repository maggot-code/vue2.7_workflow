<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenMenu\view\ScreenNode.vue
 * @Author: maggot-code
 * @Date: 2022-07-29 09:44:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 13:34:44
 * @Description: 
-->
<script setup>
import ScreenNode from "./ScreenNode.vue";

import { inject, unref, computed } from "vue";
import { useTreeProps } from "@/composable/Tree";

const emits = defineEmits(["clickNode"]);
const props = defineProps(useTreeProps({
    injectName: {
        type: String,
        default: "screenMenu"
    }
}));
const { view } = inject(props.injectName);

const className = computed(() => {
    const activeClassName = unref(view).field === props.field ? "screen-node-active" : "";

    return [
        activeClassName
    ];
});
const style = computed(() => {
    const offset = props.level - 1 <= 0 ? 0 : props.level - 1;

    return {
        paddingLeft: `${offset * 10}px`
    }
});

function handlerNode() {
    emits("clickNode", props);
}
function handlerNodeSelf(node) {
    emits("clickNode", node);
}
</script>

<template>
    <div :style="style">
        <div :class="className" @click="handlerNode">
            <p>{{ props.name }}</p>
        </div>

        <div v-if="props.toChild">
            <template v-for="(node) in props.children">
                <slot name="child" v-bind="node">
                    <ScreenNode :key="node.id" :injectName="props.injectName" v-bind="node"
                        @clickNode="handlerNodeSelf">
                    </ScreenNode>
                </slot>
            </template>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.screen-node-active {
    color: pink;
}
</style>
