<!--
 * @FilePath: /vue2.7_workflow/src/composable/Tree/view/TreeNode.vue
 * @Author: maggot-code
 * @Date: 2022-08-01 23:03:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 23:21:45
 * @Description: 
-->
<script setup>
import TreeNode from "./TreeNode.vue";

import { useNodeProps } from "@/composable/Tree";

const props = defineProps(useNodeProps());
console.log(props);
</script>

<template>
    <div>
        <TreeNode v-for="(node) in props.children" :key="node.nodeKey" v-bind="node"></TreeNode>
    </div>
</template>

<style scoped lang='scss'>
</style>
