<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\defense\defense.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 09:14:15
 * @Description: 山洪防御模块
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">defense</div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
