<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 16:39:19
 * @Description: 预报模块
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";
const props = defineProps(useTreeProps());
</script>

<template>
    <div class="modules-container">
        <!-- <ScreenMenu className="modules-container-menu" v-bind="props" @clickNode="handlerNode"></ScreenMenu>
        <div class="modules-container-body">
            <component :key="vnodeKey" v-bind="componentBind"></component>
        </div> -->
        <h1>menu</h1>
        <h1>body</h1>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
