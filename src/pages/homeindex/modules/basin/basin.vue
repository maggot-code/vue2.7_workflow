<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\basin\basin.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:49:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 13:43:59
 * @Description: 流域洪水模块
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
