<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\real-time\real-time.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 09:14:29
 * @Description: 实时监测模块
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
