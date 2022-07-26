<!--
 * @FilePath: \vue2.7_workflow\src\composable\Progress\view\ProgressContainer.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 15:22:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 15:24:59
 * @Description: 
-->
<script setup ></script>

<template>
    <div class="progress-container">
        <slot></slot>

        <div class="progress-container-layout">
            <h1>进度条</h1>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.progress-container {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &-layout {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
