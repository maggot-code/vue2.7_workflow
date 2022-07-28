<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\basin\basin.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:49:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 11:31:35
 * @Description: 流域洪水模块
-->
<script setup>
import ScreenMenu from "@/composable/ScreenGrid/view/ScreenMenu.vue";

import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">
        <ScreenMenu className="modules-container-menu" v-bind="props"></ScreenMenu>
        <div class="modules-container-body">body</div>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
