<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenHead.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 15:39:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 17:43:17
 * @Description: 
-->
<script setup>
import { computed } from 'vue';

const props = defineProps({
    className: {
        type: Array,
        default: () => []
    },
    size: {
        type: String,
        default: "default"
    }
});
</script>

<template>
    <div class="screen-head" :class="className">
        <slot name="label"></slot>
        <slot></slot>
    </div>
</template>

<style scoped lang='scss'>
.screen-head {
    width: 100%;
    height: 48px;
    overflow: hidden;
}
</style>
