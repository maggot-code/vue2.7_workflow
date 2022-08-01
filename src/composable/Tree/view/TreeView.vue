<!--
 * @FilePath: /vue2.7_workflow/src/composable/Tree/view/TreeView.vue
 * @Author: maggot-code
 * @Date: 2022-08-01 23:24:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 00:35:26
 * @Description: 
-->
<script setup>
import { inject, unref } from "vue";
import { useNodeProps } from "@/composable/Tree";

const props = defineProps(useNodeProps());
const otherProps = inject(props.nodeKey);
</script>

<template>
    <div>
        <p>tree view</p>
    </div>
</template>

<style scoped lang='scss'>
</style>
