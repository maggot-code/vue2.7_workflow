/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useMap.js
 * @Author: maggot-code
 * @Date: 2022-08-15 11:05:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 15:27:41
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
import { EventType, Map } from 'mars3d';
import { isNil } from 'lodash';
import { v4 } from 'uuid';

import { useEventOnce } from './useEvent';
import { useConfig } from './useConfig';
import { MarsMapSymbolName } from '../shared/context';

function effectRenderError() {
    console.log('map view render error!');
}

export function useMap() {
    const mapRefs = ref(null);
    const map = shallowRef(null);
    const hasMap = computed(() => !isNil(unref(map)));
    const mapUsable = computed(() => unref(hasMap));
    const { config, usableMouse, unusableMouse } = useConfig(map);
    const output = {
        mapRefs,
        map,
        hasMap,
        mapUsable,
        createMap,
        destroyMap,
        usableMouse,
        unusableMouse,
    };
    async function createMap() {
        if (unref(hasMap)) destroyMap();

        map.value = new Map(unref(mapRefs), config);
        map.value._id = v4();

        return unref(map);
    }
    function destroyMap() {
        if (!unref(hasMap)) return;

        // Cesium 在销毁map view之后并没有跟着销毁WebGL上下文
        // 导致多次创建map view时，WebGL上下文超过浏览器限制而丢失（谷歌浏览器测试上限16个）
        // 需要主动释放WebGL上下文，在销毁map view之前
        unref(map)
            .scene.context._originalGLContext.getExtension('WEBGL_lose_context')
            .loseContext();
        unref(map).destroy();
        map.value = null;

        return unref(map);
    }

    onMounted(createMap);
    onUnmounted(destroyMap);
    useEventOnce(map, EventType.renderError, effectRenderError);
    provide(MarsMapSymbolName, output);
    return output;
}

export default useMap;
