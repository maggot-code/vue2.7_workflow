/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useMap.js
 * @Author: maggot-code
 * @Date: 2022-08-15 11:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 18:20:49
 * @Description:
 */
import { provide, onMounted, onUnmounted, unref, computed } from 'vue';
import { EventType, thing } from 'mars3d';

import { MarsMapSymbolName } from '../shared/context';

import { MapViewEntity } from '../entity/Map/Map.view';
import { useConfig } from './useConfig';
import { useEventOnce } from './useEvent';
import { useRotatePoint } from './useRotatePoint';
import { useLoad } from '@/composable/Load';

const loadOptions = {
    color: 'rgba(255,255,255,0.3)',
    useIcon: false,
    useTips: false,
};

export function useMap() {
    const {
        mapRefs,
        mapReady,
        map,
        hasMap,
        setupMap,
        cancelMap,
        effectMaploadReady,
    } = MapViewEntity();
    const { config } = useConfig();
    const { startRotate, stopRotate } = useRotatePoint(map, hasMap, mapReady);
    const { load, loadBind } = useLoad(loadOptions);
    const mapUsable = computed(() => {
        return unref(hasMap) && unref(mapReady);
    });

    const output = {
        mapRefs,
        map,
        mapUsable,
        mapload: load,
        mapLoadbind: loadBind,
    };

    async function install() {
        const mapview = setupMap(config);
        await mapview.openFlyAnimation();
    }
    function uninstall() {
        cancelMap();
    }
    onMounted(install);
    onUnmounted(uninstall);
    useEventOnce(map, EventType.load, effectMaploadReady);
    provide(MarsMapSymbolName, output);
    return output;
}

export default useMap;
