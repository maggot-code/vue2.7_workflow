<!--
 * @FilePath: \arcgismap\src\biz\Tabs\view\TabsDefault\TabsDefaultLabel.vue
 * @Author: zhangxin
 * @Date: 2022-08-09 16:57:01
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-10 16:09:22
 * @Description:
-->
<script setup>
import { computed, ref } from 'vue';
defineProps({
    node: {
        type: Object,
        default: () => {},
    },
    baseIndex: {
        type: Number,
        default: 0,
    },
    index: {
        type: Number,
        default: 0,
    },
});
const tabsDefaultLabelRefs = ref();
const elWidth = computed(() => {
    if (tabsDefaultLabelRefs.value) {
        return tabsDefaultLabelRefs.value.clientWidth + 20 + 'px';
    } else {
        console.log('为什么每次都走这里');
        return '80px';
    }
});
</script>

<template>
    <div
        class="tabs-default-label"
        :style="{width:elWidth}"
        ref="tabsDefaultLabelRefs"
        :class="baseIndex === index ? 'is-active': ''"
    >
        <span>{{node.name ?? '未知标签'}}</span>
    </div>
</template>

<style scoped lang='scss'>
.tabs-default-label {
    height: 35px;
    color: #fff;
    word-break: keep-all;
    white-space: nowrap;
    :hover {
        color: #7fffd4;
    }
    display: flex;
    justify-content: center;
    align-items: center;
}
.is-active {
    color: #7fffd4;
}
</style>
