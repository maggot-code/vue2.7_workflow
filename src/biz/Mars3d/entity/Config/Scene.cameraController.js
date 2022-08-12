/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Scene.cameraController.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:18:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 16:52:16
 * @Description:
 */
import { unref, ref, computed } from 'vue';
import { assign } from 'lodash';
import { toBoolean } from '@/shared/transform';

import SceneCameraControllerJson from '../../shared/config/scene.cameraController.json';

export function SceneCameraControllerEntity() {
    const rotate = ref(true);
    const translate = ref(true);
    const tilt = ref(true);
    const zoom = ref(true);
    const enable = computed({
        get() {
            return {
                enableRotate: unref(rotate),
                enableTranslate: unref(translate),
                enableTilt: unref(tilt),
                enableZoom: unref(zoom),
            };
        },
        set(config) {
            setupRotate(config.rotate);
            setupTranslate(config.translate);
            setupTilt(config.tilt);
            setupZoom(config.zoom);
        },
    });
    const config = computed(() => {
        return assign(SceneCameraControllerJson, unref(enable));
    });
    function setupRotate(state) {
        if (state === unref(rotate)) return;

        rotate.value = toBoolean(state, true);
    }
    function setupTranslate(state) {
        if (state === unref(translate)) return;

        translate.value = toBoolean(state, true);
    }
    function setupTilt(state) {
        if (state === unref(tilt)) return;

        tilt.value = toBoolean(state, true);
    }
    function setupZoom(state) {
        if (state === unref(zoom)) return;

        zoom.value = toBoolean(state, true);
    }
    function setupEnable(state) {
        setupRotate(state);
        setupTranslate(state);
        setupTilt(state);
        setupZoom(state);
    }

    return {
        enable,
        config,
        setupRotate,
        setupTranslate,
        setupTilt,
        setupZoom,
        setupEnable,
    };
}

export default SceneCameraControllerEntity;
