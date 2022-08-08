<!--
 * @FilePath: \vue2.7_workflow\src\biz\Screen\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-08-02 16:57:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 18:09:21
 * @Description: 
-->
<script setup>
import { unref, ref } from "vue";
import { useScreenProps } from "../usecase/useScreenProps";
import { TreeNode } from "@/composable/Tree";

const props = defineProps(useScreenProps());
const name = ref(props.name);

let a = 0;
function setupRecursion(node) {
    a++;
    console.log(node);
    console.log(a);
    return true;
}
</script>

<template>
    <div>
        <h1>{{ name }}</h1>
        <TreeNode v-if="setupRecursion(props)" v-bind="props"></TreeNode>
    </div>
</template>

<style scoped lang='scss'>
</style>
