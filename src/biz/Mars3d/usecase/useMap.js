/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useMap.js
 * @Author: maggot-code
 * @Date: 2022-08-15 11:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-15 18:19:26
 * @Description:
 */
import {
    provide,
    onMounted,
    onUnmounted,
    unref,
    ref,
    shallowRef,
    computed,
} from 'vue';
import { Cesium, EventType, Map } from 'mars3d';
import { isNil } from 'lodash';
import { v4 } from 'uuid';

import { useEvent, useEventOnce } from './useEvent';
import { useConfig } from './useConfig';
import { MarsMapSymbolName } from '../shared/context';

let previousTime = 0;

function effectRenderError() {
    console.log('map view render error!');
}

export function useMap() {
    const mapRefs = ref(null);
    const map = shallowRef(null);
    const hasMap = computed(() => !isNil(unref(map)));
    const { config } = useConfig();

    function createMap() {
        if (unref(hasMap)) destroyMap();

        map.value = new Map(unref(mapRefs), config);
        map.value._id = v4();

        return unref(map);
    }
    function destroyMap() {
        if (!unref(hasMap)) return;

        unref(map).destroy();
        map.value = null;

        return unref(map);
    }

    function effectRotate() {
        console.log(11);
        const spinRate = 1;
        const currentTime = unref(map).clock.currentTime.secondsOfDay;
        const delta = (currentTime - previousTime) / 1000;

        previousTime = currentTime;
        unref(map).scene.camera.rotate(
            Cesium.Cartesian3.UNIT_Z,
            -spinRate * delta
        );
    }

    const output = {
        mapRefs,
        map,
        hasMap,
        createMap,
        destroyMap,
    };

    provide(MarsMapSymbolName, output);

    onMounted(() => {
        const mapview = createMap();
        previousTime = mapview.clock.currentTime.secondsOfDay;
        useEventOnce(mapview, EventType.renderError, effectRenderError);
        useEvent(mapview, EventType.clockTick, effectRotate);
        console.log(mapview);
    });

    onUnmounted(() => {
        destroyMap();
    });

    return output;
}

export default useMap;
