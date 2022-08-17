/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useMap.js
 * @Author: maggot-code
 * @Date: 2022-08-15 11:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-17 13:55:51
 * @Description:
 */
import { provide, onMounted, onUnmounted, unref } from 'vue';
import {} from 'mars3d';

import { MarsMapSymbolName, MarsMapLoadSymbolName } from '../shared/context';

import { MapViewEntity } from '../entity/Map/Map.view';
import { useConfig } from './useConfig';
import { useRotate } from './useRotate';
import { useLoad } from '@/composable/Load';

const loadOptions = {
    name: MarsMapLoadSymbolName,
    color: 'rgba(0,0,0,0.3)',
    useTips: false,
};

export function useMap() {
    const { loadBind, load } = useLoad(loadOptions);
    const mapEntity = MapViewEntity();
    const { map, mapRefs, toUsable, setupMap, cancelMap, effectMaploadReady } =
        mapEntity;
    const mapConfig = useConfig();
    onMounted(() => setupMap(mapConfig));

    const { rotatePoint } = useRotate({ mapEntity });
    onMounted(async () => {
        await unref(map).openFlyAnimation({ duration1: 4 });
        rotatePoint.start();
        effectMaploadReady();
    });
    onUnmounted(() => {
        cancelMap();
    });

    provide(MarsMapSymbolName, {
        map,
        mapRefs,
        toUsable,
        mapConfig,
    });
    return {
        maploading: load,
        mapLoadbind: loadBind,
        mapRefs,
        map,
        toUsable,
    };
}

export default useMap;
