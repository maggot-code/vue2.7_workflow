<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 09:10:41
 * @Description: 预报模块
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";

const props = defineProps(useTreeProps());
console.log(props);
</script>

<template>
    <div class="modules-container">
        <!-- <ScreenMenu className="modules-container-menu" v-bind="props" @clickNode="handlerNode"></ScreenMenu>
        <div class="modules-container-body">
            <component :key="vnodeKey" v-bind="componentBind"></component>
        </div> -->
        <h1>menu</h1>
        <div class="modules-container-body">
            <!-- <component :key="vnodeKey" v-bind="componentBind"></component> -->
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
