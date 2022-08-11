/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config.entity.js
 * @Author: maggot-code
 * @Date: 2022-08-11 11:13:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-11 17:17:37
 * @Description:
 * setBasemapsOptions
 * setSceneOptions
 * setPitch
 * setPitchRange
 * zoomIn
 * zoomOut
 */
import { SceneEntity } from './Scene.entity';

export function ConfigEntity() {
    const { sceneMode, sceneCamera } = SceneEntity();

    return {
        sceneMode,
        sceneCamera,
    };
}

export default ConfigEntity;
