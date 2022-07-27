<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 18:04:09
 * @Description: 预报模块
-->
<script setup>
import ScreenHead from "@/composable/ScreenGrid/view/ScreenHead.vue";
import ScreenLabel from "@/composable/ScreenGrid/view/ScreenLabel.vue";
import ScreenMenu from "@/composable/ScreenGrid/view/ScreenMenu.vue";

import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());

const aa = (bb) => {
    console.log(bb);
    return "更多"
}
</script>

<template>
    <div class="modules-container">
        <ScreenHead :className="['modules-container-head']">
            <ScreenMenu v-bind="props">
                <template #extend="labelSlot">
                    <p>{{ aa(labelSlot) }}</p>
                </template>
            </ScreenMenu>
            <!-- <ScreenLabel v-bind="props"></ScreenLabel> -->
        </ScreenHead>
        <div class="modules-container-body"></div>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
