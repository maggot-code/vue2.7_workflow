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
        default: '屏幕标签',
    },
});
</script>

<template>
    <div class="screen-label">
        <p><i></i>{{ label }}</p>
    </div>
</template>

<style scoped lang='scss'>
.screen-label {
    font-size: 14px;
    line-height: 25px;
    color: #fff;
    background: url('@/assets/images/gif/beijing.gif');
    position: relative;
}
.screen-label p {
    padding: 5px;
}
.screen-label i {
}
.screen-label::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(0, #afc4c2, transparent);
    border-left: 30px solid #afc4c2;
    box-sizing: border-box;
}
.screen-label::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(0, #afc4c2, transparent);
    border-left: 30px solid #afc4c2;
    box-sizing: border-box;
}
</style>
