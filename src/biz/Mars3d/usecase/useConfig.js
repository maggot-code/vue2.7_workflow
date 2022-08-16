/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useConfig.js
 * @Author: maggot-code
 * @Date: 2022-08-12 17:21:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 14:29:01
 * @Description:
 */
import { unref } from 'vue';
import { ConfigEntity } from '../entity/Config';

export function useConfig(mapview) {
    const { config, scene } = ConfigEntity();
    const { sceneCameraController } = scene;
    const { enable, setupEnable } = sceneCameraController;

    function usableMouse() {
        setupEnable(true);
        unref(mapview).setSceneOptions({ cameraController: unref(enable) });
    }
    function unusableMouse() {
        setupEnable(false);
        unref(mapview).setSceneOptions({ cameraController: unref(enable) });
    }

    return {
        config: unref(config),
        usableMouse,
        unusableMouse,
    };
}

export default useConfig;
