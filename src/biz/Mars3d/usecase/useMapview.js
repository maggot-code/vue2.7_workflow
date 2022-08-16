/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useMapview.js
 * @Author: maggot-code
 * @Date: 2022-08-15 11:22:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 11:08:53
 * @Description:
 */
import { inject } from 'vue';
import { MarsMapSymbolName } from '../shared/context';

export function useMapview() {
    return inject(MarsMapSymbolName);
}

export default useMapview;
