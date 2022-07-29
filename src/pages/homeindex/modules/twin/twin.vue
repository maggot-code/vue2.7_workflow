<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\twin\twin.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:52:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 09:14:36
 * @Description: 数字孪生模块
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">
        <div class="modules-container-body">body</div>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
