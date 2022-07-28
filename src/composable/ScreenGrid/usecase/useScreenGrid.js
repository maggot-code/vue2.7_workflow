/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\usecase\useScreenGrid.js
 * @Author: maggot-code
 * @Date: 2022-07-26 15:08:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 15:25:39
 * @Description:
 */
import { unref, ref, computed } from 'vue';
import { chunk } from 'lodash';
import { useTreeUseable } from '@/composable/Tree';

export const screenGridProps = {
    modules: [],
    cut: 3,
};

export function useScreenGrid(props = {}) {
    const { modules, cut } = Object.assign({}, screenGridProps, props);

    const modulesRef = ref(modules);
    const cutRef = ref(cut);

    const gridData = computed(() => {
        const { complete } = useTreeUseable(unref(modulesRef));
        return chunk(complete, unref(cutRef));
    });

    function setupGridData(props = {}) {
        const { modules, cut } = Object.assign({}, screenGridProps, props);
        modulesRef.value = modules;
        cutRef.value = cut;
    }

    return {
        gridData,
        setupGridData,
    };
}

export default useScreenGrid;
