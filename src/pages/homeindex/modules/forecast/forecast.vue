<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 14:20:55
 * @Description: 预报模块
-->
<script setup>
import ScreenHead from "@/composable/ScreenGrid/view/ScreenHead.vue";
import ScreenLabel from "@/composable/ScreenGrid/view/ScreenLabel.vue";
import ScreenMenu from "@/composable/ScreenGrid/view/ScreenMenu.vue";

import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
console.log(props);
</script>

<template>
    <div class="modules-container">
        <ScreenHead :className="['modules-container-head']">
            <template #label>
                <ScreenLabel v-bind="props"></ScreenLabel>
            </template>
            <template #menu>
                <ScreenMenu v-bind="props"></ScreenMenu>
            </template>
        </ScreenHead>
        <div class="modules-container-body"></div>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
