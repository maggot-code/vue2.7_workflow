<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 15:33:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 14:50:04
 * @Description: 
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";
import { useScreenLabel } from "@/composable/ScreenGrid";

const props = defineProps(useTreeProps());
const { label } = useScreenLabel(props);

</script>

<template>
    <el-popover :title="label"></el-popover>
</template>

<style scoped lang='scss'>
</style>
