<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\view\ScreenLabel.vue
 * @Author: maggot-code
 * @Date: 2022-07-26 15:33:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 17:58:05
 * @Description: 
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";
import {
    useScreenLabel,
    useScreenLabelProps
} from "@/composable/ScreenGrid";

const props = defineProps({
    ...useTreeProps(),
    ...useScreenLabelProps()
});

const {
    labelSlot,
    label,
    labelClassName,
    iconClassName,
    textClassName
} = useScreenLabel(props);

</script>

<template>
    <div class="screen-label" :class="labelClassName">
        <slot v-bind="labelSlot">
            <i class="screen-label-icon" :class="iconClassName"></i>
            <p class="screen-label-text" :class="textClassName">{{ label }}</p>
        </slot>
        <slot name="extend" v-bind="labelSlot"></slot>
    </div>
</template>

<style scoped lang='scss'>
.screen-label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    font-size: 18px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    &-icon,
    &-text {
        align-self: center;
    }
}
</style>
