<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\real-time\real-time.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 17:44:59
 * @Description: 实时监测模块
-->
<script setup>
import ScreenHead from "@/composable/ScreenGrid/view/ScreenHead.vue";
import ScreenMenu from "@/composable/ScreenGrid/view/ScreenMenu.vue";

import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">
        <ScreenHead :className="['modules-container-head']">
            <ScreenMenu v-bind="props"></ScreenMenu>
        </ScreenHead>
        <div class="modules-container-body"></div>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
