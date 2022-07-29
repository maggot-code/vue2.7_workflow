<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\city\city.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:50:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 09:14:08
 * @Description: 城市内涝模块
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">city</div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
