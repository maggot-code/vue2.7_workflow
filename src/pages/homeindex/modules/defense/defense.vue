<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\defense\defense.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 13:44:24
 * @Description: 山洪防御模块
-->
<script setup>
import { modules } from "./children/install";
import { useComponentSetup } from '@/composable/Component';
import { useTreeProps } from "@/composable/Tree";

const setupGridComponent = useComponentSetup(modules);
const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">123</div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
