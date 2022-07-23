<!--
 * @FilePath: /vue2.7_workflow/src/biz/Grid/view/GridContainer.vue
 * @Author: maggot-code
 * @Date: 2022-07-24 01:28:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-24 02:04:59
 * @Description: 
-->
<script setup>
import {
    defineProps,
} from "vue";
import { useGrid } from "../index";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
});

useGrid(props.name, props);
</script>

<template>
    <div class="grid-container">grid container {{ name }}</div>
</template>

<style scoped lang='scss'>
</style>
