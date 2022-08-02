<!--
 * @FilePath: \vue2.7_workflow\src\composable\Tree\view\TreeNode.vue
 * @Author: maggot-code
 * @Date: 2022-08-01 23:03:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 17:29:56
 * @Description: 
-->
<script setup>
import FragmentNode from "./FragmentNode.vue";
import TreeNode from "./TreeNode.vue";

import { inject, computed, unref } from "vue";
import { NodeProps } from "../shared/props";
import { useTreeNode } from "../usecase/useTreeNode";

const props = defineProps(NodeProps);
const { bind } = useTreeNode(props);

const { handler } = inject(unref(bind).parent.nodeKey);

const style = computed(() => {
    const offset = (unref(bind).level - 1) * 24;

    return {
        paddingLeft: `${offset}px`
    }
});
</script>

<template>
    <div :style="style">
        <slot name="tonode" v-bind="bind">
            <FragmentNode v-bind=bind />
        </slot>

        <template v-if="handler.doRecursion(bind)">
            <TreeNode v-for="(node) in bind.children" :key="node.nodeKey" v-bind="node">
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
