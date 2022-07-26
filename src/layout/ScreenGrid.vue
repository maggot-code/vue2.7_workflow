<!--
 * @FilePath: \vue2.7_workflow\src\layout\ScreenGrid.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 16:55:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:14:37
 * @Description: 
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

defineProps(useTreeProps());
// console.log(props);
</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>
</style>
