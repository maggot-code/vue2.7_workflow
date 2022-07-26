<!--
 * @FilePath: \vue2.7_workflow\src\layout\ScreenGrid.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 16:55:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:45:45
 * @Description: 
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());

console.log(props);
</script>

<template>
    <h1>screen grid</h1>
</template>

<style scoped lang='scss'>
</style>
