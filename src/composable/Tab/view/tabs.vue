<!--
 * @Author: abc088_6kAX_code 86451477+abc-0886kAX-code@users.noreply.github.com
 * @Date: 2022-07-29 13:28:52
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-11 13:16:30
 * @FilePath: \arcgismap\src\composable\Tab\view\tabs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { unref, onMounted, computed, ref } from 'vue';
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

const tabsHeadRefs = ref();
const isShowPlace = ref(false);
const moveLocation = (place) => {
    tabsHeadRefs.value.scrollLeft =
        place === 'left'
            ? tabsHeadRefs.value.scrollLeft - 150
            : tabsHeadRefs.value.scrollLeft + 150;
};

onMounted(() => {
    switchTabs(unref(defaultIndex));
    isShowPlace.value =
        tabsHeadRefs.value.scrollWidth !== tabsHeadRefs.value.clientWidth &&
        props.tabPosition === 'default';
});
</script>

<template>
    <div class="tabs">
        <div v-if="isShowPlace" class="icon-left" @click="moveLocation('left')">
            <i class="el-icon-caret-left"></i>
        </div>
        <div
            v-if="isShowPlace"
            class="icon-right"
            @click="moveLocation('right')"
        >
            <i class="el-icon-caret-right"></i>
        </div>
        <div
            class="tabs-head"
            :class="[tabPosition,isShowPlace ? 'is-show-place':'']"
            ref="tabsHeadRefs"
        >
            <template v-for="(node,index) in data">
                <div
                    :key="node.id"
                    @click.stop="switchTabs(index)"
                    :style="paddingStyle"
                >
                    <slot
                        class="tabs-head-item-tab"
                        name="label"
                        v-bind="{node,baseIndex,index,tabPosition}"
                    ></slot>
                </div>
            </template>
        </div>
        <slot name="body" v-bind="currentNode"> </slot>
    </div>
</template>

<style scoped lang='scss'>
@import url('./tabs.scss');
</style>
