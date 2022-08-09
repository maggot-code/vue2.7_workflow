<!--
 * @FilePath: \vue2.7_workflow\src\biz\Screen\view\ScreenLabel.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 10:40:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 13:34:11
 * @Description: 
-->
<script setup>
defineProps({
    label: {
        type: [String, Number],
        default: "屏幕标签"
    }
});
</script>

<template>
    <div class="screen-label">
        <p>{{ label }}</p>
    </div>
</template>

<style scoped lang='scss'>
.screen-label {
    font-size: 24px;
    line-height: 32px;
    color: #666;
    font-weight: bold;
}
</style>
