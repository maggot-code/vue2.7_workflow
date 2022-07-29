<!--
 * @FilePath: \vue2.7_workflow\src\composable\ScreenMenu\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-07-29 09:17:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 13:39:15
 * @Description: 
-->
<script setup>
import { computed } from "vue";
import { useTreeProps } from "@/composable/Tree";
import { useScreenMenuProps, useScreenMenu } from "@/composable/ScreenMenu";

const emits = defineEmits(["clickNode"]);
const props = defineProps(useTreeProps(useScreenMenuProps()));
const { view, setupView, transformPropsToView } = useScreenMenu(props);
const menuBind = computed(() => {
    return
});

function handlerNode(node) {
    setupView(transformPropsToView(node));
    emits("clickNode", node);
}
</script>

<template>
    <div class="screen-menu">
        <!-- click hover -->
        <el-popover v-if="props.toChild && !props.hasChildOnlyone" :placement="props.placement"
            :trigger="props.trigger">
            <div slot="reference">
                <slot name="label" v-bind="view">
                    <p>{{ view.label }}</p>
                </slot>
            </div>

            <div>
                <template v-for="(node) in props.children">
                    <slot name="node" :injectName="props.field" :placement="props.placement" v-bind="node"
                        @click="handlerNode">
                        <ScreenNode :key="node.id" :injectName="props.field" :placement="props.placement" v-bind="node"
                            @clickNode="handlerNode"></ScreenNode>
                    </slot>
                </template>
            </div>
        </el-popover>

        <template v-else>
            <slot name="label" v-bind="view">
                <p>{{ view.label }}</p>
            </slot>
        </template>

        <slot v-bind="view"></slot>
    </div>
</template>

<style scoped lang='scss'>
</style>
