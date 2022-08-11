/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Scene.entity.js
 * @Author: maggot-code
 * @Date: 2022-08-11 11:13:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-11 17:20:14
 * @Description:
 * sceneMode
 * setSceneOptions
 */
import { unref } from 'vue';
import { SceneModeEntity } from './Scene.mode.entity';
import { SceneCameraEntity } from './Scene.camera.entity';

function setupScene(key, value) {
    return { [key]: unref(value) };
}

function setupGlobe(key, value) {
    return { globe: { [key]: unref(value) } };
}

function setupCamera(key, value) {
    return { cameraController: { [key]: unref(value) } };
}

function setupClock(key, value) {
    return { clock: { [key]: unref(value) } };
}

export function SceneEntity() {
    const sceneMode = SceneModeEntity();
    const sceneCamera = SceneCameraEntity();

    return {
        sceneMode,
        sceneCamera,
    };
}

export default SceneEntity;
