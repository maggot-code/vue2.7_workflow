<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenLabel.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 15:33:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 14:37:18
 * @Description: 
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";
import { useScreenLabel } from "@/composable/ScreenGrid";

const props = defineProps(useTreeProps());
const { label } = useScreenLabel(props);
</script>

<template>
    <h1>screen {{ label }}</h1>
</template>

<style scoped lang='scss'>
</style>
