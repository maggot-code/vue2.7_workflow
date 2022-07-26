<!--
 * @FilePath: \vue2.7_workflow\src\layout\ScreenGrid.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 16:55:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:59:39
 * @Description: 
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";
import { computed } from "vue";

const props = defineProps(useTreeProps());

const label = computed(() => {
    if (props.hasChildOnlyone) return props.view.firstLabel;

    return props.view.label;
});
</script>

<template>
    <h1>{{ label }}</h1>
</template>

<style scoped lang='scss'>
</style>
