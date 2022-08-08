/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\usecase\useScreenTree.js
 * @Author: maggot-code
 * @Date: 2022-08-08 15:59:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 16:18:25
 * @Description:
 */
import { computed, unref, shallowRef } from 'vue';
import { useTransform } from './useTransform';

import { cloneDeep, assign, chunk } from 'lodash';
import { ScreenTreeProps } from '../shared/props';

export function useScreenTree(props = ScreenTreeProps) {
    const { datasource, cut } = assign(ScreenTreeProps, cloneDeep(props));
    const { setupTree } = useTransform();

    const screenTree = shallowRef(setupTree(datasource));
    const screenTreeCut = computed(() => {
        return chunk(unref(screenTree), cut);
    });

    function setupScreenTree(data = ScreenTreeProps.datasource) {
        const toTree = setupTree(data);
        screenTree.value = toTree;
        return toTree;
    }

    return {
        screenTree,
        screenTreeCut,
        setupScreenTree,
    };
}

export default useScreenTree;
