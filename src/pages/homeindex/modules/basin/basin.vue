<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\basin\basin.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:49:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 09:14:00
 * @Description: 流域洪水模块
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">basin</div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
