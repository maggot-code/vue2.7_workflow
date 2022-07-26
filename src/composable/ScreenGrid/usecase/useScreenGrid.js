/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\usecase\useScreenGrid.js
 * @Author: maggot-code
 * @Date: 2022-07-26 15:08:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 15:19:43
 * @Description:
 */
import { computed } from 'vue';
import { chunk } from 'lodash';
import { useTreeUseable } from '@/composable/Tree';

export const screenGridProps = {
    modules: [],
    cut: 3,
};

export function useScreenGrid(props = {}) {
    const { modules, cut } = Object.assign({}, screenGridProps, props);

    const gridData = computed(() => {
        const { complete } = useTreeUseable(modules);
        return chunk(complete, cut);
    });

    return {
        gridData,
    };
}

export default useScreenGrid;
