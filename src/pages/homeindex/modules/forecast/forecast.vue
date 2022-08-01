<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:52:30
 * @Description: 预报模块
-->
<script setup>
import { modules } from "./children/install";

import { useNodeProps } from "@/composable/Tree";
import { useComponentProps } from "@/composable/Component";
import { useScreenNodeProps } from "@/composable/Screen";

const props = defineProps({
    ...useNodeProps(),
    ...useComponentProps(),
    ...useScreenNodeProps()
});

console.log(props);
</script>

<template>
    <div class="modules-container">asd</div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
