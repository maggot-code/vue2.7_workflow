<!--
 * @FilePath: \arcgismap\src\biz\Tabs\view\TabsHome\TabsHome.vue
 * @Author: zhangxin
 * @Date: 2022-08-09 16:51:08
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-10 16:24:00
 * @Description:
-->
<script setup>
import { Tabs, useTabsProps } from '@/composable/Tab';
import TabsHomeLabel from './TabsHomeLabel.vue';
const props = defineProps(useTabsProps());
const emit = defineEmits(['tabClick']);
const tabClick = (node, index) => {
    emit('tabClick', node, index);
};
</script>

<template>
    <div class="tabs-home">
        <Tabs class="tabs-home-body" v-bind="props" @tabClick="tabClick">
            <template #label="{node,baseIndex,index}">
                <TabsHomeLabel v-bind="{node,baseIndex,index}"></TabsHomeLabel>
            </template>
            <template #body="currentNode">
                <div class="tabs-home-content">
                    {{currentNode.component}}
                </div>
            </template>
        </Tabs>
    </div>
</template>

<style scoped lang='scss'>
.tabs-home {
    .tabs-home-content {
        background: red;
        display: flex;
    }
}
</style>
