<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\forecast.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 16:34:12
 * @Description: 预报模块
-->
<script setup>
import { useScreenProps } from "@/composable/Screen";

const props = defineProps(useScreenProps());

console.log(props);
</script>

<template>
    <div>
        forecast
        <!-- <h1>{{ props.name }}</h1>
        <ScreenMenu v-bind="bind" node-class="screen-node">
            <template #default="node">
                <p>{{ node.name }}</p>
                <p>{{ node.pathString }}</p>
            </template>
        </ScreenMenu> -->
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
