/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useReady.js
 * @Author: maggot-code
 * @Date: 2022-08-16 10:39:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 11:01:44
 * @Description:
 */
import { onBeforeUnmount, watch } from 'vue';
import { ReadyEntity } from '../entity/Ready/Ready.entity';

export function useReady(handler) {
    const { ready } = ReadyEntity();
    const readyWatch = watch(ready, async (state) => {
        if (!state) return;

        await handler();
        readyWatch();
    });

    onBeforeUnmount(() => {
        readyWatch();
    });

    return readyWatch;
}

export default useReady;
