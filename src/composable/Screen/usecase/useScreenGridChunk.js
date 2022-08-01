/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\usecase\useScreenGridChunk.js
 * @Author: maggot-code
 * @Date: 2022-08-01 10:41:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 11:01:49
 * @Description:
 */
import { shallowRef } from 'vue';
import { chunk } from 'lodash';

import { GridChunkConfig } from '../shared/config';

export function useScreenGridChunk(props) {
    const config = Object.assign({}, GridChunkConfig, props ?? {});

    const gridData = shallowRef(chunk(config.datasource, config.cut));

    const setupGridData = (props) => {
        const { datasource, cut } = Object.assign({}, config, props ?? {});
        gridData.value = chunk(datasource, cut);
    };

    return {
        gridData,
        setupGridData,
    };
}

export default useScreenGridChunk;
