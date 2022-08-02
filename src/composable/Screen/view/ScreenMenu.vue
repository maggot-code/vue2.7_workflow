<!--
 * @FilePath: \vue2.7_workflow\src\composable\Screen\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-08-02 16:57:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 17:55:39
 * @Description: 
-->
<script setup>
import TreeNode from "@/composable/Tree/view/TreeNode.vue";

import { unref } from "vue";
import { useNodeProps, useTreeNode } from "@/composable/Tree";

const props = defineProps(useNodeProps());
const { bind, setupAttrs } = useTreeNode(props, {
    doRecursion: toRecursion
});

function toRecursion(node) {
    return node.hasChild && !node.hasChildOnlyone && node.renderChild;
}
</script>

<template>
    <div v-if="toRecursion(bind)">
        <TreeNode v-for="(node) in bind.children" :key="node.nodeKey" v-bind="setupAttrs(node)">
            <template #tonode="tonode">
                <slot v-bind="tonode"></slot>
            </template>
        </TreeNode>
    </div>
</template>

<style scoped lang='scss'>
</style>
