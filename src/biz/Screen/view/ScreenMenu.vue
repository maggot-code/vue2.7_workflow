<!--
 * @FilePath: \vue2.7_workflow\src\biz\Screen\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-08-02 16:57:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 10:42:36
 * @Description: 
-->
<script setup>
import ScreenNode from "./ScreenNode.vue";
import ScreenLabel from "./ScreenLabel.vue";

import { useScreenProps } from "../usecase/useScreenProps";
import { TreeNode, defineTreeNode } from "@/composable/Tree";

const props = defineProps(useScreenProps());
defineTreeNode(props, {
    toLoop: setupToloop
});

function setupToloop(node) {
    return node.hasChild && !node.hasChildOnlyone && node.renderChild;
}
</script>

<template>
    <div>
        <ScreenLabel></ScreenLabel>
        <template v-for="(node) in props.children">
            <TreeNode :key="node.nodeKey" v-bind="node">
                <template #tonode="tonode">
                    <ScreenNode v-bind="tonode"></ScreenNode>
                </template>
            </TreeNode>
        </template>
    </div>
</template>

<style scoped lang='scss'>
</style>
