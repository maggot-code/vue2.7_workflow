<!--
 * @Author: abc088_6kAX_code 86451477+abc-0886kAX-code@users.noreply.github.com
 * @Date: 2022-07-29 13:28:52
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-10 15:51:20
 * @FilePath: \arcgismap\src\composable\Tab\view\tabs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { unref, onMounted, computed } from 'vue';
import { useTransform } from '@/composable/Tree';
import { useComponentNode } from '@/composable/Component';
import { useTabs } from '../hooks/useTabs';
import { useCheckJump } from '../hooks/useCheckJump';
import { useTabsProps } from '../hooks/useTabsProps';
import tabStyle from '../config/index.js';

const { tabPaddingStyle, tabPositionClass } = tabStyle;

const props = defineProps(useTabsProps());
const emit = defineEmits(['tabClick']);
const { setupTree } = useTransform([useComponentNode]);
const data = setupTree(props.structure);
const { baseIndex, defaultIndex, setupCurrentIndex, currentNode } = useTabs(
    data,
    props.currentId
);
const checkJump = useCheckJump(data);

function switchTabs(index) {
    if (!checkJump(index)) return;
    setupCurrentIndex(index);
    emit('tabClick', unref(currentNode), unref(baseIndex));
}

const tabPosition = computed(() => {
    return props.tabPosition ?? 'default';
});

const paddingStyle = computed(() => {
    return tabPaddingStyle[props.tabPosition];
});

onMounted(() => {
    switchTabs(unref(defaultIndex));
});
</script>

<template>
    <div class="tabs">
        <div class="tabs-head" :class="tabPosition">
            <template v-for="(node,index) in data">
                <div
                    :key="node.id"
                    @click.stop="switchTabs(index)"
                    :style="paddingStyle"
                >
                    <a href="javascript:void(0);" class="a-style">
                        <slot
                            class="tabs-head-item-tab"
                            name="label"
                            v-bind="{node,baseIndex,index,tabPosition}"
                        ></slot>
                    </a>
                </div>
            </template>
        </div>
        <slot name="body" v-bind="currentNode"> </slot>
    </div>
</template>

<style scoped lang='scss'>
.tabs {
    width: 100%;
    height: 100%;
    &-head {
        padding: 5px 0 10px 5px;
    }
}
.a-style {
    text-decoration: none;
    color: #000;
}

.default {
    display: flex;
    overflow-x: auto;
}
.left {
    float: left;
}
.right {
    float: right;
}
</style>
