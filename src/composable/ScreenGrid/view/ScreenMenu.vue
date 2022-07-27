<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 15:33:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 18:00:48
 * @Description: 
-->
<script setup>
import ScreenMenu from "./ScreenMenu.vue";
import ScreenLabel from "./ScreenLabel.vue";

import { useTreeProps } from "@/composable/Tree";
import { useScreenLabelProps } from "@/composable/ScreenGrid";

const props = defineProps({
    ...useTreeProps(),
    ...useScreenLabelProps()
});
</script>

<template>
    <el-popover v-if="props.hasChild && !props.hasChildOnlyone" placement="right" trigger="hover">
        <ScreenLabel slot="reference" v-bind="props">
            <template #default="{ labelSlot }">
                <slot v-bind="labelSlot"></slot>
            </template>
            <template #extend="{ labelSlot }">
                <slot name="extend" v-bind="labelSlot"></slot>
            </template>
        </ScreenLabel>

        <template v-for="(node) in props.children">
            <ScreenMenu v-bind="node"></ScreenMenu>
        </template>
    </el-popover>

    <ScreenLabel v-else v-bind="props">
        <template #default="{ labelSlot }">
            <slot v-bind="labelSlot"></slot>
        </template>
        <template #extend="{ labelSlot }">
            <slot name="extend" v-bind="labelSlot"></slot>
        </template>
    </ScreenLabel>
</template>

<style scoped lang='scss'>
</style>
