/*
 * @FilePath: \vue2.7_workflow\src\pages\tabindex\hooks\useTabs.js
 * @Author: zhangxin
 * @Date: 2022-07-29 17:09:39
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-02 17:54:18
 * @Description:
 */
import { ref, computed, unref } from 'vue';

export function useTabs(tabMap, defualtId) {
    const baseIndex = ref(0);
    const defaultIndex = computed(() => {
        return tabMap.findIndex((item) => item.id === defualtId) === -1
            ? 0
            : tabMap.findIndex((item) => item.id === defualtId);
    });
    const currentNode = computed(() => tabMap[unref(baseIndex)]);
    const setupCurrentIndex = (index) => (baseIndex.value = index);

    return {
        baseIndex,
        defaultIndex,
        currentNode,
        setupCurrentIndex,
    };
}
