<!--
 * @FilePath: \arcgismap\src\biz\Screen\view\ScreenNode.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 10:31:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-10 09:27:06
 * @Description: 
-->
<script setup>
import { computed, unref } from 'vue';
import { useScreenProps } from '../usecase/useScreenProps';
import { useScreenInject } from '../usecase/useScreenInject';
import { compact } from 'lodash';

const OffsetValue = 24;
const node = defineProps(useScreenProps());
const { activeNode, setupActiveNode } = useScreenInject();

const activeSelf = computed(
    () => unref(activeNode).nodeKey === unref(node).nodeKey
);
const containSelf = computed(() => {
    return (
        unref(activeNode).nodePath.includes(unref(node).nodeKey) &&
        !unref(activeSelf)
    );
});
const nodeClassName = computed(() => {
    const containClass = unref(containSelf) ? 'screen-node-contain' : '';
    const activeClass = unref(activeSelf) ? 'screen-node-active' : '';

    return compact([containClass, activeClass]);
});
const nodeStyle = computed(() => {
    const offset = (node.level - 1) * OffsetValue;

    return {
        paddingLeft: `${offset}px`,
    };
});

function handlerNode() {
    setupActiveNode(node);
}
</script>

<template>
    <div
        class="screen-node"
        :class="nodeClassName"
        :style="nodeStyle"
        @click="handlerNode"
    >
        <p>{{ node.name }}</p>
    </div>
</template>

<style scoped lang='scss'>
.screen-node {
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 32px;
    color: #fff;
    cursor: pointer; //鼠标变手
}
.screen-node:hover {
    color: #0ec2f5;
}

.screen-node-contain {
    color: #e6a23c;
}

.screen-node-active {
    color: #e6a23c;
}
.el-popover {
    background: red !important;
}
</style>
