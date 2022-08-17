/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Map\Map.view.js
 * @Author: maggot-code
 * @Date: 2022-08-16 15:58:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-17 13:33:28
 * @Description:
 */
import { unref, ref, shallowRef, computed } from 'vue';
import { Map } from 'mars3d';
import { isNil } from 'lodash';
import { v4 } from 'uuid';
import { toObject } from '@/shared/transform';

export function MapViewEntity() {
    const map = shallowRef(null);
    const mapRefs = ref(null);
    const ready = ref(false);
    const hasMap = computed(() => !isNil(unref(map)));
    const toUsable = computed(() => {
        return unref(hasMap) && unref(ready);
    });

    function setupMap(mapConfig) {
        if (unref(hasMap)) cancelMap();
        const { config } = mapConfig;

        map.value = new Map(unref(mapRefs), toObject(config));
        map.value._sign = v4();

        return unref(map);
    }

    function cancelMap() {
        if (!unref(hasMap)) return;

        // Cesium 在销毁map view之后并没有跟着销毁WebGL上下文
        // 导致多次创建map view时，WebGL上下文超过浏览器限制而丢失（谷歌浏览器测试上限16个）
        // 需要主动释放WebGL上下文，在销毁map view之前
        unref(map)
            .scene.context._originalGLContext.getExtension('WEBGL_lose_context')
            .loseContext();
        unref(map).destroy();
        map.value = null;
        ready.value = false;

        return unref(map);
    }

    function effectMaploadReady() {
        ready.value = true;
        console.log('map view load completed');
    }

    return {
        map,
        mapRefs,
        ready,
        hasMap,
        toUsable,
        setupMap,
        cancelMap,
        effectMaploadReady,
    };
}

export default MapViewEntity;
