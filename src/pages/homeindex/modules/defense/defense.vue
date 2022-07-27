<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\defense\defense.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:50:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 17:45:04
 * @Description: 山洪防御模块
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
