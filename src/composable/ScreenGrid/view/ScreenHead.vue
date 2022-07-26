<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenHead.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 15:39:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 16:01:10
 * @Description: 
-->
<script setup>
defineProps({
    className: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <div class="screen-head">
        <slot name="label"></slot>
        <slot name="menu"></slot>
    </div>
</template>

<style scoped lang='scss'>
</style>
