<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\children\rain-forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 14:21:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 14:03:03
 * @Description: 预报模块 降雨预报
-->
<script setup>
import { useNodeProps } from "@/composable/Tree";
import { useComponentProps } from "@/composable/Component";
import { useScreenNodeProps } from "@/composable/Screen";

const props = defineProps({
    ...useNodeProps(),
    ...useComponentProps(),
    ...useScreenNodeProps()
});

console.log(props);
</script>

<template>
    <p>rain forecast {{ props.pathString }}</p>
</template>

<style scoped lang='scss'>
</style>
