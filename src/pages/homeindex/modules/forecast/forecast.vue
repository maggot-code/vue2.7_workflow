<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 17:14:02
 * @Description: 预报模块
-->
<script setup>
import { ScreenMenu, useScreenProps } from "@/biz/Screen";

const props = defineProps(useScreenProps());
</script>

<template>
    <ScreenMenu v-bind="props">
        <!-- <template #default="node">
            <p>{{ node.name }}</p>
            <p>{{ node.pathString }}</p>
        </template> -->
    </ScreenMenu>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
