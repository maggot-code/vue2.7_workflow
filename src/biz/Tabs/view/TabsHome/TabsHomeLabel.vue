<!--
 * @FilePath: \arcgismap\src\biz\Tabs\view\TabsHome\TabsHomeLabel.vue
 * @Author: zhangxin
 * @Date: 2022-08-09 16:57:01
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-10 15:58:18
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
const tabsHomeLabelRefs = ref();
const elWidth = computed(() => {
    if (tabsHomeLabelRefs.value) {
        return tabsHomeLabelRefs.value.clientWidth + 40 + 'px';
    } else {
        console.log('为什么每次都走这里');
        return '100px';
    }
});
</script>

<template>
    <div
        class="tabs-home-label"
        :style="{width:elWidth}"
        ref="tabsHomeLabelRefs"
        :class="baseIndex === index ? 'is-active': ''"
    >
        <span>{{node.name ?? '未知标签'}}</span>
    </div>
</template>

<style scoped lang='scss'>
.tabs-home-label {
    margin-right: 5px;
    height: 35px;
    color: #fff;
    background: url('@/assets/images/gif/beijing.gif') no-repeat;
    border-radius: 20px 5px 20px 5px;
    word-break: keep-all;
    white-space: nowrap;
    background-size: cover;
    :hover {
        color: #d5f83b;
    }
    display: flex;
    justify-content: center;
    align-items: center;
}
.is-active {
    color: #d5f83b;
    background: url('@/assets/images/gif/tuli.gif') no-repeat !important;
    background-size: 100% 100% !important;
}
</style>
