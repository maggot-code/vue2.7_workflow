<!--
 * @FilePath: \vue2.7_workflow\src\biz\Screen\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-08-02 16:57:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 15:02:17
 * @Description: 
-->
<script setup>
import { TreeNode, propsToMeta } from "@/composable/Tree";
import ScreenLabel from "./ScreenLabel.vue";
import ScreenNode from "./ScreenNode.vue";

import { useScreenProps } from "../usecase/useScreenProps";
import { useScreen } from "../usecase/useScreen";

const emits = defineEmits(["change"]);
const props = defineProps(useScreenProps());
const { screenVisible, validNode, hasScreenNode } = useScreen(props, emits);
</script>

<template>
    <el-popover class="screen-menu" placement="right" trigger="click" v-model="screenVisible">
        <ScreenLabel slot="reference" :label="validNode.name"></ScreenLabel>
        <template v-if="hasScreenNode">
            <TreeNode v-for="(node) in props.children" :key="node.nodeKey" v-bind="propsToMeta(node)">
                <template #tonode="tonode">
                    <ScreenNode v-bind="tonode"></ScreenNode>
                </template>
            </TreeNode>
        </template>
    </el-popover>
</template>

<style scoped lang='scss'>
.screen-menu {
    width: 100%;
    box-sizing: border-box;
}
</style>
