<!--
 * @FilePath: \vue2.7_workflow\src\composable\Tree\view\TreeNode.vue
 * @Author: maggot-code
 * @Date: 2022-08-01 23:03:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 13:28:07
 * @Description: 
-->
<script setup>
import FragmentNode from "./FragmentNode.vue";
import TreeNode from "./TreeNode.vue";

import { useAttrs, inject, computed } from "vue";
import { TreeNodeConfig } from "../usecase/useTreeNode";
import { useNodeProps } from "../usecase/useNodeProps";
import { toBoolean } from "@/shared/transform";
import { assign } from "lodash";

const props = defineProps(useNodeProps());
const attrs = useAttrs();
const { toLoop } = inject(props.nodePath[0], TreeNodeConfig);

const doLoop = computed(() => {
    return toBoolean(toLoop(assign({}, props, attrs)));
});
</script>

<template>
    <div class="tree-node">
        <slot name="tonode" v-bind="props">
            <FragmentNode v-bind="props" />
        </slot>

        <template v-if="doLoop">
            <TreeNode v-for="(node) in props.children" :key="node.nodeKey" v-bind="node">
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
.tree-node {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
</style>
