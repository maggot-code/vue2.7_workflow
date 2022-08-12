/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Scene.mode.js
 * @Author: maggot-code
 * @Date: 2022-08-12 15:37:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 15:43:33
 * @Description:
 */
import { unref, ref, computed } from 'vue';
import { Cesium } from 'mars3d';

const { SCENE2D, COLUMBUS_VIEW, SCENE3D } = Cesium.SceneMode;
const ModeLabel = {
    [SCENE2D]: '2D模式',
    [COLUMBUS_VIEW]: '2.5D模式',
    [SCENE3D]: '3D模式',
};

export function SceneModeEntity() {
    const mode = ref(SCENE3D);
    const label = computed(() => ModeLabel[unref(mode)]);

    function sceneMode2D() {
        mode.value = SCENE2D;
    }
    function sceneMode25D() {
        mode.value = COLUMBUS_VIEW;
    }
    function sceneMode3D() {
        mode.value = SCENE3D;
    }

    return {
        mode,
        label,
        sceneMode2D,
        sceneMode25D,
        sceneMode3D,
    };
}

export default SceneModeEntity;
