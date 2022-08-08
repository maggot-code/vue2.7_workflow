<!--
 * @FilePath: \vue2.7_workflow\src\composable\Legend\view\LegendContainer.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 10:42:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 10:57:57
 * @Description: 
-->
<script setup>
import { provide, ref } from 'vue';

const title = ref("");
const setupTitle = (val = "") => {
    title.value = val;
};
provide("legend", {
    setupTitle
});

</script>

<template>
    <div class="legend-container">
        <slot></slot>

        <div class="legend-container-layout">
            <h1>图例</h1>
            <h2>{{ title }}</h2>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.legend-container {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &-layout {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
