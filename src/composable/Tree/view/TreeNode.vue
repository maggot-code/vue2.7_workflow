<!--
 * @FilePath: \vue2.7_workflow\src\composable\Tree\view\TreeNode.vue
 * @Author: maggot-code
 * @Date: 2022-08-01 23:03:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 18:02:05
 * @Description: 
-->
<script setup>
import FragmentNode from "./FragmentNode.vue";
import TreeNode from "./TreeNode.vue";

import { inject, computed, unref } from "vue";
import { useNodeProps } from "../usecase/useNodeProps";
import { useTreeNode } from "../usecase/useTreeNode";
import { toArray } from "@/shared/transform";

const props = defineProps(useNodeProps());
const { bind, setupAttrs } = useTreeNode(props);

const { handler } = inject(unref(bind).parent.nodeKey);

const nodeClassName = computed(() => {
    const nodeClass = toArray(unref(bind).nodeClass);

    return [].concat(nodeClass);
});
const nodeStyle = computed(() => {
    return {
        color: "pink",
    };
});
</script>

<template>
    <div :class="nodeClassName" :style="nodeStyle">
        <slot name="tonode" v-bind="bind">
            <FragmentNode v-bind=bind />
        </slot>

        <template v-if="handler.doRecursion(bind)">
            <TreeNode v-for="(node) in bind.children" :key="node.nodeKey" v-bind="setupAttrs(node)">
                <template #tonode="tonode">
                    <slot name="tonode" v-bind="tonode">
                        <FragmentNode v-bind="tonode" />
                    </slot>
                </template>
            </TreeNode>
        </template>
    </div>
</template>

<style scoped lang='scss'>
</style>
