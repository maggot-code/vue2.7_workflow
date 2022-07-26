<!--
 * @FilePath: \vue2.7_workflow\src\layout\ScreenGrid.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 16:55:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 10:58:26
 * @Description: 
-->
<script setup>
import { inject, unref, computed } from "vue";
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());

const label = computed(() => {
    if (props.hasChildOnlyone) return props.view.firstLabel;

    return props.view.label;
});

const { setupTitle } = inject("legend");

function handlerLabel() {
    const val = unref(label);
    console.log(val);
    setupTitle(val);
}
</script>

<template>
    <h1 @click="handlerLabel">{{ label }}</h1>
</template>

<style scoped lang='scss'>
</style>
