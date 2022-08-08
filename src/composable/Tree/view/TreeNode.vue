<!--
 * @FilePath: \vue2.7_workflow\src\composable\Tree\view\TreeNode.vue
 * @Author: maggot-code
 * @Date: 2022-08-01 23:03:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 18:03:23
 * @Description: 
-->
<script setup>
import FragmentNode from "./FragmentNode.vue";
import TreeNode from "./TreeNode.vue";

import { onMounted, onBeforeUnmount, unref, ref } from "vue";
import { useNodeProps } from "../usecase/useNodeProps";
import { toBoolean } from "@/shared/transform";

const emits = defineEmits(["doRecursion"]);
const props = defineProps(useNodeProps());
const toRecursion = ref(props.hasChild);

onMounted(() => {
    console.log(unref(toRecursion));
});
onBeforeUnmount(() => {
    toRecursion.value = false;
});
</script>

<template>
    <div>
        <h1>tree node</h1>
        <!-- <slot name="tonode" v-bind="bind">
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
        </template> -->
    </div>
</template>

<style scoped lang='scss'>
</style>
