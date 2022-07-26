<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:52:00
 * @Description: 预报模块
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
console.log(props);
</script>

<template>
    <h1>forecast</h1>
</template>

<style scoped lang='scss'>
</style>
