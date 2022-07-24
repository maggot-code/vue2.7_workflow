<!--
 * @FilePath: /vue2.7_workflow/src/biz/Grid/view/GridContainer.vue
 * @Author: maggot-code
 * @Date: 2022-07-24 01:28:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-24 13:14:15
 * @Description: 
-->
<script setup>
import { useGrid } from "../index";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

console.log(props);

useGrid(props.name, props);
</script>

<template>
    <div class="grid-container">
        <h3>grid container {{ name }}</h3>
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>
</style>
