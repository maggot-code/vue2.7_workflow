<!--
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\real-time\real-time.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 13:51:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 11:10:20
 * @Description: 实时监测模块
-->
<script setup>
import { modules } from "./children/install";
import { useComponentSetup } from '@/composable/Component';
import { useTreeProps } from "@/composable/Tree";

const setupGridComponent = useComponentSetup(modules);
const props = defineProps(useTreeProps());

function handlerNode(node) {
    console.log(node);
}
</script>

<template>
    <div class="modules-container">
        <ScreenMenu :inject="props.field" v-bind="props" @clickNode="handlerNode">
            <template #default="menuBind">
                <component :is="setupGridComponent(menuBind.component)" v-bind="menuBind"></component>
            </template>
        </ScreenMenu>
    </div>
</template>

<style scoped lang='scss'>
@import "@/pages/homeindex/modules.scss";
</style>
