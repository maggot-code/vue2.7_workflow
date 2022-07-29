<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenMenu\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-07-29 09:17:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 10:50:05
 * @Description: 
-->
<script setup>
import { useTreeProps } from "@/composable/Tree";
import { useScreenMenu } from "@/composable/ScreenMenu";

const emits = defineEmits(["clickNode"]);
const props = defineProps(useTreeProps());
const { view, setupView, transformPropsToView } = useScreenMenu(props);

function handlerNode(node) {
    setupView(transformPropsToView(node));
    emits("clickNode", node);
}
</script>

<template>
    <div class="screen-menu">
        <slot v-bind="view"></slot>

        <!-- click hover -->
        <el-popover v-if="props.toChild && !props.hasChildOnlyone" placement="right" trigger="click">
            <p slot="reference">{{ view.label }}</p>

            <div>
                <template v-for="(node) in props.children">
                    <ScreenNode :key="node.id" :injectName="props.field" v-bind="node" @clickNode="handlerNode">
                    </ScreenNode>
                </template>
            </div>
        </el-popover>

        <p v-else>{{ view.label }}</p>
    </div>
</template>

<style scoped lang='scss'>
</style>
