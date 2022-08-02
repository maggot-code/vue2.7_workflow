/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\usecase\useScreenGridChunk.js
 * @Author: maggot-code
 * @Date: 2022-08-01 10:41:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 13:08:46
 * @Description:
 */
import { unref, ref } from 'vue';
import { chunk } from 'lodash';

export const GridChunkConfig = {
    datasource: [],
    cut: 3,
};

export function useScreenGridChunk(props) {
    const config = Object.assign({}, GridChunkConfig, props ?? {});

    const gridCutRef = ref(chunk(unref(config.datasource), unref(config.cut)));

    const setupGridCut = (props) => {
        const { datasource, cut } = Object.assign({}, config, props ?? {});
        gridCutRef.value = chunk(unref(datasource), unref(cut));
    };

    return {
        gridCutRef,
        setupGridCut,
    };
}

export default useScreenGridChunk;
