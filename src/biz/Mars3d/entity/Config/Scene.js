/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Scene.js
 * @Author: maggot-code
 * @Date: 2022-08-12 15:37:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 16:42:24
 * @Description:
 * setSceneOptions
 */
import { unref, computed } from 'vue';
import { assign } from 'lodash';
import { SceneModeEntity } from './Scene.mode';
import { SceneGlobeEntity } from './Scene.globe';
import { SceneClockEntity } from './Scene.clock';
import { SceneCameraControllerEntity } from './Scene.cameraController';

import SceneJson from '../../shared/config/scene.json';

export function SceneEntity() {
    const sceneMode = SceneModeEntity();
    const sceneGlobe = SceneGlobeEntity();
    const sceneClock = SceneClockEntity();
    const sceneCameraController = SceneCameraControllerEntity();

    const config = computed(() => {
        const scene = assign(SceneJson, {
            sceneMode: unref(sceneMode.mode),
            globe: unref(sceneGlobe.config),
            clock: unref(sceneClock.config),
            cameraController: unref(sceneCameraController.config),
        });

        return assign(scene);
    });

    return {
        sceneMode,
        sceneGlobe,
        sceneClock,
        sceneCameraController,
        config,
    };
}

export default SceneEntity;
