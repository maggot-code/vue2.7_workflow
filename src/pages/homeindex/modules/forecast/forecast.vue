<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 10:06:36
 * @Description: 预报模块
-->
<script setup>
import components from "./children/install";
import TreeView from "@/composable/Tree/view/TreeView.vue";
import TreeNode from "@/composable/Tree/view/TreeNode.vue";

import { useNodeProps } from "@/composable/Tree";
import { useComponentProps, useComponent } from "@/composable/Component";
import { useScreenNodeProps } from "@/composable/Screen";

const { setupName } = useComponent(components);
const props = defineProps({
    ...useNodeProps(),
    ...useComponentProps(),
    ...useScreenNodeProps(),
});
</script>

<template>
    <!-- <el-popover v-if="usablePopover" trigger="hover">
        <p slot="reference">{{ props.componentName }}</p>
        <TreeView></TreeView>
    </el-popover>

    <p v-else>{{ props.componentName }}</p> -->
    <div>
        <p>{{ props.componentName }}</p>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
