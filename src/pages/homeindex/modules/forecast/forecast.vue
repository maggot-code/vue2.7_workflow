<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 13:39:29
 * @Description: 预报模块
-->
<script setup>
import { ScreenMenu, useScreenProps } from "@/biz/Screen";

const props = defineProps(useScreenProps());
function handlerNode({ valid }) {
    console.log(valid.componentName);
}
</script>

<template>
    <ScreenMenu v-bind="props" @change="handlerNode"></ScreenMenu>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
