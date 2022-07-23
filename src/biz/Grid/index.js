/*
 * @FilePath: /vue2.7_workflow/src/biz/Grid/index.js
 * @Author: maggot-code
 * @Date: 2022-07-24 01:28:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-24 02:11:19
 * @Description:
 */
import { provide } from 'vue';

const GridSymbolName = 'Grid';

export function setupGridName(name) {
    return `${GridSymbolName}-${name}`;
}

export function useGrid(name, props) {
    console.log(props);
    const gridName = setupGridName(name);

    const grid = {
        gridName,
        setupGridName,
    };

    provide(gridName, grid);

    return grid;
}

export function useGridInject(name) {
    const gridName = setupGridName(name);

    const grid = inject(gridName, {});

    return grid;
}

export default useGrid;
