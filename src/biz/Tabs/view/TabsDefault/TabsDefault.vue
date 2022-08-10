<!--
 * @FilePath: \arcgismap\src\biz\Tabs\view\TabsDefault\TabsDefault.vue
 * @Author: zhangxin
 * @Date: 2022-08-09 16:51:08
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-10 15:57:20
 * @Description:
-->
<script setup>
import { Tabs, useTabsProps } from '@/composable/Tab';
import TabsDefaultLabel from './TabsDefaultLabel.vue';
const props = defineProps(useTabsProps());
const tabClick = (node, index) => {
    console.log(node, index);
};
</script>

<template>
    <div class="tabs-default">
        <Tabs class="tabs-default-body" v-bind="props" @tabClick="tabClick">
            <template #label="{node,baseIndex,index}">
                <TabsDefaultLabel
                    v-bind="{node,baseIndex,index}"
                ></TabsDefaultLabel>
            </template>
            <template #body="currentNode">
                <div class="tabs-default-content">
                    {{currentNode.component}}
                </div>
            </template>
        </Tabs>
    </div>
</template>

<style scoped lang='scss'>
.tabs-default {
    .tabs-default-content {
        background: red;
        display: flex;
    }
}
</style>
